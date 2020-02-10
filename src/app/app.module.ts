import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './Auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    ToastrModule.forRoot()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
