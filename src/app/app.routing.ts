import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './pages/layout/layout.component';

export const routes: Routes = [
  {path: '', redirectTo: 'dataline', pathMatch: 'full'},
  {path: 'dataline', component: LayoutComponent, loadChildren: './pages/dataline/dataline.module#DatalineModule'},
  {path: 'asset', component: LayoutComponent, loadChildren: './pages/asset/asset.module#AssetModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
