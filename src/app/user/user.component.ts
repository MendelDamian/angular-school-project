import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = '';
  user: User = {
    id: 0,
    p0: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: ''
  };

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.database.getUser(this.username).subscribe(t_user => {
      if (t_user.length) {
        this.user = t_user[0];
      } else {
        this.user = {
          id: 0,
          p0: '',
          p1: '',
          p2: '',
          p3: '',
          p4: '',
          p5: '',
          p6: '',
          p7: '',
          p8: '',
          p9: ''
        };
      }
    })
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}

export interface User {
  id: number;
  p0: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
  p9: string;
}
