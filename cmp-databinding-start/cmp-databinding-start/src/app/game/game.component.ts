import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 // @Output() serverCreated= new EventEmitter();
  @Output() incrementVal = new EventEmitter<number>();
  value = 0;
  interval;
  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.interval = setInterval(()=>{
      console.log(this.value);
      this.incrementVal.emit(this.value);
      this.value++;
    },1000);
  }

  pauseGame(){
    clearInterval(this.interval);
  }
}
