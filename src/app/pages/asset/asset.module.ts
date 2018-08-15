import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AssetRoutingModule} from './asset.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AssetRoutingModule,
    RouterModule
  ],
  declarations: []
})
export class AssetModule { }
