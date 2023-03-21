import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SquareComponent } from './shared/containers/square/square.component';
import { ThreeByTwoComponent } from './shared/containers/three-by-two/three-by-two.component';
import { FourByOneComponent } from './shared/containers/four-by-one/four-by-one.component';
import { TwoByOneComponent } from './shared/containers/two-by-one/two-by-one.component';
import { TwoByThreeComponent } from './shared/containers/two-by-three/two-by-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SquareComponent,
    ThreeByTwoComponent,
    FourByOneComponent,
    TwoByOneComponent,
    TwoByThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
