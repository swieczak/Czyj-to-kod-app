import { Component, Input, OnInit } from '@angular/core';
import { ComparisionResult } from '../api/models';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() responseFromComparision!:ComparisionResult;

  constructor() { }
  // demo lists of common words 
  listOfWords1=['kotek','a','b','f','f','e'];
  listOfWords2=['kotek','b']; 
  /////
  ngOnInit(): void {
  }

}
