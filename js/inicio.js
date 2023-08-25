import { comprarProducto } from "./carrito.js";

const divProductos = document.getElementById("productos");


localStorage.setItem("productos", JSON.stringify(productos));
export let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

document.addEventListener("DOMContentLoaded" , () => {
    generarCardsProductos(productosDisponibles)
})

export const generarCardsProductos = (productos) => {
    divProductos.innerHTML = "";

    productos.forEach((producto) => {

        const { img , name, plataform, price, id } = producto

        let card = document.createElement("div")
        
        card.className = "producto"
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
        `

        divProductos.appendChild(card)

        const btnComprar = document.getElementById(`comprar${id}`)
        btnComprar.addEventListener("click", () => comprarProducto(id))

        
    });
};