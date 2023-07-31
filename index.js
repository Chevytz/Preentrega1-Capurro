// Pre entrega 2 - Es un simulador de toma de pedidos para una pizzeria chévere

console.log ("Pre entrega 2 - Capurro")

// Proceso inicial

alert ("Bienvenido a pizzeria Chévere")
const usuario = prompt("Ingrese su usuario por favor");
const dniCuit = prompt("Ingrese su dni/cuit para facturación");
let habitue = prompt("Es cliente habitué? Ingrese 'si' o 'no'");

// Armado del menú usando un array de objetos

const pizzas = [
    { num: 1, nombre: 'Mozzarella', precio: 550 },
    { num: 2, nombre: 'Jamón', precio: 650 },
    { num: 3, nombre: 'Hongos', precio: 700 },
    { num: 4, nombre: 'Aceitunas', precio: 600 },
    { num: 5, nombre: 'Provolone', precio: 750 },
    { num: 6, nombre: 'Margarita', precio: 600 },
    { num: 7, nombre: 'Ananá', precio: 700 },
    { num: 8, nombre: 'Crudo y rúcula', precio: 750 },
  ];

// Exhibición del menú (Usando función flecha de orden superior en map y \n para separar interlinea)

alert("Gracias por elegirnos, si no lo es ya, sabemos que se volverá habitué y tendrá 10% off")
alert("Menú de Pizzas:\n" + pizzas.map(pizza => `${pizza.num}. ${pizza.nombre} - $${pizza.precio}`).join("\n"));

// Guardado del pedido usando un objeto y dentro un array (al revés)

let pedidoActual = {
    nombreCliente: "",
    pizzas: [],
    total: 0,
  };

// Una función para cargar el pedido
function tomarPedido() {
    alert("A continuación, elegí las pizzas que querés y cuantas de cada una:");
  
    // Iteramos sobre el array de pizzas y solicitamos la cantidad deseada al cliente
    pizzas.forEach((pizza) => {
      const cantidad = parseInt(prompt(`¿Cuántas pizzas "${pizza.nombre}" a "${pizza.precio}" deseas? (Ingresa 0 si no deseas llevar esta pizza)`));
      if (!isNaN(cantidad) && cantidad >= 0) {
        pedidoActual.pizzas.push({ nombre: pizza.nombre, cantidad: cantidad, precio: pizza.precio });
        pedidoActual.total += cantidad * pizza.precio;
      }
    });
  
    console.log("Pedido actual:");
    console.log(pedidoActual);
    esHabitue(pedidoActual.total); // Llamamos a la función esHabitue con el total del pedido como argumento
  }
  
  tomarPedido();
  
  // Chequeo de membresía y aplicación de descuento (Func. de orden superior.)
  
  function esHabitue(valorPedido) {
    if (habitue.toLocaleLowerCase() === "si") {
      console.log("Este es nuestro, es habitué. Tiene un 10% de descuento.");
      alert("Felicidades, sos habitué y tenés un 10% de descuento.");
      const valorConDescuento = aplicarDescuento(valorPedido);
      console.log("Total con descuento: $" + valorConDescuento);
      alert("Total con descuento: $" + valorConDescuento);
      alert("En media hora lo tenes, gracias por comer con nosotros!");
    } else {
      console.log("No es habitué - ¡necesitamos fidelizarlo!");
      alert("No sos habitué? Sabías que como habitué tenés un 10% de descuento?");
      alert("En media hora lo tenes, gracias por comer con nosotros!");
    }
  }
  
  function aplicarDescuento(valorPedido) {
    const descuento = valorPedido * 0.1;
    return valorPedido - descuento;
  }