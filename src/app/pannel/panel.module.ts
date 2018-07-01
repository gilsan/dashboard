import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { FormsModule } from '@angular/forms';
import { PanelRouting } from './panel.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PanelRouting
    ],
    declarations: [
      GridComponent,
    ],
    exports: [ GridComponent ]
})
export class PanelModule { }
