import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {
    private navItemSource = new BehaviorSubject<number>(0);
    navItem$ = this.navItemSource.asObservable();
    changeNav(number) {
        this.navItemSource.next(number);
    }
}