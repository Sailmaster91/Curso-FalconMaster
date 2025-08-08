

const actividades = ["Programar", "Cocinar" , "Trabajar", "Jugar"];
console.log(actividades);

let numeros = [10, 20, 30, 40];

// 1. ¿Qué valor imprime esto?
console.log(numeros[2]);

// 2. Agrega el número 50 al final del arreglo.
numeros.push(50);
// 3. Elimina el primer número.
numeros.shift();
// 4. Imprime el arreglo final.
console.log(numeros)


for (let i = 0; i < actividades.length; i++)
{
    console.log(actividades[i]);
    if(actividades.includes("Trabajar") && actividades[i] == "Trabajar"){
        console.log("Manos a la Obra")
    }
}

const juegos = ["Call of Duty", "Lol", "Zelda", "Mario Bross"];

//juegos.forEach(juego=> console.log(juego));
for (juego of juegos){
    console.log(juego);
}

let nombres = ["Ana", "Luis", "Carlos", "María"];

for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

for(let nombre of nombres){
    console.log(nombre);
}

nombres.forEach(nombre => console.log(`Hola bienvenida, ${nombre}.`))