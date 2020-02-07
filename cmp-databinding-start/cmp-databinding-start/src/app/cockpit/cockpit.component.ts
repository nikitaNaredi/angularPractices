import { Component, OnInit, Output ,EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated= new EventEmitter<{name: string, content: string}>();
  @ViewChild('serverContent',{static: true}) serverContent: ElementRef;
  //newServerName: string;
  //newServerContent: string;
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(name) {
    this.serverCreated.emit({
      name: name.value,
      content: this.serverContent.nativeElement.value
    })
  }
  onAddBlueprint(name) {
    this.blueprintCreated.emit({
     name: name.value,
      content: this.serverContent.nativeElement.value
    })
  }
  f(event){
    console.log("ccccc "+event.data);
  }
}
