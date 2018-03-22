import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './shared/app.routing.module';
import { UserComponent } from './user/user.component';
import { ConsoleLogger } from './shared/console.logger.service';
import { FileLogger } from './shared/file.logger.service';
import { UserService } from './shared/user.service';
import { UserResolver } from './shared/user.resolver';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [
    UserService,
    UserResolver,
    { provide: ConsoleLogger, useClass: FileLogger }],
  bootstrap: [AppComponent]
})
export class AppModule { }
