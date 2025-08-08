/* 
BLOCK Scope / Alcance de tipo bloque.

Este tipo de alcance, pertenecen todas las variabels con declaradas con const o let, y se encuentren dentro de un bloque {} 
-Solo podemos acceder a ellas dentro del bloque */

/* let accesoPermitido; */ // Sino estuviese definida
const edad = 4;
if (edad > 18){
    accesoPermitido = true;
    
    if(true){
        console.log(accesoPermitido);
    }
    const miFuncion = () =>{
        console.log("Acesso permitido " + accesoPermitido)

    }
    miFuncion();
}
const accesoPermitido = "SI";
console.log(accesoPermitido);