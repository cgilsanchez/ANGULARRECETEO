import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChefModalComponent } from '../../comoponents/chef-modal/chef-modal.component';
import { ChefService } from '../../service/chefs.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage {
  chefs: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private chefService: ChefService
  ) {
    this.loadChefs();
  }

  async loadChefs() {
    this.chefService.getChefs().subscribe(
      (response: any) => {
        this.chefs = response.data || []; // Asegúrate de que `data` existe
      },
      (error: any) => {
        console.error('Error al cargar chefs:', error);
      }
    );
  }

  async openChefModal() {
    const modal = await this.modalCtrl.create({
      component: ChefModalComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.chefs.push(result.data); // Agregar el chef creado a la lista
      }
    });

    await modal.present();
  }
}
