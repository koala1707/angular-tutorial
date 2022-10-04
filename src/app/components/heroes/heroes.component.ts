import { Component, OnInit } from '@angular/core';
// Interface /interface/hero.ts -> json
import { Hero } from '../../interface/hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Widnstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
