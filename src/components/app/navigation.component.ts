import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Home } from '../../models';

@Component({
    selector: 'home-app',
    template: require('./app.component.html')
})
export class NavigationComponent {

    constructor() {
    }

    // selectForm(formId: number) {
    //     this.selectedForm = this.formService.getForm(formId);
    // }
}
