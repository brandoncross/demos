import { Component, OnInit } from '@angular/core';
import { Hero } from '../../beans/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [
    './heroes.component.css'
  ]
})
export class HeroesComponent implements OnInit{
  heroes: Array<Hero>;
  newHero = new Hero();
  powerFilter = 0;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroes = this.heroService.heroes;
  }

  addHero(hero: Hero) {
    console.log('adding hero');
    this.heroes.unshift(hero);
    this.newHero = new Hero();
  }
}
