import { Injectable } from '@angular/core';
import { CreateProductDTO, ProductModel } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { AttributeModel, AttributeTypeModel } from '../models/attribute.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private products = new BehaviorSubject<ProductModel[]>([]);
  private myProducts: ProductModel[] = [];

  private attributes = new BehaviorSubject<AttributeModel[]>([]);
  private myAttributesTypes: AttributeTypeModel[] = [];
  private myAttributes: AttributeModel[] = [];

  products$ = this.products.asObservable();


  constructor() {
    this.myAttributesTypes.push(
      {
      id: '1',
      name: 'Color',
      },
      {
        id: '2',
        name: 'Talla',
      },
      {
        id: '3',
        name: 'Marca',
      },
      {
        id: '4',
        name: 'Fábrica',
      }
    );
    this.myAttributes.push({
      id: '1',
      name: 'Atributo 1',
      type: this.myAttributesTypes[0],
    })
    this.myProducts.push(
      {
        id: '1',
        name: 'Producto 1',
        description: 'Producto Descripción 1',
        value: 1
      },
    )
  }

  addProduct(product: ProductModel){
    this.myProducts.push(product);
    this.products.next(this.myProducts);
  }

  getProducts(){
    return this.myProducts;
  }
  
  addAttribute(attribute: AttributeModel){
    this.myAttributes.push(attribute);
    this.attributes.next(this.myAttributes);
  }

  getAttributesTypes(){
    return this.myAttributesTypes;
  }
  
  getAttributes(){
    return this.myAttributes;
  }
}
