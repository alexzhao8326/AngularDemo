import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule, routedComponents } from './pages-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PagesRoutingModule
    ],
    exports: [

    ],
    declarations: [
        ...routedComponents
    ],
    providers: [],
})
export class PagesModule { }
