import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StandbyComponent } from '../view/standby/standby.component';

const routes: Routes = [
    { path: '', redirectTo: 'standby', pathMatch: 'full' },
    { path: 'standby', component: StandbyComponent },
    { path: 'pages', loadChildren: '../view/pages/pages.module#PagesModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}