function filtrarmayoresdeedad(arreglo) {
    return arreglo.filter(persona => persona.edad >= 18);
}

let personas = [
    { nombre: 'maria', edad: 25 },
    { nombre: 'juan', edad: 30 },
    { nombre: 'andrea', edad: 10 },
    { nombre: 'carlos', edad: 17 }
];

let personasMayores = filtrarmayoresdeedad(personas);

console.log( "Las personas mayores de edad : ",personasMayores);
