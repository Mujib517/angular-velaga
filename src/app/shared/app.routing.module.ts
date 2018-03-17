import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { UsersComponent } from "../users/users.component";
import { UserDetailComponent } from "../user-detail/user-detail.component";



const ROUTES: Route[] = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'users', component: UsersComponent },
{ path: 'users/:id', component: UserDetailComponent },
{ path: '**', redirectTo: '' }];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    declarations: [],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }