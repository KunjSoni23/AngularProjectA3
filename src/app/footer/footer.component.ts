import { Component, OnInit } from '@angular/core';
import {Sonikunj} from '../sonikunj';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
