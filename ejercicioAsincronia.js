PRODUCTS_URL = "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json"
ORDERS_URL = "https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json"


function main() {
    fetch(PRODUCTS_URL).then(response => response.json()).then(products => fetchOrders(products))
}


function fetchOrders(products) {
    fetch(ORDERS_URL).then(response => response.json()).then(orders => findMostOrdered(products, orders))
}


function findProduct(products, productID) {
    return products.filter(p => p.idproducto = productID)[0].nombreProducto
}


function findMostOrdered(products, orders) {

    let mostOrderedID = ""
    let mostAmount = 0

    const productsAccum = new Map()

    for (let order of orders) {
        const id = order.idproducto
        let amount = parseFloat(order.cantidad)

        if (productsAccum.has(id)) {
            amount = productsAccum.get(id) + amount
        }
        productsAccum.set(id, amount)

        if (amount > mostAmount) {
            mostAmount = amount
            mostOrderedID = id
        }
    }

    console.log(`Nombre del producto: ${findProduct(products, mostOrderedID)}, Cantidad de veces que ha sido pedido: ${mostAmount}`)

}


main()