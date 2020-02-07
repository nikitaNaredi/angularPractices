import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() oddVal;
  
  constructor() { }

  ngOnInit() {
  }
  updateStyle(event: Event){
   
    console.log(event);
    }




}
