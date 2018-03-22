import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { UsersComponent } from "../users/users.component";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { UserResolver } from "./user.resolver";
import { ReviewsComponent } from "../reviews/reviews.component";
import { FollwersComponent } from "../follwers/follwers.component";

const CHILDREN: Route[] = [
    { path: 'reviews', component: ReviewsComponent },
    { path: 'followers', component: FollwersComponent }
];


const ROUTES: Route[] = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'users', component: UsersComponent, resolve: { userData: UserResolver } },
{ path: 'users/:id', component: UserDetailComponent, children: CHILDREN },
{ path: '**', redirectTo: '' }];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    declarations: [],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }