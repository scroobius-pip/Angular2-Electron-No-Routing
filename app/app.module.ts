import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {MaterializeDirective} from "angular2-materialize";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {HeroesComponent} from  './heroes.component';
import {routing} from './app.routing';
import {DashboardComponent} from './dashboard.component';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    
   
  ],
  declarations: [
    AppComponent,HeroDetailComponent,MaterializeDirective,HeroesComponent,DashboardComponent
  ],
  providers: [HeroService,{provide: LocationStrategy,  useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
