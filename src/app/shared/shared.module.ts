import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import { SortDirective } from './directives/sort.directive';

@NgModule({
  declarations: [
    NavComponent,
    SortDirective
  ],
    exports: [
        NavComponent,
        SortDirective
    ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
