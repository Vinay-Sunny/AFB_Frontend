import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatInputModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,          MatIconModule,MatToolbarModule,
         MatGridListModule,
         MatExpansionModule,
         MatPaginatorModule,
        } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';

import { ServiceService }from './service/service.service';
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule, MatCardModule} from "@angular/material";
import swal from 'sweetalert';

import { SearchComponent } from './header/search/search.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { HomePageComponent } from './header/home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';


import { OrderModule } from 'ngx-order-pipe'
import { AuthGaurd } from './service/auth-gaurd.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { LayoutModule } from '@angular/cdk/layout';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    HomePageComponent,
    ForgotPasswordComponent,
    UserInfoComponent,
    HeaderComponent,
    BlogComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule,
    MatPaginatorModule ,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    MatMenuModule,
    HttpClientModule,
    OrderModule,
    MatCardModule,
    LayoutModule,
    
  ],
 
  providers: [ServiceService,AuthGaurd],
  bootstrap: [AppComponent]
})

export class AppModule { }

