import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <h3>{{user.login}}</h3>
  <img [src]="user.avatar_url" class="img img-circle" width="100" height="100"/>
  `
})
export class UserComponent {

  @Input()
  user: any;

}