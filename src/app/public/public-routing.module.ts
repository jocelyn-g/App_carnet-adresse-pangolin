import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ParameterRoleComponent } from './parameter-role/parameter-role.component';
import { PlayoutComponent } from './playout/playout.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', component: PlayoutComponent, children:[
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      
      { path: 'home', component: HomeComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'user', component: UserComponent},
      { path: 'parameter', component: ParameterRoleComponent},
      { path: 'adduser', component: AddUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
