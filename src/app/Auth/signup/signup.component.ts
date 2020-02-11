import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user_Model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/services/notifyService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public submitting = false
  user
  constructor(public authService: AuthService,
    public notifyService: NotifyService,
  public router: Router

  ) {
    this.user = new User({})
   }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user)
    .subscribe(data => {
      this.submitting = true
      setTimeout(() =>  {
        this.submitting = false
        this.notifyService.showSuccess('registration successful! plz login')
      this.router.navigate(['/auth/login'])
      },2000)
    },
    err => {
      this.submitting = false
      this.notifyService.showError(err)
    })
  }
}

