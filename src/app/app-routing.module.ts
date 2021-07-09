import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'products', component:ProductListComponent},
{path:'cart', component:CartComponent, canActivate:[AuthGuard]},
{path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
