import { Component, OnInit } from '@angular/core';
import { User } from '../user.component';
import {DatabaseService} from '../../database.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  username: string = ''
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
  loading: boolean = true
  error: boolean = false

  constructor(
    private database: DatabaseService,
    private route: ActivatedRoute
  ) {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.username = params["username"];
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.loading = true;
    this.error = false;
    this.database.getUser(this.username).subscribe(t_user => {
      this.loading = false;
      if (t_user) {
        this.user = t_user;
      } else {
        this.error = true;
      }
    })
  }

}
