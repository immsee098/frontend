import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickBookingModule } from './quick-booking/quick-booking.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainViewComponent } from './quick-booking/components/main-view/main-view.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    QuickBookingModule,
  ],
  exports: [
    SidebarComponent,
    NotFoundComponent,
    MainViewComponent
  ]
})
export class SharedModule { }
