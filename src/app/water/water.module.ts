import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WaterRoutingModule } from './water-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddComponent } from './pages/add/add.component';
import { MonthComponent } from './pages/month/month.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotificationsComponent,
    UsersComponent,
    UserComponent,
    SettingsComponent,
    AddComponent,
    MonthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WaterRoutingModule
  ]
})
export class WaterModule { }
