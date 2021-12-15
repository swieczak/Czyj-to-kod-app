import { Component, OnInit } from '@angular/core';
import { ComparisionResult } from './api/models';
import { ComparisionService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'czyj-to-kod';
  test!:ComparisionResult;
  constructor(private comparisionService:ComparisionService){
  }
  ngOnInit(): void {
    this.comparisionService.compareTwoStringsGet$Json({string_a:'xx', string_b:'xx'}).subscribe((reposnose:ComparisionResult)=>this.test = reposnose);
    
  }
}
