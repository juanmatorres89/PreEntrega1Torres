import { comprarProducto } from "./carrito.js";

const userLogin = document.getElementById("userLogin")
const divProductos = document.getElementById("productosDestacados");

localStorage.setItem("productos", JSON.stringify(productosDestacados));
export let productosDisponibles = JSON.parse(localStorage.getItem("productosDestacados"));

let usuarioLogeado = JSON.parse(sessionStorage.getItem("usuario"))

document.addEventListener("DOMContentLoaded" , () => {

    if(usuarioLogeado === null){
        const a = document.createElement("a")
        a.href = "./html/usuarios.html"
        a.innerHTML = "Login"
        userLogin.appendChild(a)
    }else{
        const p = document.createElement("p")
        const close = document.createElement("button")

        p.innerHTML = `Bienvenido ${usuarioLogeado.user}`
        close.id = "cerrar__sesion"
        close.innerHTML = "cerrar sesion"
        close.addEventListener("click", () => {
            alert(`Gracias por comprar en nuestra tienda ${usuarioLogeado.user}. Usuario deslogeado.`)
            
            sessionStorage.removeItem("usuario")
            location.reload()
        })

        userLogin.appendChild(p)
        userLogin.appendChild(close)
    }
    generarCardsProductos(productosDisponibles)
})

export const generarCardsProductos = (productosDestacados) => {
    divProductos.innerHTML = "";

    productosDestacados.forEach((producto) => {

        const { img , name, plataform, price, id } = producto

        let card = document.createElement("div")
        
        card.className = "producto";
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${plataform}</p>
                <p class="card-text">$${price}</p>
                <button id="comprar${id}" class="btn btn-primary">Comprar</button>
            </div>
        </div>
        `;

        divProductos.appendChild(card)

        const btnComprar = document.getElementById(`comprar${id}`)
        btnComprar.addEventListener("click", () => comprarProducto(id))

        
    });
};