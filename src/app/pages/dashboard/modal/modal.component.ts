import {Component, EventEmitter, Output, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from "../../../api/api.service";
import {Order} from '../../../entities/order'

@Component({
    selector: 'modal',
    providers: [ApiService],
    templateUrl: 'modal.html',
    styles: [require('./modal.scss')],
})
export class Modal {

    constructor(private modalService:NgbModal, private apiService:ApiService) {
    }

    public closeResult:string;

    public order:Order;

    public model = new Order();

    submitted = false;

    active = true;

    @Output() submitEmitter = new EventEmitter();

    onSubmit() {
        this.submitForm();
        this.submitted = true;
        let order = new Order(5, 'Here we are');
        this.submitEmitter.emit({
            order: order
        })
    }

    newOrder() {
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason:any):string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    private submitForm() {
        let data = {title: 'Mega new Order'};
        this.apiService.order(data).subscribe(
            data => {
                this.order = data
            }
        );
    }

    @Input() counterValue = 0;
    @Output() counterChange = new EventEmitter();


    increment() {
        this.counterValue++;
        this.counterChange.emit({
            value: this.counterValue
        })
    }

    decrement() {
        this.counterValue--;
        this.counterChange.emit({
            value: this.counterValue
        })
    }


}