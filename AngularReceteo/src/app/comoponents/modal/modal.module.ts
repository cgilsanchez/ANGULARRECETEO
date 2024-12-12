import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Importar aquí
    IonicModule,
  ],
  exports: [ModalComponent],
})
export class ModalModule {}
