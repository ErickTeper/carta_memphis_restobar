$(document).ready(function(){

    var elementos=document.querySelectorAll(".img");
    var palabras=document.querySelectorAll("h2");
    document.getElementById("cruz").addEventListener("click", cerrar_banner, false);

     for (var i=0; i<elementos.length; i++){
         elementos[i].addEventListener("click", detalles, false);

     }
     for (var i=0; i<palabras.length; i++){
         palabras[i].addEventListener("click", detalles, false);

     }
 });

 var texto_hamburguesas="<ul id='texto'>\
    <li>CLASICA: $600 </li><p hidden>Medallon de carne, lechuga, tomate, jamon, queso</p>\
    <li>COMPLETA: $700</li><p hidden>Medallon de carne, lechuga, tomate, cheddar, panceta, cebolla morada, huevo</p>\
    <li>VEGGIE: $700</li><p hidden>Medallon veggie, lechuga, tomate y pimientos asados, cebolla morada,queso</p>\
    <li>CRIOLLA: $750</li><p hidden>Medallon de carne, queso, chimi, salsa criolla, lechuga, cebolla morada, huevo</p>\
    <li>MEXICANA: $750</li><P hidden>Medallon de carne, lechuga, tomate, guacamole, pimientos</P>\
    <li>BLUE: $780</li><p hidden>Medallon de carne, rucula, queso azul, nueces, jamon crudo</p>\
    <li>BLACK: $800</li><p hidden>Bondiola desmenuzada, salsa barbacoa, queso, pimientos y cebollas asadas</p>\
    <li>MEMPHIS!: $850</li><p hidden>Doble medallon de carne, lechuga, tomate, jamon, cheddar, huevo, pepinos</p>"

 function detalles(e){
     

     $("#base_banner").css("zIndex", "3").animate({opacity:"1"}, 1000)
     $("#cruz").css("zIndex", "4").animate({opacity:"1"}, 1000)
     if (e.target==img_entradas || e.target==h_entradas){
         $("#banner").attr("src", "imagenes/rabas.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append("<p id='texto'>probando</p>");
     }else if (e.target==img_hamburguesas || e.target==h_hamb){
         $("#banner").attr("src", "imagenes/hamburguesa.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_hamburguesas);
     }else if (e.target==img_lomos || e.target==h_lomos){
         $("#banner").attr("src", "imagenes/lomo.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_pizzas || e.target==h_pizzas){
         $("#banner").attr("src", "imagenes/pizza.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_empanadas || e.target==h_empanadas){
         $("#banner").attr("src", "imagenes/empanada.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_principales || e.target==h_principales){
         $("#banner").attr("src", "imagenes/principal.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_pastas || e.target==h_pastas){
         $("#banner").attr("src", "imagenes/pastas.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_ensaladas || e.target==h_ensaladas){
         $("#banner").attr("src", "imagenes/ensalada.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_sushi || e.target==h_sushi){
         $("#banner").attr("src", "imagenes/sushi.jpeg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_infantil || e.target==h_infantil){
         $("#banner").attr("src", "imagenes/infantil.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_bebida || e.target==h_bebida){
         $("#banner").attr("src", "imagenes/bebida.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_cerveza || e.target==h_cerveza){
         $("#banner").attr("src", "imagenes/cervezas.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_vino || e.target==h_vino){
         $("#banner").attr("src", "imagenes/vino.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_coctel || e.target==h_coctel){
         $("#banner").attr("src", "imagenes/coctel.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_postres || e.target==h_postres){
         $("#banner").attr("src", "imagenes/postre.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }else if (e.target==img_cafeteria || e.target==h_cafeteria){
         $("#banner").attr("src", "imagenes/cafeteria.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
     }
 }

 function cerrar_banner(e){
     $("#banner").animate({opacity:"0"}, 1000, function(){
         $(this).attr("src", "").css("zIndex", "0");
     });
     $("#base_banner").animate({opacity:"0"}, 1000,function(){
         $(this).attr("src", "").css("zIndex", "0");
     });
     $(this).animate({opacity:"0"}, 1000).css("zIndex", "0");
     $("#texto").animate({opacity:"0"},1000, function(){$(this).remove()});
 }
