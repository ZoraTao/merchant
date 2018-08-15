import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'member/list', pathMatch: 'full'
      },
      // 我的用户
      {
        path: 'member/list', loadChildren: './member-list/member-list.module#MemberListModule'
      },
      // 交易流水
      {
        path: 'trade/flow', loadChildren: './trade-flow/trade-flow.module#TradeFlowModule'
      },
      // 结算记录
      {
        path: 'settle/flow', loadChildren: './settle-flow/settle-flow.module#SettleFlowModule'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatalineRoutingModule {
}

