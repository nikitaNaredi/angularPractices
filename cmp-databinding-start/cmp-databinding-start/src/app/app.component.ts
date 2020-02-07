import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [{'type':'server', 'name': 'test', 'content': 'A test element'}];
  // newServerName = '';
  // newServerContent = '';

  // onServerAdded(serverElement: {name: string, content: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverElement.name,
  //     content: serverElement.content
  //   });
  // }

  // onBlueprintAdded(serverElement: {name: string, content: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name:  serverElement.name,
  //     content: serverElement.content
  //   });
  // }

  value = [0];

  updateVal(eventVal: number){
    this.value.push(eventVal);
  }
  update1(event: Event){
    console.log(event);
  }
  update2(){

  }
}
