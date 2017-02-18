import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// import { FormService } from './services/form.service';
// import { FauxFormsService } from './services/in-memory.service';
import { RestService } from './services/rest.service';

import {
    HomeComponent, WorkComponent
} from './components/';

@NgModule({
    bootstrap: [ HomeComponent, WorkComponent ],
    declarations: [ HomeComponent, WorkComponent ],
    imports: [
        BrowserModule,
        HttpModule
        // InMemoryWebApiModule.forRoot(FauxFormsService),
        // ReactiveFormsModule
    ],
    providers: [ RestService ]
})
export class AppModule {}
