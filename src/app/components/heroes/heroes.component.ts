import { Component, OnInit } from '@angular/core';
// Interface /interface/hero.ts -> json
import { Hero } from '../../interface/hero'
// Import hero data
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log(hero.id)
  }

}
