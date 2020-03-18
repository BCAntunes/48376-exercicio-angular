import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
import { PetService }  from '../pet.service';
import { Hero } from '../hero';
import { Pet } from '../pet';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  allPets: Pet[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.getAllPets();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getAllPets(): void {
    this.petService.getPets()
        .subscribe(allPets => this.allPets = allPets);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
  }

}