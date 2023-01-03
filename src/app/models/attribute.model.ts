

export interface AttributeModel {
    id: string;
    name: string;
    type: AttributeTypeModel;
    createDate: Date;
    updateDate: Date;
    softDelete: boolean;
}

export interface AttributeTypeModel {
    id: string;
    name: string;
}