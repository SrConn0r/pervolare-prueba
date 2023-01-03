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
      name: 'Color Blanco',
      type: this.myAttributesTypes[0],
    },
    {
      id: '2',
      name: 'Color Azul',
      type: this.myAttributesTypes[0],
    },
    {
      id: '3',
      name: 'Talla L',
      type: this.myAttributesTypes[1],
    },
    {
      id: '4',
      name: 'Marca Adidas',
      type: this.myAttributesTypes[2],
    },
    {
      id: '5',
      name: 'Fábrica China',
      type: this.myAttributesTypes[3],
    });
    this.myProducts.push(
      {
        id: '1',
        name: 'Camisa',
        description: 'Producto Descripción 1',
        value: 10000
      },
      {
        id: '2',
        name: 'Pantalón',
        description: 'Producto Descripción 2',
        value: 70000
      },
      {
        id: '3',
        name: 'Sudadera',
        description: 'Producto Descripción 3',
        value: 50000
      },
      {
        id: '4',
        name: 'Medias',
        description: 'Producto Descripción 4',
        value: 20000
      },
      {
        id: '5',
        name: 'Chaqueta',
        description: 'Producto Descripción 5',
        value: 300000
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
