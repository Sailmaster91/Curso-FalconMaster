/* Local Scope o Variables locales .
Son las variables declradas dentro de una fucnion.
-Solo podemos acceder a ellas desde dentro de la funcion */


 let numero= 5;
var optenerNumeroLetras = (nombre) =>{
   var numero = nombre.length;
   console.log(`El ${nombre} tiene ${numero} Letras`);

   var funcionAnidada = =>{
    console.log(numero);
   }

   funcionAnidada(); // Aca la funcion anidada si puede acceder a la variable local porque esta dentro de la funcion que tiene acceso a ella.
   
}

optenerNumeroLetras("Miguel")
console.log(numero);