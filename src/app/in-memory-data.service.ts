import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Pet } from './pet';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const pets = [
      { id: 31, name: 'Krypto' },
      { id: 32, name: 'Battle Cat' },
      { id: 33, name: 'Devil Dinosaur' },
      { id: 34, name: 'Lockjaw' },
      { id: 35, name: 'Ace' },
      { id: 36, name: 'Cosmo' },
      { id: 37, name: 'Throg' },
      { id: 38, name: 'Lockheed' },
      { id: 39, name: 'Ms. Lion' },
      { id: 40, name: 'Redwing' }
    ];
    return {heroes, pets};
  }

  // Overrides the genId method to ensure that a hero/pet always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId<T extends Hero | Pet>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
  
}