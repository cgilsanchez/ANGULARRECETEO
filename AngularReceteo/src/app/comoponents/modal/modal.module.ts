import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Importa los componentes de Ionic
  ],
  exports: [ModalComponent], // Si planeas usarlo fuera de este módulo
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite el uso de elementos personalizados como ion-header
})
export class ModalModule {}
