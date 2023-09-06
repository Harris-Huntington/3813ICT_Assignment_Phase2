import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { ChatComponent } from './chat/chat.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path: 'login', component: LoginComponent}, 
                        {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}, 
                        {path: 'group', component: GroupComponent, canActivate: [AuthGuard]}, 
                        {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]}, 
                        {path: 'create-user', component: CreateUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
