var arreglo = new Array();
var indice_usuario_encontrado, edad_entrada;

fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(out => arreglo.push(out.results))
.then((out) => {
    edad_entrada = prompt('Ingrese la Edad','');
    for(i=0;i<arreglo.length;i++){
        if(arreglo[0][i].dob.age > edad_entrada){
            indice_usuario_encontrado = i;
            document.write('<br><br>'+"El primer usuario encontrado con la edad mayor a la especificada es: "
            +arreglo[0][indice_usuario_encontrado].name.title+". "
            +arreglo[0][indice_usuario_encontrado].name.first+" "
            +arreglo[0][indice_usuario_encontrado].name.last+". "
            +'<br><br>'+"Edad: "+arreglo[0][indice_usuario_encontrado].dob.age);
        }
        else{
            document.write("No existe usuario con edad mayor a la especificada");
        }
    }
})
.catch(function(error) {
    console.log(JSON.stringify(error));
  });