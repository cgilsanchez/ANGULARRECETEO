import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importación de IonicModule
import { RecipeCardComponent } from './recipe-card.component';

@NgModule({
  declarations: [RecipeCardComponent],
  imports: [
    CommonModule,
    IonicModule, // Asegúrate de que está incluido aquí
  ],
  exports: [RecipeCardComponent], // Exportar el componente si se usa en otros módulos
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permitir el uso de componentes personalizados como ion-card-footer
})
export class RecipeCardModule {}
