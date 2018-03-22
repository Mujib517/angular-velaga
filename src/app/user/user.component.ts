import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <a routerLink="/users/{{user.login}}">
    <h3>{{user.login}}</h3>
  </a>
  <img [src]="user.avatar_url" class="img img-circle" width="100" height="100"/>
  `
})
export class UserComponent {

  @Input()
  user: any;

}