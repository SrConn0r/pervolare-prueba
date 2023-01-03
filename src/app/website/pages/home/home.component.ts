import { Component } from '@angular/core';
import { AttributeModel } from 'src/app/models/attribute.model';
import { ProductModel } from 'src/app/models/product.model';
import { GlobalService } from 'src/app/services/global.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent {

  products: ProductModel[] = [];
  attributes: AttributeModel[] = [];

  results: any[] = [];

  resTable: any[] = [];
  productSelected: ProductModel = {
    id: '',
    name: '',
    description: '',
    value: 0
  };
  attributeSelected: AttributeModel[] = [];

  constructor(private globarService: GlobalService, private messageService: MessageService){
    this.products = this.globarService.getProducts();
    this.attributes = this.globarService.getAttributes();
  }

  //TOAST
  addMessage(){
    this.messageService.add({key: 'myKey1', severity:'error', summary:'Error', detail:'Para agregar un resultado, debes elegir un producto y mínimo un atributo'});
  }
  clear() {
    this.messageService.clear();
  }

  resetResults(){
    this.productSelected = {
      id: '',
      name: '',
      description: '',
      value: 0
    };
    this.attributeSelected = [];
  }

  addResult(){

    if(this.productSelected.name == '' || this.attributeSelected.length === 0) {
      this.addMessage();
      return;
    }

    this.resTable = [];
    this.resTable.push(this.productSelected.name)
    this.attributeSelected.forEach(a => {
      this.resTable.push(a.name);
    }
      );
      
    this.results.push({
      product: this.productSelected.name,
      attribute: this.attributeSelected,
      result: this.resTable
    });
    this.resetResults();
  }

}
