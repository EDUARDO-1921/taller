function buscaPersona(arreglo, nombresBuscados) {
    return arreglo.filter(persona => nombresBuscados.includes(persona.nombre));
}

let personas = [
    { nombre: 'pedro', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'juan', edad: 22 }
];

let nombresBuscados = ['Pedro'];
let personasEncontradas = buscaPersona(personas, nombresBuscados);

console.log(personasEncontradas);
