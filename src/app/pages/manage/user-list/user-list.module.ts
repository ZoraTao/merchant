import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserListComponent} from './user-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserListComponent
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
    UserListComponent
  ]
})
export class UserListModule {
}
