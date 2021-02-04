import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateroomRoutingModule } from './createroom-routing.module';
import { CreateroomComponent } from './createroom.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [CreateroomComponent],
  imports: [
    CommonModule,
    CreateroomRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
  ]
})
export class CreateroomModule { }
