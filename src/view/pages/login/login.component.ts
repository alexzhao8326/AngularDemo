import { Component, OnInit, OnDestroy } from '@angular/core';
import {NoticeService} from '../../../core/notice.service'

@Component({
    selector: 'selector-name',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    constructor(
        private noticeService:NoticeService
    ) { 
        this.subscription = this.noticeService.lan$.subscribe(state=>{
            if(!this.lang && this.genVerify){
                this.genVerify.next(state);
            }
            this.lang = state; 
        })
    }
    lang:string;
    genVerify:any;
    subscription:any;
    goMainMenu(){
        let that = this;
        function* verify(){
            console.log('loading');
            if(that.lang === 'SC'){
                console.log('leave to Main Menu#1')
            }else{
                var y = yield false;
                if(y === 'SC'){
                    console.log('leave to Main Menu#2')
                }
            }
        }
        this.genVerify = verify();
        this.genVerify.next();
    }

    ngOnInit() { }
    ngOnDestroy(){
        this.subscription.ubsubscribe()
    }
}