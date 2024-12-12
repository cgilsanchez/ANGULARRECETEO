import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RecipesService } from '../../service/recipes.service';
import { ChefService } from '../../service/chefs.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() recipe: any = null; // Receta actual para editar o nula para nueva
  recipeForm: FormGroup;
  chefs: any[] = [];

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private recipesService: RecipesService,
    private chefService: ChefService
  ) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      ingredients: ['', Validators.required],
      description: ['', Validators.required],
      chef: [null, Validators.required],
    });
  }

  async ngOnInit() {
    const chefs = await this.chefService.getChefs().toPromise();
    this.chefs = chefs || []; // Asegurarse de que chefs no sea undefined
    if (this.recipe) {
      this.recipeForm.patchValue(this.recipe);
    }
  }
  
  close() {
    this.modalController.dismiss();
  }

  saveRecipe() {
    if (this.recipeForm.invalid) {
      return;
    }

    const recipeData = this.recipeForm.value;
    if (this.recipe) {
      this.recipesService.updateRecipe(this.recipe.id, recipeData).subscribe(() => {
        this.modalController.dismiss(recipeData);
      });
    } else {
      this.recipesService.createRecipe(recipeData).subscribe((newRecipe) => {
        this.modalController.dismiss(newRecipe);
      });
    }
  }
}
