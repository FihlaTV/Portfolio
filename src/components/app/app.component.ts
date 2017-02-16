import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Home } from '../../models';

@Component({
    selector: 'home-app',
    template: require('./app.component.html')
})
export class AppComponent {
    home: Home;
    // selectedForm: FormData = null;

    constructor(private restService: RestService) {
        restService.getHome().subscribe((home: Home) => {
            this.home = home;
            console.log(this.home);
        });
    }

    // selectForm(formId: number) {
    //     this.selectedForm = this.formService.getForm(formId);
    // }
}
