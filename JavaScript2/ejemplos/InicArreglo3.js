//fig 10.21: inicarreglo3.js
//inicializacion de arreglos multidimensionales
function iniciar(){
    var arreglo1 = [[1, 2, 3], //fila 0
                    [4, 5, 6]]; //fila 1
    var arreglo2 = [[1, 2], //fila 0
                    [3], //fila 1
                    [4, 5, 6]]; //fila 2
    
    imprimirArreglo("Valores en arreglo1 por fila", arreglo1,
    document.getElementById("salida1"));
    imprimirArreglo("Valores en arreglo2 por fila", arreglo2,
    document.getElementById("salida2"));
}//fin de la funcion iniciar

//mostrar el contenido del arreglo
function imprimirArreglo(encabezado, elArreglo, salida){
    var resultados = "";

    //iterar a traves del conjunto de arreglos unidimensionales
    for (var fila in elArreglo){
        resultados += "<ol>";
        
        //itera a traves de los elementos de cada arreglo unidimensional
        for (var columna in elArreglo[fila]){
            resultados += "<li>" + elArreglo[fila][columna] + "</li>";
        }//fin de for interno

        resultados += "</ol>";  //fin de lista ordenada
    }//fin de for externo

    salida.innerHTML = resultados;
}//fin de la funcion imprimirArreglo

window.addEventListener("load", iniciar, false);