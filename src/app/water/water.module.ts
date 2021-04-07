import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterRoutingModule } from './water-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotificationsComponent,
    UsersComponent,
    UserComponent,
    SettingsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    WaterRoutingModule
  ]
})
export class WaterModule { }
