import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-inverse">
  <div class="container">
  <div class="navbar-header">
    <a class="navbar-brand">Angular App</a>
  </div>
  <ul class="nav navbar-nav">
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
    <li><a routerLink="/contact">Contact</a></li>
    <li><a routerLink="/users">Users</a></li>
    <li><a routerLink="/products">Products</a></li>
  </ul>
</div>
</nav>
  `
})
export class HeaderComponent { }
