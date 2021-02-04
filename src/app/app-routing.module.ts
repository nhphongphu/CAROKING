import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './Pages/main/main.component';
import { GameTableComponent } from './Pages/main/game-table/game-table.component';
import { AboutComponent } from './Pages/about/about.component';
import { PageNotFoundComponent } from './Pages/main/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: 'home', component: MainComponent, pathMatch: 'full' },
  // { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'game/:opponent/:size', component: GameTableComponent },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: '', loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule) },
  { path: 'findroom', loadChildren: () => import('./Pages/findroom/findroom.module').then(m => m.FindroomModule) },
  { path: 'lobby', loadChildren: () => import('./Pages/lobby/lobby.module').then(m => m.LobbyModule) },
  { path: 'menu', loadChildren: () => import('./Pages/menu/menu.module').then(m => m.MenuModule) },
  { path: 'waitingroom', loadChildren: () => import('./Pages/waitingroom/waitingroom.module').then(m => m.WaitingroomModule) },
  { path: 'createroom', loadChildren: () => import('./Pages/createroom/createroom.module').then(m => m.CreateroomModule) },
  { path: 'history', loadChildren: () => import('./Pages/history/history.module').then(m => m.HistoryModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
