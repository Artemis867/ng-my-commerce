import { gql } from "apollo-angular"

const GET_PRODUCTS = gql`
query Query {
  getProductList {
    _id,
    productName,
    sizes {
      S,
      M,
      L,
      XL
    },
    description
  } 
}
`;

export {GET_PRODUCTS};