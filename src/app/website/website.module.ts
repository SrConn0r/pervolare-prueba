import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './pages/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AttributeComponent } from './pages/attribute/attribute.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ProductComponent,
    NavbarComponent,
    AttributeComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WebsiteModule { }
