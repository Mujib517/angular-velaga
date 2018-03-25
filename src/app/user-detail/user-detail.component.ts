import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-detail',
  template: `
    <h1>User Detail</h1>
    <div *ngIf="user" class="col-md-6">
    <div class="panel panel-primary">
      <div class="panel-heading">
        {{user.name}}  {{user.login}}
      </div>
      <div class="panel-body">
      <img [src]="user.avatar_url" width="120" height="100" class="img img-thumbnail"/>
        <h3>{{user.location}}</h3>
        Site Admin? <input type="checkbox" [checked]="user.site_admin" disabled="true"/>
      </div>
      <div class="panel-footer">
        <div>Followers: {{user.followers}}</div>
        <div>{{user.created_at | date}}</div>
      </div>
    </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <ul class="nav-tabs nav">
          <li routerLinkActive="active"><a routerLink="reviews">Reviews</a></li>
          <li  routerLinkActive="active"><a routerLink="followers">Followers</a></li>
        </ul>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class UserDetailComponent implements OnInit {

  private user: any;

  constructor(private svc: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.getById(id)
    .subscribe(
      res => this.user = res,
    this.error
    );
  }

  error = (err) => console.log(err)
}
