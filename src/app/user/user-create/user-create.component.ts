import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../database.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  error: boolean = false
  userCreate: UserCreate = {
    name: ''
  }

  userCreateResponse: UserCreateResponse = {
    id: 0
  }

  constructor(
    private database: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  createUser(): void {
    this.database.createUser(this.userCreate).subscribe(result => {
      this.error = false;
      if (result)
      {
        this.userCreateResponse = result;
        if (this.userCreateResponse.id != 0)
        {
          this.router.navigate(['/user/' + this.userCreate.name ]);
        } else {
          this.error = true;
        }
      } else {
        this.error = true;
      }
    });
  }

}

export interface UserCreate {
  name: string
}

export interface UserCreateResponse {
  id: number
}
