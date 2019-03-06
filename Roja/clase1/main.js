//alert("sirve")

//var variableNumero = 2;
//var variableTexto = "este es un texto";
//var variableBooleana = true;

//console.log("texto que prueba la consola");
//console.log(variableNumero);
//console.log(variableTexto);
//console.log(variableBooleana);

//console.log(typeof(variableBooleana));

//let miEdad = 21;
//const pi = 3.1416;
//concatemacion
//console.log("Mi edad es: " + pi);

//if (miEdad >= 18 && miEdad <= 60)
//{
  //  console.log("Bienvenido al bar!");
//}else if(miEdad > 60){
  //  console.log("ya estas muy viejo");
//}    else {
  //    console.log("eres menor de edad")

//}

//for
//for(let i=0; i<11; i++){
//  console.log(i);
//}

//for(let i=0; i <= 25; i++) {
  //if(i%2 == 0){
    //  console.log(i)
  //}
//}
//A partir de una variable que contenga una cadena de texto. se deb mostrar mediante
//un console.log esa misma cadena pero alternando entre minusculas y mayusculas
//let = "perritosalchicha"
//El resultado en consola debe mostrarse como: "pErRiToSaLcHiChA"
//var nombre = "perritosalchicha";
//var resultado = ""

for(let i = 0; i <= nombre.lenght; i++){
  if (i % 2 == 0){
    resultado = resultado + nombre.chartAt(i).toLocaleUpperCuase();

  }else {
     resultado = resultado + nombre.chartAt(i).toLocaleLowerCase();
  }

console.log(resultado);


//
//if(2 === "2"){
  //console.log(true)
//}else{
  //console.log(false)
//}

//let n1 = 2;
//let n2 = 2;

//function SumaDosNumeros(num1, num2){
  //let suma = num1 + num2;
  //return suma
  //console.log("ewfwe")
//}

//let resultado = SumaDosNumeros(n2,n1);
//console.log(resultado);
//alert(resultado);

