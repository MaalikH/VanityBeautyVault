export interface Attributes {
    length: string;
    curl: string;
  }

  export interface Inventory {
    quantity?: any;
    type: string;
    value?: any;
  }

  export interface Metadata {
  }

  export interface Datum {
    id: string;
    object: string;
    active: boolean;
    attributes: Attributes;
    created: number;
    currency: string;
    image: string;
    inventory: Inventory;
    livemode: boolean;
    metadata: Metadata;
    package_dimensions?: any;
    price: number;
    product: string;
    updated: number;
  }

  export interface SKUsModel {
    object: string;
    data: Datum[];
    has_more: boolean;
    url: string;
  }

  export interface AttributeModel {
    name: string;
    options: string[];
    selected: string;
  }

export interface SelectedAttributeModel {
  attributeName: string;
  attributeValue: string;
}

export interface ShoppingCartItemModel {
  sku: string;
  quantity: number;
}




