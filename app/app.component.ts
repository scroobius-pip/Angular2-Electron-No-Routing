import { Component } from '@angular/core';

@Component({
    selector: 'myapp',
    template: `
    <nav>
    <div class="nav-wrapper">
          <a href="#" class="brand-logo center">{{title}}</a>

    <ul id="nav-mobile" class="left">

   <li><a routerLink="/heroes">Heroes</a></li>
   <li><a routerLink="/dashboard">Dashboard</a></li>
   </ul>
   </div>
   </nav>
   <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
}

 
        