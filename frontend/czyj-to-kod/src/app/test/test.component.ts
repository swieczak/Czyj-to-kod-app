import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
  constructor() { }


  display = false;
  onPress(){
    this.display = !this.display;
  }

  text1: string | undefined;
  text2: string | undefined;
  stat1=false;
  stat2=false;
  addFirstText(firstText: any) {
    this.text1 = firstText;
    this.stat1=true;
  }
  addSecondText(secondText: any) {
    this.text2 = secondText;
    this.stat2=true;
  }

  ngOnInit(): void {
  };

}
