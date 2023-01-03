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
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    MenuModule,
    PanelMenuModule,
    InputTextModule,
    CheckboxModule,
    InputNumberModule,
    InputTextareaModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    ToolbarModule,
    MenuModule,
    PanelMenuModule,
    InputTextModule,
    CheckboxModule,
    InputNumberModule,
    InputTextareaModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    ToastModule
  ]
})
export class SharedModule { }
