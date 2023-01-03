import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PRIMENG COMPONENTS
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TableModule} from 'primeng/table';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    MenuModule,
    PanelMenuModule,
    InputTextModule,
    CheckboxModule
  ],
  exports: [
    ButtonModule,
    ToolbarModule,
    MenuModule,
    PanelMenuModule,
    InputTextModule,
    CheckboxModule
  ]
})
export class SharedModule { }
