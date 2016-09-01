import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

// import {MaterializeDirective} from "angular2-materialize"; Imported materialize directives in app.module
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
templateUrl:'./heroes.component.html'

// directives: [MaterializeDirective],
   

})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService,private router: Router) { }


heroes: Hero[];
selectedHero: Hero;
onSelect(hero: Hero){
    this.selectedHero = hero;
}

getHeroes(): void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
}
ngOnInit(): void{
    this.getHeroes();
}

gotoDetail(): void {
    this.router.navigate(['/detail',this.selectedHero.id]);
}



}

