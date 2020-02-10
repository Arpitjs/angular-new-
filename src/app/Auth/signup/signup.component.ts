import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user_Model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public submitting = false
  user
  constructor(public authService: AuthService

  ) {
    this.user = new User({})
   }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user)
    .subscribe(data => console.log(data),
    err => console.log(err))
    this.submitting = true
      setTimeout(() => this.submitting = false, 2000)
  }
}
