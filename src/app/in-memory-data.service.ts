import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'User Tracking' },
      { id: 2, name: 'Say Hi !' },
      { id: 3, name: 'Wave' },
      { id: 4, name: 'Shake Hand' },
      { id: 5, name: 'Fist Bump' },
      { id: 6, name: 'Show Emoji' },
      { id: 7, name: 'Dialogue' },
      { id: 8, name: 'Wink ;)' },
      { id: 9, name: 'Roboy Info' },
      { id: 10, name: 'Go Autonomous' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
