import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup = this._formBuilder.group({
    waterMeterID: ['', [Validators.required, Validators.maxLength(7), Validators.pattern('[0-9]+')]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    status: ['', [Validators.required]],
    initialYear: [2000, [Validators.required, Validators.minLength(4), Validators.min(2000), Validators.max(new Date().getFullYear())]],
    initalM3: [0, [Validators.required, Validators.min(0)]]
  })

  get idErrMsg(): string {
    const errors = this.form.get('waterMeterID')?.errors;
    if (errors?.required) {
      return 'Water meter ID is required';
    } else if (errors?.pattern) {
      return 'Characters are not valid';
    } else if (errors) {
      return 'No more than 7 digits';
    }
    return '';
  }

  constructor(private _formBuilder: FormBuilder,
    private usersServices: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    } else if (this.form.value.waterMeterID.length > 0) {
      this.form.value.waterMeterID = this.form.value.waterMeterID.padStart(7, 0);
    }
    const user = { ...this.form.value };
    this.usersServices.createUser(user).subscribe();
  }

  return() {
    this.router.navigate(['menu/home']);
  }

  fieldNotValid(field: string) {
    return this.form.controls[field].errors && this.form.controls[field].touched;
  }

  getActiveClass() {
    return (this.form.invalid) ? 'disabled-btn' : 'active-btn';
  }
}
