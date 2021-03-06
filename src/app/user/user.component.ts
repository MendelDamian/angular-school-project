import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ]
})
export class UserComponent {
  username: string = '';
  p0: string = '';

  constructor(
    private database: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  getUserByUsername(): void {
    this.router.navigate([ '/user/' + this.username ]);
  }

  getUserByp0(): void {
    this.router.navigate([ '/users/' + this.p0 ]);
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
