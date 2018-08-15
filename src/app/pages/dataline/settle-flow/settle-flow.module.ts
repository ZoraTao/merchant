import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettleFlowComponent} from './settle-flow.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SettleFlowComponent
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
    SettleFlowComponent
  ]
})
export class SettleFlowModule {
}
