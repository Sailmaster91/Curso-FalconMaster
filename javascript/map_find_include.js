//Ejercicio 1, recorrer con map y aplicar 10% de descuento, devolver un nuevo arreglo con los productos con descuentos."
/*
let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 35 },
  { nombre: "Zapatos", precio: 50 }
];

let productosConDescuentos = productos.map(producto => {
    return {
        nombre: producto.nombre, 
        precio: producto.precio - (producto.precio * 0.1)
    };
});

console.log(productosConDescuentos);

for (produit of productosConDescuentos){
    console.log(`Aprovecha las ofertas en ${produit.nombre} por solo ${produit.precio}`)
}

//RETO 2 - avec filter()

let edades = [12, 17, 18, 21, 15, 30, 40];


let mayorEdad = edades.filter(edad => edad >= 18);
console.log(mayorEdad);

//RETO 3 - avec find().

let nombresS = ["Carlos", "Lucía", "María", "Pedro", "Ana"];

let buscado = nombresS.find(encontrado => encontrado.startsWith("L"));
console.log(buscado);*/

//RETO 4 - Map() + Filter();

let calificaciones = [
  { estudiante: "Luis", nota: 7 },
  { estudiante: "Ana", nota: 9 },
  { estudiante: "Sofía", nota: 4 },
  { estudiante: "Miguel", nota: 6 }
];

let informacion = calificaciones.map(dato => {
    return(
    `${dato.estudiante} tuvo una calificacion de ${dato.nota}`)
})
 console.log(informacion);

let aprobados = calificaciones.filter(info => info.nota >= 8);


aprobados.forEach(info => console.log(`${info.estudiante} aprobo con:  ${info.nota}`))

let frutas = ["manzana", "banana", "pera"];

let resultado = frutas.map((fruta, i, arr) => {
  console.log(`Índice: ${i}, Fruta: ${fruta}, Array: ${arr}`);
  return fruta.toUpperCase();
});


let notas = [7, 8, 5, 9];

let conContexto = notas.map((nota, i, arr) => {
  let promedio = arr.reduce((a, b) => a + b, 0) / arr.length;
  return {
    nota,
    promedio,
    porEncimaDelPromedio: nota > promedio
  };
});

console.log(conContexto);

let numeros = [10, 20, 30, 40];

let filtrados = numeros.filter((num, i) => {
  console.log(`Posición ${i}, Valor: ${num}`);
  return num >= 25;
});

let amigos = ["Carlos", "Lucía", "María", "Pedro"];

let encontrado = amigos.find((amigo, i) => {
  console.log(`Buscando en posición ${i}`);
  return amigo.includes("a");
});

console.log(encontrado);

let encontrados2 = amigos.filter((amigo, i, arr) => {
  console.log(`Buscando un amigo en posicion ${i} en un rango de ${arr.length} elementos`);
  return(amigo.includes("Ca"));
  
})

console.log(encontrados2);
