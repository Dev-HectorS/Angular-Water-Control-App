import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserComponent } from './pages/user/user.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: AddComponent },
      { path: 'users/:id', component: UserComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterRoutingModule { }
