import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(
    public authService:AuthService,
    public router:Router,
    public flsMsj: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmirLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flsMsj.show('Sesión iniciada', {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['/']);
    }).catch((err) =>{
      this.flsMsj.show(err.message, {cssClass: 'alert-danger', timeout:4000});
      this.router.navigate(['/login']);
    });
  }

}
