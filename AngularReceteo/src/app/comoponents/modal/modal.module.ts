import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent], // Declara el componente del modal
imports: [
    CommonModule,
    FormsModule, // Necesario para [(ngModel)]
    IonicModule, // Necesario para los elementos de Ionic
],
  exports: [ModalComponent], // Exporta el modal para usarlo en otros módulos
})
export class ModalModule {}
