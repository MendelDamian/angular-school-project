import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../database.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userCreate: UserCreate = {
    name: ''
  }

  userCreateResponse: UserCreateResponse = {
    id: 0
  }

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  createUser(): void {
    this.database.createUser(this.userCreate).subscribe(response => {
      this.userCreateResponse = response[0];
      console.log(this.userCreateResponse);
    })
  }

}

export interface UserCreate {
  name: string
}

export interface UserCreateResponse {
  id: number
}
