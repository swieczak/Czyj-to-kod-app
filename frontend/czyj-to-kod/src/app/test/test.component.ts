import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
  constructor() { }

  text1: string = "Text 1"
  text2: string = "Text 2"



  display = false;
  onPress(){
    this.display = !this.display;
  }

  ngOnInit(): void {
  };

}
