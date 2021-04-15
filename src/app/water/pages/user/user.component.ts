import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersService } from '../../services/users.service';
import { Month, User, Year } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;
  userYears!: Year[];
  years: string[] = [];
  months: Month[] = [];
  id: string = '';

  form: FormGroup = this._formBuilder.group({
    year: ['', Validators.required]
  })

  constructor(private _formBuilder: FormBuilder,
    private usersService: UsersService,
    private routes: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routes.snapshot.paramMap.get('id');

    if (id) {
      this.usersService.getUserId(id)
        .subscribe((resp: any) => {
          this.user = resp;
          this.user.id = id;
          this.usersService.getUserYears(this.user.id)
            .subscribe((resp) => {
              this.userYears = resp
              this.month(resp);
            });
        })
      this.form.get('year')?.valueChanges
        .subscribe((i: number) =>
          this.usersService.getMonths(this.userYears[i], id)
            .subscribe((resp) => {
              this.months = resp;
            })
        );
    }
  }

  month(resp: any) {
    for (let i = 0; i < resp.length; i++) {
      this.years.push(resp[i].year)
    }
  }
}
