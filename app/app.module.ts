import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
 import {MaterializeDirective} from "angular2-materialize";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {HeroesComponent} from  './heroes.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
  declarations: [
    AppComponent,HeroDetailComponent,MaterializeDirective,HeroesComponent
  ],
  providers: [HeroService],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
