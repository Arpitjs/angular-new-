import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user_Model';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/services/notifyService';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public submitting = false
  public user
  constructor(public router: Router,
    public notifyService: NotifyService,
    public authService: AuthService
  ) {
    this.user = new User({})
    this.notifyService.showInfo('hello')
  }

  ngOnInit() {
  }

  login() {

    this.authService.login(this.user)
      .subscribe((data: any) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        this.notifyService.showWarning('hosiyar')
        this.submitting = true

        setTimeout(() => {
          this.submitting = false
          this.router.navigate(['/auth/dashboard'])
        this.notifyService.showSuccess(`welcome to memeclub, ${data.user.username}`)
        }, 2000)

      },
        err => this.notifyService.showError(err))
  }
}
