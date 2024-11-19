function contarPalabras(cadena) {
let palabras = cadena.trim().split(/\s+/);
return palabras.length; 
}
let texto = "hola mundo";
let resultado = contarPalabras(texto);
console.log(`La cantidad de palabras es: ${resultado}`);
