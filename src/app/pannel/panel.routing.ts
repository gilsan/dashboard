import { NgModule} from '@angular/core';
import { Routes , Router, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

const PanelRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'grid',
      component: GridComponent,
      data: {
        title: '현황판',
        urls: [{title: 'Panel', url: '/panel'}, {title: 'GridComponent'}, {title: 'Grid'}]
      }
    },
   ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(PanelRoutes)
  ]

})
export class PanelRouting {}

