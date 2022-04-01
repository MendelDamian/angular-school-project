import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  p0: string = ''
  userListResponse: Array<UserListResponse> = []
  loading: boolean = true
  error: boolean = false

  constructor(
    private database: DatabaseService,
    private route: ActivatedRoute
  ) {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.p0 = params["p0"];
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.loading = true;
    this.error = false;
    this.database.getUsersByp0(this.p0).subscribe(t_users => {
      this.loading = false;
      if (t_users.length) {
        this.userListResponse = t_users
      } else {
        this.error = true;
      }
    })
  }

}

export interface UserListResponse {
  id: number,
  name: string,
  p1: string
}
