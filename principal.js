function formula(){
    var CantidadT=parseInt(document.getElementById("cant").value);
    var Cantidad1=parseInt(document.getElementById("c1").value);
    var Cantidad2=parseInt(document.getElementById("c2").value);
    document.getElementById("c1").value=(Cantidad1-CantidadT);
    document.getElementById("c2").value=(Cantidad2+CantidadT);
}
function formula2(){
    var CantidadT=parseInt(document.getElementById("cant").value);
    var Cantidad1=parseInt(document.getElementById("c1").value);
    var Cantidad2=parseInt(document.getElementById("c2").value);
    document.getElementById("c1").value=(Cantidad1+CantidadT);
    document.getElementById("c2").value=(Cantidad2-CantidadT);
}
function formula3(){
    var CantidadT=parseInt(document.getElementById("cant").value);
    var Cantidad1=parseInt(document.getElementById("c1").value);
    var Cantidad2=parseInt(document.getElementById("c2").value);
    document.getElementById("c1").value=(Cantidad1+CantidadT);
}
function formula4(){
    var CantidadT=parseInt(document.getElementById("cant").value);
    var Cantidad1=parseInt(document.getElementById("c1").value);
    var Cantidad2=parseInt(document.getElementById("c2").value);
    document.getElementById("c2").value=(Cantidad2+CantidadT);
}
function formula5(){
   var CantidadT=parseInt(document.getElementById("cant").value);
   var Cantidad1=parseInt(document.getElementById("c1").value);
   var Cantidad2=parseInt(document.getElementById("c2").value);
   document.getElementById("c1").value=(Cantidad1-CantidadT)
}
function formula6() {
    var CantidadT=parseInt(document.getElementById("cant").value);
    var Cantidad1=parseInt(document.getElementById("c1").value);
    var Cantidad2=parseInt(document.getElementById("c2").value);
    document.getElementById("c2").value=(Cantidad2-CantidadT);
}

