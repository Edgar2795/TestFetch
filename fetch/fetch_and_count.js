
const cantidad = 5;
var arreglo = new Array();
var arreglo_nombres_completos = new Array();
var nombres_completos, cadena_obj, letra = "";

function letra_mas_utilizada(letras) {
    var mayorRepeticion = 0, letraMasRepetida='';

    for(i=0; i<letras.length; i++){
        var letraActual = letras[i];
        var contador = 0;
        for (j =0; j<letras.length; j++){
            if (letras[j] == letraActual) contador++;
        }
        if(mayorRepeticion < contador){
            mayorRepeticion = contador
            letra_mas_repetida = letraActual;
        }
    }
    return(letra_mas_repetida);
}

function objectKeysToLowerCase(input) {
    if (typeof input !== 'object') return input;
    if (Array.isArray(input)) return input.map(objectKeysToLowerCase);
    return Object.keys(input).reduce(function (newObj, key) {
        let val = input[key];
        let newVal = (typeof val === 'object') ? objectKeysToLowerCase(val) : val;
        newObj[key.toLowerCase()] = newVal;
        return newObj;
    }, {});
}

fetch('https://randomuser.me/api/?results=5')
.then(res => res.json())
.then(out => arreglo.push(out.results))
.then((out) => {
    for(i=0;i<5;i++){
        nombres_completos = nombres_completos+arreglo[0][i].name.first+arreglo[0][i].name.last;
    }
    cadena_obj = objectKeysToLowerCase(nombres_completos);
    arreglo_nombres_completos = Array.from(cadena_obj);
    letra=letra_mas_utilizada(arreglo_nombres_completos);
    document.write('<br>'+"LISTADO DE LAS "+cantidad+" PERSONAS ELEGIDAS PARA EL PROCESO"+'<br><br><br>');
    for(i=0;i<cantidad;i++){
        document.write(arreglo[0][i].name.first +" "+arreglo[0][i].name.last+'<br><br>');
    }
    document.write('<br>'+"La letra mas utilizada en los nombres completos de las 5 personas es: "+letra);
})
.catch(function(error) {
    console.log(JSON.stringify(error));
  });