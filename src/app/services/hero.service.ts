import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../interface/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  //asynchronous process
  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
