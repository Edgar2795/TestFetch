const cantidad = 10;
var arreglo = new Array();
var planeta_encontrado, tipo_terreno;

function buscar_planeta(elementos,nomb_terreno){
    var planeta, planeta_mayor_poblacion; 
    var poblacion=0, mayor_poblacion=0;
    for(i=0;i<cantidad;i++){
        if(elementos[0][i].terrain==nomb_terreno){
            planeta = elementos[0][i].name;
            poblacion = elementos[0][i].population;
            if(mayor_poblacion<poblacion){
                mayor_poblacion = poblacion;
                planeta_mayor_poblacion = planeta;
            }
        }
    }
    if(poblacion==0) {
        planeta_mayor_poblacion = "*** No Encontrado ***";
    }
    return(planeta_mayor_poblacion);
}

fetch('https://swapi.dev/api/planets/')
.then(res => res.json())
.then(out => arreglo.push(out.results))
.then((out) => {
    tipo_terreno = prompt('Introduzca el Tipo de Terreno del Planeta:','');
    planeta_encontrado = buscar_planeta(arreglo, tipo_terreno);
    document.write('<br><br>'+"El Planeta Que Coincide Con El Tipo De Terreno Especificado Es: "+planeta_encontrado);
    console.log(arreglo);
})
.catch(function(error) {
    console.log(JSON.stringify(error));
  });