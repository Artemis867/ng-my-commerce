interface ProductDetails {
    productId: String,
    productName: String,
    sizes: Object,
    description?: String
}

interface ProductListGQL {
    getProductList: ProductDetails[]
}

export {ProductDetails, ProductListGQL};