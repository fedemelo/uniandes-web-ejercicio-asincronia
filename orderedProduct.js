PRODUCTS_URL = "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json"
ORDERS_URL = "https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json"

function fetchDataAsJSON(url, callback) {
    fetch(url).then(response => response.json()).then(data => callback(data))
}

function processProducts(data) {
    console.log(data)
}

function main() {
    fetchDataAsJSON(PRODUCTS_URL, processProducts)
}

main()