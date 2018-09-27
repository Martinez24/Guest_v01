import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;

  constructor(
  public  authSer:AuthService
  ) { }

  ngOnInit() {
    this.authSer.getAuth().subscribe(auth => {
      if(auth){
      this.isLogin=true;
      this.nombreUsuario = auth.displayName;
      this.nombreUsuario = auth.email;
    }else{
      this.isLogin = false;
    }
    })
  }
  onClickLogout(){
    this.authSer.logout();
  }
}
