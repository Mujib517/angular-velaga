import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
    <h1>Users</h1>

    <div class="col-md-7">
      <div class="well" *ngFor="let user of users">
       <a [routerLink]="'/users/'+user.login"> <h3>{{user.login}}</h3></a>
        <img [src]="user.avatar_url" width="100" height="100" class="img img-circle"/>
      </div>
    </div>

  `,
  styles: []
})
export class UsersComponent implements OnInit {
  users: any;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get('https://api.github.com/users')
      .subscribe(
      (resp) => {
        console.log(resp);
        this.users = resp;
      },
      (err) => console.log(err)
      )
  }

}
