import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: "" , pathMatch:"full", redirectTo:"login"
  },
  {
    path:"home", component: HomeComponent
  },
  {
    path:"about", component: AboutComponent
  },
  {
    path:"contact", component: ContactComponent
  },
  {
    path: "shop", component: ShopComponent
  },
  {
    path: "login", component: LoginpageComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
