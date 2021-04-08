import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup = this._formBuilder.group({
    id: ['', [Validators.maxLength(7), Validators.pattern('[0-9]+')]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    status: ['', [Validators.required]],
    initialYear: [2000, [Validators.required, Validators.minLength(4), Validators.min(2000), Validators.max(new Date().getFullYear())]],
    initalM3: [0, [Validators.required, Validators.min(0)]]
  })


  get idErrMsg(): string {
    const errors = this.form.get('id')?.errors;
    if (errors?.pattern) {
      return 'Characters are not valid';
    } else if (errors) {
      return 'No more than 7 digits';
    }
    return '';
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    else if (this.form.value.id.length > 0) {
      this.form.value.id = this.form.value.id.padStart(7, 0);
    }

    console.log(this.form);

    this.reset();
    this.form.reset();
  }

  reset() {
    this.form.value.initialYear = 2000;
    this.form.value.initalM3 = 0;
  }

  fieldNotValid(field: string) {
    return this.form.controls[field].errors && this.form.controls[field].touched;
  }

  getActiveClass() {
    return (this.form.invalid) ? 'disabled-btn' : 'active-btn';
  }
}
