import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StandbyComponent } from '../view/standby/standby.component';

// console.log(Quill.imports);

@NgModule({
  declarations: [
    AppComponent,
    StandbyComponent
  ],
  imports: [
    BrowserModule,
    QuillModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
