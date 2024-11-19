function transformarMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
}
let nombres = ["juan", "Ana", "cristian", "elisa"];
let nombresMayusculas = transformarMayusculas(nombres);
console.log(nombresMayusculas);
