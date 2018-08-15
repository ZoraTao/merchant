import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DatalineRoutingModule} from './dataline.routing';
import { TradeFlowComponent } from './trade-flow/trade-flow.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatalineRoutingModule,
    RouterModule
  ],
  declarations: []
})
export class DatalineModule {
}
