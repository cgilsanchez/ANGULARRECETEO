import { Component, OnInit } from '@angular/core';
import { ChefService } from '../../service/chefs.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.page.html',
  styleUrls: ['./chef.page.scss'],
})
export class ChefPage implements OnInit {
  chefs: any[] = [];

  constructor(
    private chefService: ChefService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadChefs();
  }

  loadChefs() {
    this.chefService.getChefs().subscribe(
      (data) => {
        this.chefs = data;
      },
      (error) => {
        console.error('Error al cargar los chefs:', error);
      }
    );
  }

  async addChef() {
    const alert = await this.alertController.create({
      header: 'Agregar Chef',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre del Chef',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: (data) => {
            if (!data.name) {
              return; // Si el campo está vacío, no hacer nada.
            }
            this.chefService.addChef({ name: data.name }).subscribe(
              () => {
                this.loadChefs(); // Recargar la lista después de guardar.
              },
              (error) => {
                console.error('Error al agregar chef:', error);
              }
            );
          },
        },
      ],
    });
  
    await alert.present();
  }
  
  async editChef(chef: any) {
    const alert = await this.alertController.create({
      header: 'Editar Chef',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre del Chef',
          value: chef.name,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: (data) => {
            this.chefService.updateChef(chef.id, { name: data.name }).subscribe(() => {
              this.loadChefs();
            });
          },
        },
      ],
    });

    await alert.present();
  }

  deleteChef(id: number) {
    this.chefService.deleteChef(id).subscribe(() => {
      this.loadChefs();
    });
  }
}
