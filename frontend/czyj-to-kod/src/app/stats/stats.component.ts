import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor() { }
  // demo lists of common words 
  listOfWords1=['kotek','a','b','f','f','e'];
  listOfWords2=['kotek','b']; 
  /////
  ngOnInit(): void {
  }

}
