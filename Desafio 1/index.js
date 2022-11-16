let descuentoBlackFriday = prompt("Ingrese codigo de descuento")

if(descuentoBlackFriday === "BLCK"){

    const resta = (a,b) => a - b 
    const blck = x => x * 0.30
     
    let precioProducto = parseInt(prompt("Ingrese precio del producto"));
    let nuevoPrecio = resta(precioProducto, blck(precioProducto));
    alert("El precio con descuento es $" + nuevoPrecio);
    
}else{
    alert ("Codigo incorrecto, intente nuevamente")
}
