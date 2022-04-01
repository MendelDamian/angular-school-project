import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user/user.component';
import { UserCreate, UserCreateResponse } from './user/user-create/user-create.component';
import { UserListResponse } from './user/user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  host = 'https://imsi.pl:5000/';

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<User[]> {
    if (username) {
      return this.http.get<User[]>( this.host + "player/" + username);
    } else {
      return new Observable<User[]>();
    }
  }

  getUsersByp0(p0: string): Observable<UserListResponse[]> {
    if (p0) {
      return this.http.get<UserListResponse[]>( this.host + "players/" + p0);
    } else {
      return new Observable<UserListResponse[]>();
    }
  }

  createUser(userCreate_t: UserCreate): Observable<UserCreateResponse> {
    return this.http.put<UserCreateResponse>(this.host + "players", userCreate_t);
  }
}
