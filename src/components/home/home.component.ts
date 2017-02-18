import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Home } from '../../models';
// import {WorkComponent} from './work/work.component';
@Component({
    selector: 'home-app',
    template: require('./home.component.html')
})
export class HomeComponent {
    home: Home;
    // selectedForm: FormData = null;

    constructor(private restService: RestService) {
        restService.getHome().subscribe((home: Home) => {
            this.home = home;
            console.log(this.home);
        });
    }

}
