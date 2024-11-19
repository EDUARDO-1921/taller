function agregarPersona(arreglo, nuevaPersona) {
    arreglo.push(nuevaPersona);
}
let personas = [
    { nombre: 'cesar', edad: 25 },
    { nombre: 'wilson', edad: 30 },
    { nombre: 'juan', edad: 10 },
    { nombre: 'walter', edad: 17 }
];
let nuevaPersona = { nombre: 'Luis', edad: 20 };
agregarPersona(personas, nuevaPersona);
console.log("Persona agregada al arreglo :", personas);
