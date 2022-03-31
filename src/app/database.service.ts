import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user/user.component';
import { UserCreate, UserCreateResponse } from './user/user-create/user-create.component';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  host = 'https://imsi.pl:5000/';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    if (username) {
      return this.http.get<User>( this.host + "player/" + username);
    } else {
      return new Observable<User>();
    }
  }

  createUser(userCreate_t: UserCreate): Observable<UserCreateResponse> {
    return this.http.put<UserCreateResponse>(this.host + "players", userCreate_t);
  }
}
