import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const noMenuRoutes = ['/login', '/register'];
        this.showMenu = !noMenuRoutes.includes(event.url); // Mostrar el menú si no está en login o register
      }
    });
  }
}
