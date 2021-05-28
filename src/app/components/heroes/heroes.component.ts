import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { HeroeComponent } from '../heroe/heroe.component';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: import("c:/Users/victo/Desktop/SPA/SPA-1/src/app/servicios/heroes.service").Heroes[];
  

  constructor(private servicioHeroes: HeroesService) { 

    this.heroes  =  servicioHeroes.getHeroes();
    console.log();
  }

  ngOnInit(): void {
    
  }

}
