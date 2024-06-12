
const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["rodriguez", "diego", "soledad", "javier", "veronica"],
        programacion: ["joaquin", "diego", "matias", "soledad"],
        matematica: ["glavan", "diego", "matias", "soledad", "javier", "veronica"],
        quimica: ["laureano", "diego", "matias", "soledad", "javier", "veronica"]


    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    }else {
        return materias;
    }
}
const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:blue">${profesor}</b><br><br>
        Los alumnos son: <b style="color:red">${alumnos}</b><br><br>
        `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion()
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
}
return `<b style='color:blue'>
${alumno}</b> esta en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b><br><br>
Esta cursando las clases: <b>${clasesPresentes}</b><br><br>
`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("matematica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("javier"))
document.write(cantidadDeClases("soledad"))