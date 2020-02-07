import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

@NgModule({
    imports: [
        RouterModule.forRoot([{path: '', component: UsersComponent}])
    ],
    exports: [RouterModule]
})

export class UsersRoutingModule{}