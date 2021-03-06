import {Component,  Input, OnDestroy} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';
import {OrderListService} from './orderList.service';
import {Order} from '../../../entities/order'
import {ApiService} from "../../../api/api.service";
import {Modal} from "../modal/modal.component";

@Component({
    selector: 'orderList',
    providers: [ApiService],
    styles: [require('./orderList.scss')],
    template: require('./orderList.html'),
    directives: [Modal]
})

export class OrderList {

    @Input() order: Order

    public orders: Order[];

    constructor(private apiService:ApiService) {

    }

    ngOnInit() {
        this.getOrders();
    }

    private addOrder($order) {
        this.apiService.order($order).subscribe(
            order  => this.orders.push(order)
        );
    }

    private getOrders() {
        this.apiService.orders().subscribe(
            data => { this.orders = data}
        );
    }
}