import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChefService } from '../../service/chefs.service';

@Component({
  selector: 'app-chef-modal',
  templateUrl: './chef-modal.component.html',
  styleUrls: ['./chef-modal.component.scss'],
})
export class ChefModalComponent {
  chefForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private chefService: ChefService
  ) {
    this.chefForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  async saveChef() {
    if (this.chefForm.invalid) {
      return;
    }

    const { name } = this.chefForm.value;

    this.chefService.addChef({ name }).subscribe(
      async (response) => {
        console.log('Chef creado:', response);
        await this.closeModal();
      },
      (error) => {
        console.error('Error al crear chef:', error);
      }
    );
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
