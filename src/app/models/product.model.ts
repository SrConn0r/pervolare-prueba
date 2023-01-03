
export interface ProductModel {
    id: string;
    name: string;
    description: string;
    value: number;
    createDate?: Date;
    updateDate?: Date;
    softDelete?: boolean;
}

export interface CreateProductDTO extends Omit<ProductModel, 'id'| 'createDate'| 'softDelete'| 'updateDate'>{}