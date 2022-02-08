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

export { ProductDetails };