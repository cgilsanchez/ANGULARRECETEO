import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChefModalComponent } from './chef-modal.component';

    @NgModule({
    declarations: [ChefModalComponent], // Declara el componente del modal
    imports: [
        CommonModule,
        ReactiveFormsModule, // Asegúrate de incluir ReactiveFormsModule
        IonicModule, // Incluye IonicModule para los componentes de Ionic
    ],
    exports: [ChefModalComponent], // Exporta el componente para que otros módulos puedan usarlo
    })
export class ChefModalModule {}
