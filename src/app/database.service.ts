import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './data/data.component';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  host = 'https://imsi.pl:5000/player/abc';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>( this.host );
  }
}
