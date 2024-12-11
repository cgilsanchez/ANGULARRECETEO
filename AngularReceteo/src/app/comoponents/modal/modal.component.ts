import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipesService } from '../../service/recipes.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() recipe: any = { name: '', ingredients: '', descriptions: '' }; // Cambiado a descriptions

  constructor(
    private modalCtrl: ModalController,
    private recipesService: RecipesService
  ) {}

  saveRecipe() {
    console.log('Datos enviados al guardar:', this.recipe); // Verifica que descriptions tenga valor
    this.recipesService.saveRecipe(this.recipe).subscribe({
      next: () => {
        console.log('Receta guardada con éxito');
        this.modalCtrl.dismiss(true); // Cerrar modal y notificar cambios
      },
      error: (err) => {
        console.error('Error al guardar la receta:', err);
      }
    });
  }

  close() {
    this.modalCtrl.dismiss(false); // Cerrar modal sin guardar
  }
}
