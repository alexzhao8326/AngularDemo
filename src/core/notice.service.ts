import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
// @ts-ignore
export class NoticeService {

    constructor() { }
    // Observable string sources
    private languageSource = new Subject<string>();
    // Observable string streams
    lan$ = this.languageSource.asObservable();
    
    // Service message commands
    emitLanguage(state:string){
        console.log(state);
        this.languageSource.next(state);
    }
}