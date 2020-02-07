import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cockpit-edit',
  templateUrl: './cockpit-edit.component.html',
  styleUrls: ['./cockpit-edit.component.css']
})
export class CockpitEditComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string}
  constructor() { }

  ngOnInit() {
  }

}
