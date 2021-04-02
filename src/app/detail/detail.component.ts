import { Component, OnInit } from '@angular/core';
import { CARS } from '../../assets/data/myCars';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  in: number = 0;

  myCars = CARS;

  constructor() { }

  ngOnInit(): void {
    this.in = 0;
  }

  onClickMe(i): void {
    this.in = i;

    var divs = document.getElementById("myDiv");

    if (divs.style.display == 'none') {
      divs.style.display = 'block';
    }
  }
}
