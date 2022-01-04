import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  constructor() { }


  @Input () fText: string | undefined;
  @Input () sText: string | undefined;
  @Output() firstTextEvent = new EventEmitter<string>();
  @Output() secondTextEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
  }
  addFirstText(val: string) {
    this.firstTextEvent.emit(val);}
    addSecondText(val: string) {
      this.secondTextEvent.emit(val);}

}
