import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {TradeFlowComponent} from './trade-flow.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TradeFlowComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports: [
    RouterModule
  ], declarations: [
    TradeFlowComponent
  ]
})
export class TradeFlowModule {
}
