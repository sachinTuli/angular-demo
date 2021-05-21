import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TimeAgoPipe} from 'time-ago-pipe';
import { ScrollToBottomDirective } from './directives/scroll-to-bottom.directive';


@NgModule({
  declarations: [
    TimeAgoPipe,
    ScrollToBottomDirective
  ],
  exports:[
    TimeAgoPipe,
    ScrollToBottomDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
