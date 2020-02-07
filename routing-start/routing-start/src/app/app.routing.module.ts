import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoute: Routes = [
    {path: '', component: HomeComponent },
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ] },
    {path: 'servers', 
    canActivateChild:[AuthGuard],
    component: ServersComponent, 
    children: [
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}}
    ] },
    {path: 'not-found', component: NotFoundComponent, data: {message: 'Page Not found'}},
    {path: '**', redirectTo: '/not-found'}
  ];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}