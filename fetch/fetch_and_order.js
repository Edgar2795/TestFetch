
const cantidad = 10;
var arreglo = new Array();
 
function OrdenarPorNombreAscendente(x,y) {
	return ((x.name.first == y.name.first) ? 0 : ((x.name.first > y.name.first) ? 1 : -1 ));
}

fetch('https://randomuser.me/api/?results=10')
.then(res => res.json())
.then(out => arreglo.push(out.results))
.then((out) => {
    arreglo[0].sort(OrdenarPorNombreAscendente);
  //console.log(arreglo);
  document.write('<br>'+"LISTADO DE PERSONAS ORDENADO ALFABETICAMENTE (POR SU PRIMER NOMBRE)"+'<br><br><br>');
  //document.write('<br>'+arreglo[0].length+'<br>');
  for(i=0;i<cantidad;i++){
    document.write(arreglo[0][i].name.title +". "
    +arreglo[0][i].name.first +" "
    + arreglo[0][i].name.last+'<br><br>');
  }
})
.catch(function(error) {
    console.log(JSON.stringify(error));
  });