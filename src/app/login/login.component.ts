import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``,
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
})
export class LoginComponent implements OnInit {
  email: string = ""
  password: string = ""

  constructor(
    private router: Router,
    private _loginSvc: LoginService
  ) { }

  ngOnInit() { }

  onSubmit() {
    localStorage.setItem('token', 'Token bbd3b0f87ea844b4462f699e7cb97b34b0e8c97240070bc2de4e43aa2d67bca7');
    this.router.navigate(["/tasks/my-tasks"])
    // this._loginSvc.login({ username: this.email, password: this.password }).subscribe({
    //   next: (res: any) => {
    //     console.log(res)
    //   },
    //   error: (err: any) => {
    //     console.log(err)
    //   }
    // })
  }

}
