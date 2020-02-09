import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';

let AuthRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'reset-password/:token', component: ResetPasswordComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(AuthRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AuthRoutingModule { }