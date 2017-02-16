import { Component } from '@angular/core';

@Component({
    selector: 'home-app',
    template: require('./app.component.html')
})
export class AppComponent {
    // forms: FormData[] = null;
    // selectedForm: FormData = null;

    // constructor(private formService: FormService, private restService: RestService) {
    //     restService.getForms().subscribe((forms: FormData[]) => {
    //         this.formService.setForms(forms);
    //         this.forms = this.formService.getAllForms();
    //     });
    // }

    // selectForm(formId: number) {
    //     this.selectedForm = this.formService.getForm(formId);
    // }
}
