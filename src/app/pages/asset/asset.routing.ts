import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      // 提现流水
      {
        path: 'withdraw', loadChildren: './withdraw/withdraw.module#WithdrawModule'
      },
      // 商户信息
      {
        path: 'merchant', loadChildren: './merchant/merchant.module#MerchantModule'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule {
}

