import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';


const routes: Routes = [{
	path: '',
	data: {
        title: '시작 페이지',
        urls: [{title: 'Dashboard', url: '/dashboard'},{title: '시작페이지'}]
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
    	RouterModule.forChild(routes)
    ],
	declarations: [StarterComponent]
})
export class StarterModule { }
