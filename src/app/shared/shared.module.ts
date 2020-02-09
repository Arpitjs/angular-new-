import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NotifyService } from './services/notifyService';

@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule
  ],
  exports: [PagenotfoundComponent],
  providers: [NotifyService]
})
export class SharedModule { }
