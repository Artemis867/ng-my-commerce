interface ProductDetails {
  data: {
    _id?: any;
    productName: String;
    sizes: Sizes;
  }
}

interface Sizes {
  XS: number;
  S: number;
  M: number;
}

interface ProductListGQL {
  getProductList: ProductDetails[]
}

export { ProductDetails, ProductListGQL };