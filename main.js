let precio = parseInt(prompt("Ingrese precio: "))
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: "))

/*function pagoEnCuotas(precio, cuotas){
    if (cuotas === 1)
        precio = precio;
    else if (cuotas === 2)
        precio *= 1.2;
    else if (cuotas === 3)
        precio *= 1.35;
    else if (cuotas === 4)
        precio *= 1.5;
    else if (cuotas === 5)
        precio *= 1.7;
    else if (cuotas === 6)
        precio *= 1.9;
    

    if (cuotas > 0 && cuotas <= 6)
        alert("El monto a pagar es: " + precio + " en " + cuotas + " cuotas ");
        //console.log("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ");
    else
        alert("Solo puedes seleccionar hasta 6 cuotas.")    
        //console.log("Solo puedes seleccionar desde 1 hasta 6 cuotas.")
}

pagoEnCuotas(15000, 7); */

while(cuotas > 6) {
    alert("Solo puedes seleccionar desde 1 hasta 6 cuotas.")
    //console.log("Solo puedes seleccionar desde 1 hasta 6 cuotas.")
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: "))

}

switch (cuotas) {
    case 1:
        precio = precio
        break;
    case 2:
        precio *= 1.2
        break;
    case 3:
        precio *= 1.35
        break;
    case 4:
        precio *= 1.5
        break;
    case 5:
        precio *= 1.7
        break;
    case 6:
        precio *= 1.9
        break;
}

if (cuotas > 0 && cuotas <= 6) {
    alert("El monto a pagar es: " + precio + " en " + cuotas + " cuotas ");
    //console.log("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ");
}

const products = [
    {id:1, name:'FIFA 23', price: 27000, stock: 15},
    {id:2, name:'ELDEN RING', price: 35000, stock: 7},
    {id:3, name:'MORTAL KOMBAT 11', price: 25000, stock: 10},
    {id:4, name:'GOD OF WAR: RAGNAROK', price: 42000, stock: 10},
    {id:5, name:'CALL OF DUTY: MODERN WARFARE II', price: 40000, stock: 5},
    {id:6, name:'GRAN TURISMO 7: 25 ANNIVERSARY', price: 39000, stock: 2},
    {id:7, name:'UNCHARTED: LOST LEGACY COLLECTION', price: 24000, stock: 3},
    {id:8, name:'HORIZON FORBBIDEN WEST SPECIAL EDITION', price: 30000, stock: 4},
    {id:9, name:'DEAD SPACE: REMAKE', price: 42000, stock: 8},
    {id:10, name:'HOGWARTS LEGACY', price: 45000, stock: 12},
    {id:11, name:'RESIDENT EVIL 4: REMAKE', price: 42000, stock: 7},
    {id:12, name:'DIABLO IV', price: 46000, stock: 13},
]


/*const cart = [];

class ProductCart{
    constructor(obj, qty){
        this.id = obj.id,
        this.name = obj.name,
        this.price = obj.price,
        this.stock = obj.stock,
        this.quantity = qty;
    }
}

const addProductToCart = (id, quantity = 1) => {
    const product = products.find(item => item.id == id)
    if(!product){
        return "El producto no existe."
    }

    if(product.stock < quantity){
        return "No hay suficiente stock del producto."
    }

    const productCart = cart.find(item => item.id == id)
    if(productCart){
        productCart.quantity += quantity
        productCart.stock -= quantity
    }else{
        product.stock -= quantity
        cart.push(new ProductCart(product))
    }

    return cart;
}

console.table(addProductToCart(1, 4));

const delProductToCart = (id, quantity = 1) => {
    const productCart = cart.find(item => item.id == id)
    if(!productCart){
        return "El producto no existe en el carrito."
    }

    productCart.quantity -= quantity;
    productCart.stock += quantity;

    if(productCart.quantity < 1){
        const index = cart.findIndex(item => item.id == id)
        cart.splice(index, 1)
        console.log(`El producto ${productCart.name} fue eliminado del carrito.`)
    }

    return cart;
}



/*console.table(addProductToCart(1, 4));
console.table(addProductToCart(1, 6));
console.table(addProductToCart(2, 6));
console.table(addProductToCart(3, 3));
console.table(delProductToCart(1, 10));
console.table(delProductToCart(2, 3));*/


const total = products.reduce((acum, actual) => {
    return acum + actual.price;
}, 0);

console.log("Total del carrito: " + total); 




let buscarProducto = parseInt(prompt("Buscar producto:"));

const filtro = products.filter((item) => item.price > buscarProducto);

filtro.forEach((item) => {
    alert(item.name    

    
        )


});


