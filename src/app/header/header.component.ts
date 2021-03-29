import { Component, OnInit } from '@angular/core';
import {Sonikunj} from '../sonikunj';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sonikunj : Sonikunj={
    assignmentTitle: 'Assignment#3',
    studentNumber: 991591881,
    name: 'Kunj Soni',
    campus:'Davis',
    loginName: 'sonikunj'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
