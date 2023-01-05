import { gql } from "apollo-angular"

const GET_PRODUCTS = gql`
query Query {
  getProductList {
    _id,
    productName,
    sizes {
      XS,
      S,
      M,
      L,
      XL
    },
    description
  } 
}
`;

const GET_PRODUCT_DETAILS = gql`
query Query($productId: String) {
  getProductDetails(productId: $productId) {
    productName
    sizes {
      XS
      S
      M
      L
      XL
    }
    description
  }
}
`;

const GET_SNEAKER_LIST = gql`
  query Query {
    getSneakerList {
      _id
      productName
      sizes {
        name
        stock
      }
      description
      imgSrc
    }
  }
`;

export { GET_PRODUCTS, GET_PRODUCT_DETAILS, GET_SNEAKER_LIST };