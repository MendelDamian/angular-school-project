import { Component, OnInit } from '@angular/core';
import { User } from '../user.component';
import { DatabaseService } from '../../database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  username: string = '';
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
  loading: boolean = true;
  error: boolean = false;

  constructor(
    private database: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.username = params['username'];
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.loading = true;
    this.error = false;
    this.database.getUserByUsername(this.username).subscribe(t_user => {
      this.loading = false;
      if (t_user.length) {
        this.user = t_user[0];
      } else {
        this.error = true;
      }
    });
  }

  updateUser(): void {
    this.loading = true;
    this.error = false;
    let userUpdate: UserUpdate = {
      p0: this.user.p0,
      p1: this.user.p1,
      p2: this.user.p2,
      p3: this.user.p3,
      p4: this.user.p4,
      p5: this.user.p5,
      p6: this.user.p6,
      p7: this.user.p7,
      p8: this.user.p8,
      p9: this.user.p9
    };

    this.database.updateUser(this.user.id, userUpdate).subscribe(response => {
      this.loading = false;
      this.error = response.err != 0;
    });
  }

  getUserByp0(): void {
    if (this.user.p0) {
      this.router.navigate([ '/users/' + this.user.p0 ]);
    }
  }

}

export interface UserUpdate {
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

export interface UserUpdateResponse {
  err: number;
}
