import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./feature/home/home.component";
import { DashboardComponent } from "./feature/dashboard/dashboard.component";
import { LoginComponent } from "./feature/login/login.component";
import { RegisterComponent } from "./feature/register/register.component";
import { MovieCreateComponent } from "./feature/movie-create/movie-create.component";
import MovieDetailsComponent from "./feature/movie-details/movie-details.component";
import { MovieEditComponent } from "./feature/movie-edit/movie-edit.component";
import { MyProfileComponent } from "./feature/my-profile/my-profile.component";
import { ErrorPageComponent } from "./core/error-page/error-page.component";
import {
  canActivate,
  canManipulate,
  canNotActivate,
} from "./core/guards/auth.guard";
import { AboutComponent } from "./feature/about/about.component";
import { SearchComponent } from "./feature/search/search.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent, canActivate: [canNotActivate] },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [canNotActivate],
  },
  {
    path: "movie-create",
    component: MovieCreateComponent,
    canActivate: [canActivate],
  },
  { path: "movie-details/:id", component: MovieDetailsComponent },
  {
    path: "movie-edit/:id",
    component: MovieEditComponent,
    canActivate: [canManipulate],
  },
  {
    path: "my-profile",
    loadChildren: () =>
      import("./feature/my-profile/my-profile.module").then(
        (m) => m.MyProfileModule
      ),
    canActivate: [canActivate],
  },
  { path: "about", component: AboutComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
