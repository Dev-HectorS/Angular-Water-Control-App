import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Year, User, Month } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = environment.firebase

  private usersArray(usersObj: object) {
    const users: User[] = [];
    if (usersObj === null) {
      return [];
    }
    Object.keys(usersObj).forEach((key) => {
      const user: User = (usersObj as any)[key];
      user.id = key;
      users.push(user);
    });
    return users;
  }

  private yearsArray(usersObj: object) {
    const years: Year[] = [];
    if (usersObj === null) {
      return [];
    }
    Object.keys(usersObj).forEach((key) => {
      const year: Year = (usersObj as any)[key];
      year.year = key;
      years.push(year);
    });
    return years;
  }

  private monthsArray(usersObj: object) {
    const months: Month[] = [];
    if (usersObj === null) {
      return [];
    }
    Object.keys(usersObj).forEach((key) => {
      const month: Month = (usersObj as any)[key];
      month.id = key;
      months.push(month);
    });
    return months;
  }

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users.json`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users.json`)
      .pipe(
        map((resp) => this.usersArray(resp))
      );
  }

  getUserId(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}.json`)
  }

  getUserYears(id: string): Observable<Year[]> {
    return this.http.get<Year[]>(`${this.apiUrl}/users/${id}/years.json`)
      .pipe(
        map((resp) => this.yearsArray(resp))
      );
  }

  getMonths(data: any, id: any): Observable<any[]> {
    return this.http.get<Year[]>(`${this.apiUrl}/users/${id}/years/${data.year}.json`)
      .pipe(
        map((resp) => this.monthsArray(resp))
      );
  }
}
