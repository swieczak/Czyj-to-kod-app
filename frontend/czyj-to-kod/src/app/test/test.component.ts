import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { ComparisionResult } from '../api/models';
import { ComparisionService } from '../api/services';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
  constructor(private comparisionService:ComparisionService) { }
comparisionResult!:ComparisionResult;

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
    this.compareCode();
  }
  addSecondText(secondText: any) {
    this.text2 = secondText;
    this.stat2=true;
    this.compareCode();
  }

  compareCode(){
    this.comparisionService.compareTwoStringsGet$Json({string_a:this.text1, string_b:this.text2}).subscribe((reponse)=>{this.comparisionResult = reponse});
    console.log("pobrało");

  }

  ngOnInit(): void {
  };

}
