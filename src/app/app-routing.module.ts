import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { 
    path: 'about',
    component: AboutComponent,
    title: ":: About",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
