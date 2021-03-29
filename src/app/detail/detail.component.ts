import { Component, OnInit } from '@angular/core';
// import { CARS} from '../myCars';
import {CARS} from '../../assets/data/myCars';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 in : number;
 
  myCars = CARS;

  constructor() { }

  goodToGo: boolean[] = [];

  goodStyle = [];

  
  ngOnInit(): void {
    this.in=0;      
  }


  onClickMe(i) : void{
    // this.goodToGo[i] = !this.goodToGo[i];
    this.in = i;
  }

}
