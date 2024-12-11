import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'recetas', // Ruta para la página de recetas
    loadChildren: () =>
      import('./pages/recetas/recetas.module').then((m) => m.RecetasPageModule),
  },
  {
    path: 'chefs', // Ruta para la página de chefs
    loadChildren: () =>
      import('./pages/chef/chef.module').then((m) => m.ChefPageModule),
  },
  {
    path: 'usuarios', // Ruta para la página de usuarios
    loadChildren: () =>
      import('./pages/usuario/usuario.module').then((m) => m.UsuarioPageModule),
  },
  {
    path: '', // Redirigir al login como página inicial
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**', // Ruta por defecto si no encuentra la página
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
