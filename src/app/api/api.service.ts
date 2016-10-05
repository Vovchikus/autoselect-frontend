import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Order} from '../entities/order'

@Injectable()
export class ApiService {

    constructor(private http:Http) {
    }

    private url = '//autoselect.dev/app_dev.php/api/';
    private ordersMethod = 'orders';
    private orderMethod = 'order';

    orders():Observable<Order[]> {
        return this.http.get(this.url + this.ordersMethod)
            .map(this.extractData)
            .catch(this.handleError);
    }

    order(data):Observable<Order> {
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.url + this.orderMethod, body)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        return res.json() || [];
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}