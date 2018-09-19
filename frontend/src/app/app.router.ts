import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

export const routes : Routes = [
    {path :'' , component:LoginComponent},
    {path :'login' , component:LoginComponent},
    {path :'register' , component:RegisterComponent},
    {path : 'search' , component:SearchComponent},
    {path :'**' , component:LoginComponent}
]