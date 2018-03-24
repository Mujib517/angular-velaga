import { Component } from '@angular/core';

@Component({
  selector: 'app-new-user',
  template: `
   <h1>Add New User</h1>

   <div *ngIf="success" class="alert alert-success">Succesfully saved!</div>

   <div class="col-md-5">
      <div class="form-group">
        <input type="text" placeholder="login" class="form-control" [(ngModel)]="user.login"/>
      </div>
      <div class="form-group">
        <input type="text" placeholder="Name" class="form-control" [(ngModel)]="user.name"/>
      </div>
      <div class="form-group">
        Site Admin: <input type="checkbox" [(ngModel)]="user.siteAdmin"/>
      </div>
      <div class="form-group">
        <input type="text" placeholder="phone" class="form-control" [(ngModel)]="user.phone"/>
      </div>
      <div class="form-group">
       <button (click)="onSave()" class="btn btn-success">Save</button>
      </div>
   </div>

  `
})
export class NewUserComponent {
  user: any = {};
  success: boolean = false;

  onSave() {
    console.log(this.user);
    //save http.post(url,user)
    //successfull
    this.success = true;
    this.user = {};
  }

}
