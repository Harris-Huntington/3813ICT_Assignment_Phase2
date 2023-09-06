import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { ChatComponent } from './chat/chat.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgxRerenderModule } from 'ngx-rerender';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GroupComponent,
    ChatComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxRerenderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
