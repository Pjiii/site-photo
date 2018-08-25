import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-default">
              <a class="navbar-brand" href="#">Photo</a>
              <ul class="nav navbar-nav nav-pills">
                <li routerLinkActive="active">
                  <a routerLink="/list">Images</a>
                </li>
                <li routerLinkActive="active">
                  <a routerLink="/add">Ajouter</a>
                </li>
              </ul>
            </nav>
            <main>
              <router-outlet></router-outlet>
            </main>`
})
export class AppComponent {
  constructor() {
  }
}
