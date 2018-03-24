import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//required,minlen,maxlen,pattern
@Component({
  selector: 'app-new-user',
  template: `
  <div *ngIf="success" class="alert alert-success">Saved Successfully</div>
  <form [formGroup]="frm">
  <h1>Add New User</h1>
  <div class="col-md-5">
      <div class="form-group">
        <input type="text" placeholder="login" formControlName="login" class="form-control"/>
        <span *ngIf="frm.controls.login.errors?.required" class="text-danger">Required</span>
        <span *ngIf="frm.controls.login.errors?.minlength" class="text-danger">Min 3 Chars</span>
        <span *ngIf="frm.controls.login.errors?.maxlength" class="text-danger">Max 10 Chars</span>
        </div>
      <div class="form-group">
        <input type="text" placeholder="Name" formControlName="name" class="form-control"/>
      </div>
      <div class="form-group">
        Site Admin: <input type="checkbox" formControlName="siteAdmin" />
      </div>
      <div class="form-group">
        <input type="text" formControlName="phone" placeholder="phone" class="form-control"/>
        </div>
      <div class="form-group">
       <button (click)="onSave()" class="btn btn-success">Save</button>
      </div>
   </div>
</form>
  `
})
export class NewUserComponent {

  success: boolean = false;
  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      name: [''],
      siteAdmin: [],
      phone: []
    });
  }

  onSave() {
    if (this.frm.valid) {
      console.log(this.frm.value);
      this.success = true;
      this.frm.reset();
    }
  }

}
