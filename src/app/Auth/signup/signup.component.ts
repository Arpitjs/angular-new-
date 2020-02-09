import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user_Model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public submitting = false
  user
  constructor() {
    this.user = new User({})
   }

  ngOnInit() {
  }

  register() {
    console.log(this.user)
    this.submitting = true
      setTimeout(() => this.submitting = false, 2000)
  }
}
