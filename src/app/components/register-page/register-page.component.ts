import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
public email: string;
public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flsMsj: FlashMessagesService
  ) { }

  ngOnInit() {
  }
onSubmitaddUser(){
  this.authService.registerUser(this.email, this.password)
  .then((res)=>{
  this.flsMsj.show('Usuario creado correctamente', {cssClass: 'alert-success', timeout:4000});
  //this.router.navigate(['/register']);
  }).catch((err) =>{
  this.flsMsj.show(err.message, {cssClass: 'alert-danger', timeout:4000});
  });
}
}
