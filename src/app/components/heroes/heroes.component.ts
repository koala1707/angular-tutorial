import { Component, OnInit } from '@angular/core';
// Interface /interface/hero.ts -> json
import { Hero } from '../../interface/hero'
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.getHeroes();
    //synchronous process
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log(hero.id)
  }

  // getHeroes(): void{
  //   this.heroes = this.heroService.getHeroes();
  // }

}
