import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateProductDTO, ProductModel } from 'src/app/models/product.model';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  productForm: FormGroup;

  productObject: ProductModel = {
    id: '',
    name: '',
    description: '',
    value: 0
  };

  products: ProductModel[] = [];

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService
  ){

    this.products = globalService.getProducts();
    this.productForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ]],
      value: [null, [
        Validators.required,
        Validators.minLength(0),
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]],
    });
  }
  ngOnInit(): void {
   
  }

  get f(){
    return this.productForm.controls;
  }

  onSubmit(){
    if(this.productForm.invalid){
      this.productForm.markAllAsTouched();
      return;
    }

    this.productObject.name = this.f['name'].value;
    this.productObject.value = this.f['value'].value;
    this.productObject.description = this.f['description'].value;

    let random = Math.random() * (10000 - 0) + 0;
    this.productObject.id = `${random}`;

    this.globalService.addProduct(this.productObject);

    this.productForm.reset();
    this.productObject = {
      id: '',
      name: '',
      description: '',
      value: 0
    };

    console.log(this.productObject);
  }

}
