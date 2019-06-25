import { Component, AfterViewInit } from '@angular/core';
//@ts-ignore
var Quill = require('quill');
var Parchment = Quill.import('parchment');
const ListDataColor = new Parchment.Attributor.Attribute('data-color','data-color',{
    scope:Parchment.Scope.BLOCK_ATTRIBUTE
});
Quill.register('formats/list/data-color',ListDataColor);
Quill.register(ListDataColor,true);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  constructor(){

  }
  

  ngAfterViewInit(){
    
    
  }
 
}

