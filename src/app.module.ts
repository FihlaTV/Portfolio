
import { NgModule, OnInit } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2SimplePageScrollModule} from 'ng2-simple-page-scroll';
import { RestService } from './services/rest.service';
import { AppRoutingModule }  from './app.routing';

import {
    HomeComponent, WorkComponent, NavigationComponent, AppComponent
} from './components/';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ HomeComponent, WorkComponent, NavigationComponent, AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        Ng2SimplePageScrollModule.forRoot()
    ],
    providers: [ RestService ]
})
export class AppModule{
}
