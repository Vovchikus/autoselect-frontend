import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { UsersMap } from './usersMap';
import { Feed } from './feed';
import { OrderList } from './orderList';
import { Modal } from './modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    PopularApp,
    UsersMap,
    Feed,
    OrderList,
    Modal,
    Dashboard
  ]
})
export default class DashboardModule {}
