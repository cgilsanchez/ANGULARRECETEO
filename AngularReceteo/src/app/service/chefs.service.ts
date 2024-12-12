import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChefService {
  private apiUrl = `${environment.apiUrl}/api/chefs`;

  constructor(private http: HttpClient) {}

  // Obtener lista de chefs
  getChefs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Crear un nuevo chef
  addChef(chef: { name: string }): Observable<any> {
    const payload = { data: chef }; // Estructura esperada por Strapi
    return this.http.post<any>(this.apiUrl, payload);
  }

  // Actualizar un chef existente
  updateChef(id: number, chef: { name: string }): Observable<any> {
    const payload = { data: chef }; // Estructura esperada por Strapi
    return this.http.put<any>(`${this.apiUrl}/${id}`, payload);
  }

  // Eliminar un chef
  deleteChef(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
