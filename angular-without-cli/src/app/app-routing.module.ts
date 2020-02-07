import { RouterModule,Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

const appRoute: Routes = [
    {path: '/', component: HomeComponent},
    {path: './users', loadChildren: './users/users.module#UsersModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}