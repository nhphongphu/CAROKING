import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateroomComponent } from './createroom.component';

const routes: Routes = [{ path: '', component: CreateroomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateroomRoutingModule { }
