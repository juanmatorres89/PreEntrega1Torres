/*let precio = (parseInt(prompt("Ingrese precio: ")))
let cuotas = (parseInt(prompt("Ingrese la cantidad de cuotas: ")))

    function pagoEnCuotas(precio, cuotas){
        if (cuotas === 1)
            precio = precio;
        else if (cuotas === 2)
            precio *= 1.2;
        else if (cuotas === 3)
            precio *= 1.35;
        else if (cuotas === 4)
            precio *= 1.5;
        else if (cuotas === 5)
            precio *= 1.7
        else if (cuotas === 6)
            precio *= 1.9;  
        else
            alert("SÃ³lo puedes seleccionar desde 1 hasta 6 cuotas.")
            //console.log("SÃ³lo puedes seleccionar desde 1 hasta 6 cuotas.")

        if (cuotas > 0 && cuotas <= 6)
            alert("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ")
            //console.log("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas "); 
    } 
    

pagoEnCuotas(15000, 2); 
        
        
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
            alert("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ")
            //console.log("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ");
        }else{
            alert("SÃ³lo puedes seleccionar desde 1 hasta 6 cuotas.") 
            //console.log("SÃ³lo puedes seleccionar desde 1 hasta 6 cuotas.") 
        }

//const cart = [];

    class ProductCart{
        constructor(obj, qty){
            this.id = obj.id,
            this.name = obj.name,
            this.price = obj.price,
            this.stock = obj.stock,
            this.plataform = obj.plataform,
            this.quantity = qty;
        }
    }

    const addProductToCart = (id, quantity = 1) => {
        const product = games.find(item => item.id == id)
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
            cart.push(new ProductCart(product, quantity))
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
    console.table(delProductToCart(2, 3));


    const total = cart.reduce((acum, actual) => {
        return acum + (actual.price * actual.quantity);
    }, 0);

    console.log("Total del carrito: " + total); 

    let buscarProducto = prompt("Buscar producto:");
        const filtro = productos.find((item) => item.name == buscarProducto);
            
        if(filtro) {
            let respuesta = `
            
            Nombre: ${filtro.name}
            precio: ${filtro.price}
            Plataforma: ${filtro.plataform}
            `
            alert(respuesta);
        }else{
            alert("El producto no existe")
        }; 


        let menorPrecio = parseInt(prompt("Ingrese el menor precio: "));
        let filterPrice = games.filter((item) => item.price <= menorPrecio);
        
        filterPrice.forEach((item) => {
            if(item) {
                let respuesta = `
                
                Nombre: ${item.name}
                precio: ${item.price}
                Plataforma: ${item.plataform}
                `
                alert(respuesta);
            }else{
                alert("No existe un producto de dicho monto")
            };
        }); */

        import { productosDisponibles } from "./inicio.js";

        JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))
    
        document.addEventListener("DOMContentLoaded", () => {
            dibujarCarrito();
        })
    
        let carrito = JSON.parse(sessionStorage.getItem("carrito"))
        const listaCarrito = document.getElementById("items");
        const footCarrito = document.getElementById("totales");
        const btnCarrito = document.getElementById("btnCarrito");
        const carritoTable = document.getElementById("carrito");
        
        
        btnCarrito.addEventListener("click", () => {
            dibujarCarrito()
            if(carritoTable.style.display === "block"){
                carritoTable.style.display = "none"
            }else{
                carritoTable.style.display = "block"
                dibujarCarrito()
            }
        })
    
        
        export const comprarProducto = (idProducto) => {
            const producto = productosDisponibles.find((producto) => producto.id === idProducto)
    
    
            const { nombre, precio, imagen, id } = producto
    
            const productoCarrito = carrito.find((producto) => producto.id === idProducto)
    
            if(productoCarrito === undefined){
                const nuevoProductoCarrito = {
                    id: id,
                    nombre: nombre,
                    precio: precio,
                    imagen: imagen,
                    cantidad: 1
                }
    
                carrito.push(nuevoProductoCarrito)
    
                sessionStorage.setItem("carrito", JSON.stringify(carrito))
            }else{
                const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto)
    
                carrito[indexProductoCarrito].cantidad++
                carrito[indexProductoCarrito].price = price * carrito[indexProductoCarrito].cantidad
                
                sessionStorage.setItem("carrito", JSON.stringify(carrito))
            }
    
            carrito = JSON.parse(sessionStorage.getItem("carrito"))
    
            alert(`usted compro el producto ${nombre}`)
        
        }
    
        const dibujarCarrito = () => {
            listaCarrito.innerHTML = ''
            
            carrito.forEach(producto => {
                const { imagen, nombre, cantidad, precio, id } = producto
    
                let body = document.createElement("tr")
    
                body.className = "producto__carrito"
    
                body.innerHTML = `
                <th><img id="fotoProductoCarrito" src="${imagen}" class="card-img-top"</th>
                <td>${nombre}</td>
                <td>${cantidad}</td>
                <td>${precio / cantidad}</td>
                <td>${precio}</td>
                <td>
                    <button id="+${id}" class="btn btn-success">+</button>
                    <button id="-${id}" class="btn btn-danger">-</button>
                </td>
                `
    
                listaCarrito.append(body)
    
                const btnAgregar = document.getElementById(`+${id}`);
                const btnRestar = document.getElementById(`-${id}`);
    
                btnAgregar.addEventListener("click", () => aumentarCantidad(id));
                btnRestar.addEventListener("click", () => restarCantidad(id));
    
                
            });
    
            dibujarFooter();
        }
    
    
        const dibujarFooter = () => {
            if(carrito.length > 0){
                footCarrito.innerHTML = ""
    
                let footer = document.createElement("tr")
    
                footer.innerHTML = `
                <th><b>Totales:</b></th>
                <td></td>
                <td>${generarTotales().cantidadTotal}</td>
                <td></td>
                <td>${generarTotales().costoTotal}</td>
                `
    
                footCarrito.append(footer)
            }else{
                footCarrito.innerHTML = "<h3>No hay productos en el carrito</h3>"
            }
    
        }
    
        const generarTotales = () => {
            const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0)
            const cantidadTotal = carrito.reduce((total, { cantidad }) => total + cantidad, 0)
    
            return {
                costoTotal: costoTotal,
                cantidadTotal: cantidadTotal
            }
        }
    
        const aumentarCantidad = (id) => {
            const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
            const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad
    
            carrito[indexProductoCarrito].cantidad++
            carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad
    
            sessionStorage.setItem("carrito", JSON.stringify(carrito))
    
            dibujarCarrito();
    
        }
    
        const restarCantidad = (id) => {
            const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
            const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad
    
            carrito[indexProductoCarrito].cantidad--
            carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad
    
            if(carrito[indexProductoCarrito].cantidad === 0) {
                carrito.splice(indexProductoCarrito, 1)
            }
    
            sessionStorage.setItem("carrito", JSON.stringify(carrito))
    
            dibujarCarrito();
        }