import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../database.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  exists: boolean = true
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
      this.exists = false;
      if (result.length > 0)
      {
        this.userCreateResponse = result[0];
        if (this.userCreateResponse.id != 0)
        {
          this.router.navigate(['/user/' + this.userCreate.name ]);
        } else {
          this.exists = true;
        }
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
