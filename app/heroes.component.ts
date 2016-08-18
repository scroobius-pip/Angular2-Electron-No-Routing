import {Component,OnInit} from '@angular/core';
// import {MaterializeDirective} from "angular2-materialize"; Imported materialize directives in app.module
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
template:`
  <h2>My Heroes</h2>
  <div class="collection">
  <a *ngFor="let hero of heroes" [class.active]="hero === selectedHero" (click)="onSelect(hero)" href="#!" class="collection-item">{{hero.name}}</a>
  </div>
  <br>
  <my-hero-detail [hero]="selectedHero" ></my-hero-detail>

  
  `
,
// directives: [MaterializeDirective],
   

})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService) { }


heroes: Hero[];
selectedHero: Hero;
onSelect(hero: Hero){
    this.selectedHero = hero;
}

getHeroes(){
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
}
ngOnInit(){
    this.getHeroes();
}

}

