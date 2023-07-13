// Pre entrega 1 - Es un simulador de toma de pedidos para una distribuidora para kioscos.

console.log ("Pre entrega 1 - Capurro")

// Variables
const valorCaramelos = 5;
const valorAlfajores = 30;
const valorPackAgua = 50;
const valorGalletitas = 25;

// Proceso Inicial

alert ("Bienvenido a Distribuidora SC");
const usuario = prompt("Ingrese su usuario por favor");
const dniCuit = prompt("Ingrese su dni/cuit");
let validacionsocio = prompt("Es socio? Ingrese 'si' o 'no'");

// Uso del while para agitar la membresia (El bucle mas triste de la life, lo se)
while (validacionsocio != "si") {
    console.log ("No Socio, hay que intentar fidelizar. Pilas");
    alert("No sos socio? Sabias que registrandote te hacemos un 10% de descuento?");
    break;
} 

console.log ("Distribuidora SC");
console.log ("Pedido de " + usuario + " / Datos de facturacion: " + dniCuit);
alert ("De momento contamos con stock de Caramelos GulaGula a $5, Alfajores Chocor a $30, Packs de agua Vida a $50 y Galletitas LEGALLET a $25");

//Toma de pedido

const cantidadCaramelos = parseInt(prompt("Cuantos caramelos quiere llevar? (A $5 c/u)"));
alert ("Entonces serian $" + (cantidadCaramelos * valorCaramelos));
const pedidoCaramelos = parseInt(cantidadCaramelos*valorCaramelos);
console.log ("Caramelos: " + cantidadCaramelos + "--- $" +(cantidadCaramelos * valorCaramelos));

const cantidadAlfajores = parseInt(prompt("Cuantos alfajores quiere llevar? (A $30 c/u)"));
alert ("Entonces serian $" + (cantidadAlfajores * valorAlfajores));
const pedidoAlfajores = parseInt (cantidadAlfajores * valorAlfajores);
console.log ("Caramelos: " + cantidadAlfajores + "--- $" +(cantidadAlfajores * valorAlfajores));

const cantidadPackAgua = parseInt(prompt("Cuantos packs de agua quiere llevar? (A $50 c/u)"));
alert ("Entonces serian $" + (cantidadPackAgua * valorPackAgua));
const pedidoPackAgua = parseInt (cantidadPackAgua * valorPackAgua);
console.log ("Caramelos: " + cantidadPackAgua + "--- $" +(cantidadPackAgua * valorPackAgua));

const cantidadGalletitas = parseInt(prompt("Cuantas galletitas quiere llevar? (A $25 c/u)"));
alert ("Entonces serian $" + (cantidadGalletitas * valorGalletitas));
const pedidoGalletitas = parseInt (cantidadGalletitas * valorGalletitas);
console.log ("Caramelos: " + cantidadGalletitas + "--- $" +(cantidadGalletitas * valorGalletitas));

// Suma del pedido

const valorPedido = parseInt(pedidoCaramelos + pedidoAlfajores + pedidoPackAgua + pedidoGalletitas);
console.log ("El valor total es: $" + valorPedido);
alert ("Muchas gracias, el valor de su pedido es de $" + valorPedido );

//Uso de switch para calcular valor de envio

alert ("Los valores de entrega son: CABA = $250 , Norte $ 400, Oeste $400, Sur $600");
let zonaEntrega = prompt("Ingrese su zona de entrega: 'caba', 'norte', 'sur', 'oeste'");
console.log ("La zona de entrega elegida es: " + zonaEntrega);
let valorEntrega = 0

    switch (zonaEntrega){
    
        case 'caba': 
            valorEntrega = (250 + valorPedido);
            alert("El valor de su pedido con la entrega elegida es de: $" + valorEntrega);
            break;   
        case 'norte':
            valorEntrega = (400 + valorPedido);
            alert("El valor de su pedido con la entrega elegida es de: $" + valorEntrega);
            break;   
        case 'sur':
            valorEntrega = (600 + valorPedido);
            alert("El valor de su pedido con la entrega elegida es de: $" + valorEntrega);
            break;   
        case 'oeste':
            valorEntrega = (400 + valorPedido);
            alert("El valor de su pedido con la entrega elegida es de: $" + valorEntrega);
            break;              
        default:
            alert("Opcion invalida");
            break;
     } 
     console.log ("Valor con entrega a zona " + zonaEntrega + " es de: $" + valorEntrega)

//Uso de function para hacer la suma final
let valorFinal = 0
function socio () {
    if (validacionsocio === 'si') {
        alert ("Felicidades por ser socio tenes un 10% de descuento");
        const descuento = valorEntrega * 0.1;
        valorFinal = valorEntrega - descuento;
        alert ("El valor final de tu pedido es de: " + valorFinal );
        console.log ("El valor final del pedido es de: " + valorFinal);
    }
    if (validacionsocio === 'no') {
        alert ("Como no vas a ser socio? No te hacemos el 10%");
        alert ("Estas durmiendo");
    }   
}
socio ();

alert ("Gracias por comprar con nosotros. Tu pedido por valor de $"+ valorFinal + " sera despachado cuanto antes")
console.log ("Pedido para: " + usuario + "  - Facturacion: " + dniCuit)
console.log ("A despachar a zona " + zonaEntrega +" por valor total de " + valorFinal)
