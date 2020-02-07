import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { CockpitEditComponent } from './cockpit-edit/cockpit-edit.component';
import { GameComponent } from './game/game.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { Highlighter } from './highlighter/highlighter'
import { AppIfDirective } from './odd/ifDirective';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    CockpitEditComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
    Highlighter,
    AppIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
