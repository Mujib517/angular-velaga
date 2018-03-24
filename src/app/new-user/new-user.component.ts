import { Component } from '@angular/core';

//required,minlen,maxlen,pattern
@Component({
  selector: 'app-new-user',
  template: `
   <h1>Add New User</h1>



  
   <div *ngIf="success" class="alert alert-success">Succesfully saved!</div>
<form novalidate #frm="ngForm">

<table class="table">
  <tr>
    <th>
      Element
    </th>
    <th>
      Invalid
    </th>
    <th>
      Valid
    </th>
    <th>
      Error
    </th>
    <th>
     Dirty
    </th>
    <th>
      Pristine
    </th>
    <th>
      Touched
    </th>
  </tr>
  <tr>
    <td>Login</td>
    <td>{{login.invalid}}</td>
    <td>{{login.valid}}</td>
    <td>{{login.errors | json}}</td>
    <td>{{login.dirty}}</td>
    <td>{{login.pristine}}</td>
    <td>{{login.touched}}</td>
  </tr>
</table>



<div class="col-md-5">
      <div class="form-group">
        <input #login="ngModel" type="text" required="true" minlength="3" maxlength="10"
         name="login" placeholder="login" class="form-control" [(ngModel)]="user.login"/>

         <span class="text-danger" *ngIf="login.touched && login.errors?.required">Required</span>
         <span class="text-danger" *ngIf="login.touched && login.errors?.minlength">Min 3 chars</span>
         <span class="text-danger" *ngIf="login.touched && login.errors?.maxlength">Max 10 chars</span>

      </div>
      <div class="form-group">
        <input #name="ngModel" type="text" required="true" name="name" placeholder="Name" class="form-control" [(ngModel)]="user.name"/>

        <span class="text-danger" *ngIf="name.touched && name.invalid">Required</span>
      </div>
      <div class="form-group">
        Site Admin: <input name="siteAdmin" type="checkbox" [(ngModel)]="user.siteAdmin"/>
      </div>
      <div class="form-group">
        <input type="text" #phone="ngModel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="phone" class="form-control" [(ngModel)]="user.phone"/>
        <span class="text-danger" *ngIf="phone.touched && phone.errors?.pattern">Invalid Phone number</span>
        </div>
      <div class="form-group">
       <button [disabled]="frm.invalid" (click)="onSave()" class="btn btn-success">Save</button>
       
      </div>
   </div>
</form>
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
