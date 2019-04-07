import { Component, OnInit } from '@angular/core';
import { UserService } from '../../routes/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUsersAndLog();
  }

  getUsersAndLog() {

    console.log('hit app-home');

    this.userService.getUsers()
      .subscribe(result => (this.users = result, console.log(this.users)));
  }
}
