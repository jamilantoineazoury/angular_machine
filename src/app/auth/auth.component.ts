import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  authStatus!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    // console.log("connexion reusiite !");
    this.authService.signIn().then
      (
        () => {

          //console.log("connexion reusiite !");

          this.authStatus = this.authService.isAuth;
          this.router.navigate(['appareils']);
        }

      );
  }

  onSignOut() {
    this.authService.signOut();
    console.log("deconnexion reusiite !");
    this.authStatus = this.authService.isAuth;
  }

}
