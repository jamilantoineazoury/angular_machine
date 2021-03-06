import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/Users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {


  users!: User[];
  userSubscription!: Subscription;


  constructor(private userService: UserService, route: Router) { }


  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
