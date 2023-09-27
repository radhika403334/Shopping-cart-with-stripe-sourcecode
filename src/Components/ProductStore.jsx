// coffee: price_1Nut7pSD0LHxrw0bNQjQZu5L
// Sunglasses: price_1NutCkSD0LHxrw0bSqzn9Lf8
// Camera : price_1NutDkSD0LHxrw0bZahv4nPA

const productsArray = [
    {
        id: "price_1Nut7pSD0LHxrw0bNQjQZu5L",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1NutCkSD0LHxrw0bSqzn9Lf8",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1NutDkSD0LHxrw0bZahv4nPA",
        title: "Camera",
        price: 39.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if(productData == undefined) {
    console.log("Product not find");
    return undefined;
    }

    return productData;
}

export { productsArray, getProductData };

/*
a) find() will help us in traversing through productsArray 
*/