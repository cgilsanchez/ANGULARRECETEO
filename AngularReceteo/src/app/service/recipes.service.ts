import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'http://localhost:1337/api/recetas';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  saveRecipe(recipe: any): Observable<any> {
    const payload = {
      data: {
        name: recipe.name,
        ingredients: recipe.ingredients,
        descriptions: recipe.descriptions,
      },
    };

    if (recipe.id) {
      return this.http.put(`${this.apiUrl}/${recipe.id}`, payload);
    } else {
      return this.http.post(this.apiUrl, payload);
    }
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
