import {Component, EventEmitter, Output, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from "../../../api/api.service";
import {Order} from '../../../entities/order'
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'modal',
    providers: [ApiService],
    templateUrl: 'modal.html',
    styles: [require('./modal.scss')],
})
export class Modal {

    constructor(private modalService:NgbModal, private apiService:ApiService, private form: FormsModule) {
    }

    public closeResult:string;

    private modalRef: NgbModalRef;

    public model = new Order();

    public active = true;

    @Output() submitEmitter = new EventEmitter();

    onSubmit(form: any) {
        this.model = form;
        let localModalRef = this.modalRef;
        this.submitEmitter.emit(this.model);
        localModalRef.close();
    }

    refresh() {
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    open(content) {
        this.modalRef = this.modalService.open(content);
    }
}