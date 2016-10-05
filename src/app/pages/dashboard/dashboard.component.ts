import {Component, ViewEncapsulation} from '@angular/core';
import {Modal} from "./modal/modal.component";


@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html'),
  directives: [Modal]
})
export class Dashboard {

  formSubmitted($event){
    console.log($event);
  }

  constructor() {
  }

}
