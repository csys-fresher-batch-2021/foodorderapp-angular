import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list.component';  
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { OrdersComponent } from './orders/orders.component';
import {OrderService} from './services/order.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RegisterService,ProductService,CartService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
