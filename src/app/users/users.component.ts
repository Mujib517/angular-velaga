import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private userSvc: UserService, private route: ActivatedRoute) {

  }

  //db
  //file io
  // timers setTimeout setInterval
  // web service calls
  ngOnInit() {

    // this.userSvc.get().subscribe(
    //   (resp) => this.users = resp,
    //   (err) => console.log(err)
    // )
    this.users = this.route.snapshot.data.userData;
  }

}
