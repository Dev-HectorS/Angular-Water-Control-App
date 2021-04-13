import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = environment.firebase

  private createUsersArry(usersObj: object) {
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

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users.json`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users.json`)
      .pipe(
        map((resp) => this.createUsersArry(resp))
      );
  }
}
