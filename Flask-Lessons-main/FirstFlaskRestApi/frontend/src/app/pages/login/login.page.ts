import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLogin: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.register();
  }

  register(){
    this.authService.register({username: 'pedro', password: '123'}).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit(form: NgForm){
    console.log(form);
    if(!form.valid) return;
    this.login(form);
  }

  login(form){
    this.isLogin = true;
  }

}
