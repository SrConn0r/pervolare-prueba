import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url:string = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getProducts(){
      return this.httpClient.get<ProductModel[]>(this.url + 'products');
  }

  getProductById(id:string){
    return this.httpClient.get<ProductModel>(this.url + 'products' + id);
  }


  saveProduct(product: ProductModel){
    this.httpClient.post(this.url, product);
  }
}
