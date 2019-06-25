import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NoticeService} from '../../core/notice.service'

@Component({
    selector: 'standby',
    templateUrl: './standby.component.html'
})

export class StandbyComponent implements OnInit {
    constructor(
        private router:Router,
        private noticeService:NoticeService
    ) { }
    goLogin(){
        this.router.navigate(['/pages/login']);
        setTimeout(()=>{
            this.noticeService.emitLanguage('SC')
        },5000)
    }
    ngOnInit() { }
}