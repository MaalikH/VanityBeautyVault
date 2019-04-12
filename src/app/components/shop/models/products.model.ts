export interface Metadata {
    category: string;
  }

  export interface ProductModel {
    id: string;
    object: string;
    active: boolean;
    attributes: string[];
    caption: string;
    created: number;
    deactivate_on: any[];
    description: string;
    images: any[];
    livemode: boolean;
    metadata: Metadata;
    name: string;
    package_dimensions?: any;
    shippable: boolean;
    type: string;
    updated: number;
    url: string;
  }

