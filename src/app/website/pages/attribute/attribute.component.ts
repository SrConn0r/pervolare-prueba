import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttributeModel, AttributeTypeModel } from 'src/app/models/attribute.model';
import { GlobalService } from 'src/app/services/global.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent {

    attributeForm: FormGroup;

    attributeTypes: AttributeTypeModel[] = [];

    selectedAttributeType!: AttributeTypeModel;
    
    attributeObject: AttributeModel = {
      id: '',
      name: '',
      type: {id: '', name: ''},
    };


    attributes: AttributeModel[] = [];

    constructor(
      private fb: FormBuilder,
      private globalService: GlobalService
    ){
      this.attributeTypes = globalService.getAttributesTypes();
      this.attributes = globalService.getAttributes();
      this.attributeForm = this.fb.group({
        name: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
        ]],
        type: [null, [
          Validators.required,
        ]],
      });
    }


    get f(){
      return this.attributeForm.controls;
    }

    onSubmit(){
      if(this.attributeForm.invalid){
        this.attributeForm.markAllAsTouched();
        return;
      }
  
      this.attributeObject.name = this.f['name'].value;
      this.attributeObject.type = this.f['type'].value;
  
      let random = Math.random() * (10000 - 0) + 0;
      this.attributeObject.id = `${random}`;
  
      this.globalService.addAttribute(this.attributeObject);
  
      this.attributeForm.reset();
      this.attributeObject = {
        id: '',
        name: '',
        type: {id: '', name: ''},
      };
  
      console.log(this.attributeObject);
    }
}
