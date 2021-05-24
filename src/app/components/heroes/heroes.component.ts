import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { heroe } from  'src/app/servicios/heroes.service';
import { HeroeComponent } from '../heroe/heroe.component';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(public heroe:HeroesService) { }

  ngOnInit(): void {
    
  }
  // HeroesComponent.getheroes(nombre, bio, img, aparicion, casa):

}
