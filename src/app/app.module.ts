import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { TeamComponent } from './components/team/team.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  // all our component and stuff
  declarations: [
    AppComponent,
    HeroComponent,
    TeamComponent
  ],
  // this is for all "finish Module"
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // some code we will rarely use - Ill find something later
  providers: [],
  // app start
  bootstrap: [AppComponent]
})
export class AppModule { }
