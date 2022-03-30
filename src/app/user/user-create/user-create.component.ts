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
    console.log(this.userCreate);
    this.database.createUser(this.userCreate).subscribe(response => {
      console.log("Wynik")
      console.log(response);
      this.userCreateResponse = response[0];
    })

  }

}

export interface UserCreate {
  name: string
}

export interface UserCreateResponse {
  id: number
}
