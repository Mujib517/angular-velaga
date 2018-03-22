import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
    <h1>Users</h1>

    <div class="col-md-7">
      <div class="well" *ngFor="let u of users">
       <app-user [user]="u"></app-user>
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

  //db
  //file io
  // timers setTimeout setInterval
  // web service calls
  ngOnInit() {
    this.http.get('https://api.github.com/users')
      .subscribe(
        (resp) => this.users = resp,
        (err) => console.log(err)
      )

    console.log("after request");
  }

}
