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


