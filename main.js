/*let precio = (parseInt(prompt("Ingrese precio: ")))
let cuotas = (parseInt(prompt("Ingrese la cantidad de cuotas: ")))

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
            precio *= 1.7
        else if (cuotas === 6)
            precio *= 1.9;  
        else
            alert("SÃ³lo puedes seleccionar desde 1 hasta 6 cuotas.")
            //console.log("SÃ³lo puedes seleccionar desde 1 hasta 6 cuotas.")

        if (cuotas > 0 && cuotas <= 6)
            alert("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ")
            //console.log("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas "); 
    //} */
    

//pagoEnCuotas(15000, 2); 
        
        
    /*switch (cuotas) {
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
            alert("solo puedes seleccionar desde 1 hasta 6 cuotas.") 
            //console.log("solo puedes seleccionar desde 1 hasta 6 cuotas.") 
        }*/


        const games = [
            {id:1, name:'FIFA 23', price: 27000, stock: 15, plataform: 'PS5/PS4'},
            {id:2, name:'ELDEN RING', price: 35000, stock: 7, plataform: 'PS5/PS4'},
            {id:3, name:'MORTAL KOMBAT 11', price: 25000, stock: 10, plataform: 'PS5/PS4'},
            {id:4, name:'GOD OF WAR: RAGNAROK', price: 42000, stock: 10, plataform: 'PS5/PS4'},
            {id:5, name:'CALL OF DUTY: MODERN WARFARE II', price: 40000, stock: 5, plataform: 'PS5/PS4'},
            {id:6, name:'GRAN TURISMO 7: 25 ANNIVERSARY', price: 39000, stock: 2, plataform: 'PS5'},
            {id:7, name:'UNCHARTED: LOST LEGACY COLLECTION', price: 24000, stock: 3, plataform: 'PS5'},
            {id:8, name:'HORIZON FORBBIDEN WEST SPECIAL EDITION', price: 30000, stock: 4, plataform: 'PS5/PS4'},
            {id:9, name:'DEAD SPACE: REMAKE', price: 42000, stock: 8, plataform: 'PS5'},
            {id:10, name:'HOGWARTS LEGACY', price: 45000, stock: 12, plataform: 'PS5/PS4'},
            {id:11, name:'RESIDENT EVIL 4: REMAKE', price: 42000, stock: 7, plataform: 'PS5/PS4'},
            {id:12, name:'FINAL FANTASY XVI', price: 46000, stock: 13, plataform: 'PS5'},
            {id:12, name:'STREET FIGHTER 6', price: 44700, stock: 13, plataform: 'PS5'},
            {id:12, name:'SPIDERMAN MILES MORALES', price: 35100, stock: 13, plataform: 'PS5/PS4'},
            {id:12, name:'DEAD ISLAND 2', price: 47900, stock: 13, plataform: 'PS5/PS4'},
            {id:12, name:'CUPHEAD', price: 30800, stock: 3, plataform: 'PS5'},
            {id:12, name:'DRAGON BALL Z KAKAROT', price: 21600, stock: 16, plataform: 'PS5'},
            {id:12, name:'THE CALLISTO PROTOCOL', price: 40000, stock: 7, plataform: 'PS5/PS4'},
            {id:12, name:'CYBERPUNK 2077', price: 19000, stock: 10, plataform: 'PS4'},
            {id:12, name:'ALAN WAKE REMASTERED', price: 22200, stock: 9, plataform: 'PS5/PS4'},
            {id:12, name:'DEATH STRANDING', price: 28000, stock: 1, plataform: 'PS5'},
            {id:12, name:'DYING LIGHT 2 STAY HUMAN', price: 36000, stock: 4, plataform: 'PS5/PS4'},
            {id:12, name:'DUALSENSE MIDNIGHT BLACK', price: 60000, stock: 8, plataform: 'PS5'},
            {id:12, name:'DUALSENSE STARLIGHT BLUE', price: 60000, stock: 8, plataform: 'PS5'},
            {id:12, name:'DUALSENSE PINK NOVA', price: 60000, stock: 8, plataform: 'PS5'},
            {id:12, name:'DUALSENSE GRAY CAMOUFLAGE', price: 60000, stock: 8, plataform: 'PS5'},
            {id:12, name:'DUALSENSE WHITE', price: 60000, stock: 8, plataform: 'PS5'},
            {id:12, name:'DUALSENSE COSMIC RED', price: 60000, stock: 8, plataform: 'PS5'},
            {id:12, name:'DUALSENSE GALACTIC PURPLE', price: 60000, stock: 8, plataform: 'PS5'},
            {id:12, name:'GHOST OF TSUSHIMA', price: 354000, stock: 7, plataform: 'PS5/PS4'},
            {id:12, name:'GRAND THEFT AUTO V', price: 23500, stock: 11, plataform: 'PS5/PS4'},
            {id:12, name:'GHOSTWIRE TOKIO', price: 31000, stock: 5, plataform: 'PS5'},
            {id:12, name:'THE LAST OF US PART I', price: 46000, stock: 12, plataform: 'PS5'},
            {id:12, name:'BLOODBORNE', price: 15000, stock: 4, plataform: 'PS4'},
            {id:12, name:'DARK SOULS 3', price: 19000, stock: 13, plataform: 'PS4'},
            {id:12, name:'ASSASSINS CREED VALHALLA', price: 27000, stock: 9, plataform: 'PS5/PS4'},
            {id:12, name:'DEMONS SOULS', price: 37000, stock: 17, plataform: 'PS5'},
            {id:12, name:'GOTHAM KNIGHTS', price: 44000, stock: 2, plataform: 'PS5'},
            {id:12, name:'HITMAN III', price: 25000, stock: 6, plataform: 'PS5/PS4'},
            {id:12, name:'DEVIL MAY CRY V', price: 20400, stock: 9, plataform: 'PS4'},
            {id:12, name:'MEDIEVIL', price: 20000, stock: 3, plataform: 'PS4'},
            {id:12, name:'THE EVIL WITHIN 2', price: 24000, stock: 13, plataform: 'PS4'},
            {id:12, name:'THE LAST OF US PART II', price: 21000, stock: 5, plataform: 'PS4'},
            {id:12, name:'THE WITCHER III', price: 31000, stock: 3, plataform: 'PS5/PS4'},
            {id:12, name:'SEKIRO SHADOWS DIE TWICE', price: 30000, stock: 8, plataform: 'PS4'},
            {id:12, name:'THE QUARRY', price: 28100, stock: 6, plataform: 'PS5/PS4'},
            {id:12, name:'BACK 4 BLOOD', price: 20000, stock: 8, plataform: 'PS5/PS4'},
            {id:12, name:'MAFIA III', price: 17000, stock: 2, plataform: 'PS4'},
            {id:12, name:'WATCH DOGS LEGION', price: 12000, stock: 2, plataform: 'PS5/PS4'},
            {id:12, name:'CRASH TEAM RUMBLE', price: 35000, stock: 4, plataform: 'PS5'},
            {id:12, name:'ATOMIC HEART', price: 37200, stock: 5, plataform: 'PS5/PS4'},
            {id:12, name:'DAYS GONE', price: 18000, stock: 1, plataform: 'PS4'},
            {id:12, name:'LEGO: STAR WARS THE SKYWALKER SAGA', price: 35000, stock: 13, plataform: 'PS4'},
            {id:12, name:'CHRONO CROSS', price: 35000, stock: 5, plataform: 'N SWITCH'},
            {id:12, name:'METROID PRIME', price: 46000, stock: 8, plataform: 'N SWITCH'},
            {id:12, name:'POKEMON DIAMANTE', price: 39000, stock: 9, plataform: 'N SWITCH'},
            {id:12, name:'THE LEGENDS OF ZELDA: TEARS OF THE KINGDOM', price: 51000, stock: 15, plataform: 'N SWITCH'},
            {id:12, name:'MARIO STRICKERS', price: 26000, stock: 3, plataform: 'N SWITCH'},
            {id:12, name:'LEGO DC VILLAINS', price: 13000, stock: 3, plataform: 'N SWITCH'},
            {id:12, name:'POKEMON SHIELD', price: 28000, stock: 2, plataform: 'N SWITCH'},
            {id:12, name:'POKEMON SWORD', price: 27000, stock: 4, plataform: 'N SWITCH'},
            {id:12, name:'RESIDENT EVIL 8', price: 35000, stock: 8, plataform: 'PS5/PS4'},
            {id:12, name:'RESIDENT EVIL 7', price: 20000, stock: 7, plataform: 'PS4'},
        ]

        const consoles = [
            {id:12, name:'PLAYSTATION 4 PRO', price: 460000, stock: 4, plataform: 'PS4'},
            {id:12, name:'PLAYSTATION 5 STANDARD', price: 620000, stock: 5, plataform: 'PS5'},
            {id:12, name:'XBOX SERIES S', price: 500000, stock: 3, plataform: 'XBOX'},
            {id:12, name:'XBOX SERIES X', price: 600000, stock: 5, plataform: 'XBOX'},
            {id:12, name:'NINTENDO SWITCH OLED', price: 400000, stock: 3, plataform: 'N SWITCH'},
        ]


        /*const cart = [];

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


        /*const total = games.reduce((acum, actual) => {
            return acum + actual.price;
        }, 0);

        console.log("Total del carrito: " + total);


        let buscarProducto = prompt("Buscar producto:");
        const filtro = games.find((item) => item.name == buscarProducto);
            
        if(filtro) {
            let respuesta = `
            
            Nombre: ${filtro.name}
            precio: ${filtro.price}
            Plataforma: ${filtro.plataform}
            `
            alert(respuesta);
        }else{
            alert("El producto no existe")
        }; */


        /*let menorPrecio = parseInt(prompt("Ingrese el menor precio: "));
        let filterPrice = games.filter((item) => item.price <= menorPrecio);
        
        filterPrice.forEach((item) => {
            if(filtro) {
                let respuesta = `
                
                Nombre: ${filtro.name}
                precio: ${filtro.price}
                Plataforma: ${filtro.plataform}
                `
                alert(respuesta);
            }else{
                alert("No existe un producto de dicho monto")
            };
        });*/



