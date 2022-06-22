$(document).ready(function(){

    var elementos=document.querySelectorAll(".img");
    var palabras=document.querySelectorAll("h2");
    
    document.getElementById("cruz").addEventListener("click", cerrar_banner, false);
    //document.getElementById("boton_volver").addEventListener("click", volver, false);

    for (var i=0; i<elementos.length; i++){  
        elementos[i].addEventListener("click", detalles, false);
    }
    for (var i=0; i<palabras.length; i++){
        palabras[i].addEventListener("click", detalles, false);
    }

    
 });

var texto_entradas="<ul id='texto'>\
    <li>BRUSQUETA SERRANA $480  <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_brusqueta'></li>\
    <li>RABAS....... $1200  <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_rabas'></li>\
    <li>LANGOSTINOS...... $1300 <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_langostinos'></li><br>\
    <li>PAPAS CLÁSICAS.... $450</li>\
    <li>PAPAS CHEDDAR..... $550<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_papascheddar'></li>\
    <li>PAPAS BACON..... $600<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_papasbacon'></li>\
    <li>PAPAS 4 QUESOS..... $680<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_papasquesos'></li>\
    <li>PAPAS MEMPHIS!.... $720<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_papasmemphis'></li>"

var texto_hamburguesas="<ul id='texto'>\
    <li>CLASICA.......... $600 <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_burclasica'></li>\
    <li>COMPLETA....... $700<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_burcompleta'></li>\
    <li>VEGGIE........ $700<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_burveggie'></li>\
    <li>CRIOLLA....... $750<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_burcriolla'></li>\
    <li>MEXICANA...... $750<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_brumexicana'></li>\
    <li>BLUE.......... $780<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_burblue'></li>\
    <li>BLACK......... $800<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_burblack'></li>\
    <li>MEMPHIS!....... $850<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_burmemphis'></li>"

var texto_lomos="<ul id='texto'>\
    <li>LOMO COMPLETO $950 <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_lomocompleto'></li>\
    <li>LOMO POLLO $900<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_lomopollo'></li>\
    <li>LOMO VEGGIE $900<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_lomoveggie'></li>\
    <li>LOMO MEXICANO $980<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_lomomexicano'></li>"

var texto_pizzas="<ul id='texto'>\
    <li>MUZZARELLA............ $950</li>\
    <li>ESPECIAL.................... $1050</li>\
    <li>NAPOLITANA............. $1050</li>\
    <li>FUGAZA...................... $1050</li>\
    <li>CUATRO QUESOS...... $1150</li>\
    <li>ANCHOAS................... $1150</li>\
    <li>RUCULA...................... $1150</li>\
    <li>CALABRESA.............. $1150</li>\
    <li>PALMITOS.................. $1200</li>\
    <li>HAWAIANA................ $1200<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_pizzahawaiana'></li>\
    <li>MEMPHIS!.................. $1350<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_pizzamemphis'></li>"

var texto_empanadas="<ul id='texto'>\
    <li>CARNE SALADA.......$150 </li>\
    <li>CARNE DULCE..... $700</li>\
    <li>JAMON Y QUESO.......$150</li>\
    <li>QUESO Y CEBOLLA....$150</li>\
    <li>ARABE...................$150</li>\
    <li>POLLO..................$150</li>\
    <li>LOMO A CUCHILLO..$170</li>\
    <li>MATAMBRE A CUCHILLO..$170</li>"

var texto_principales="<ul id='texto'>\
    <li>MILA DE POLLO...............$1000 <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_milapollo'></li>\
    <li>MILA DE TERNERA...........$1100<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_milaternera'></li>\
    <li>MILA RELLENA..................$1400<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_milarellena'></li>\
    <li>PECHUGA GRILLADA.......$1300<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_pechuga'></li>\
    <li>LOMO AL PLATO................$1400<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_lomoplato'></li>\
    <li>BROCHETAS DE POLLO...$1400<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_brochetas'></li>\
    <li>CARRÉ O BONDIOLA........$1800<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_carre'></li>\
    <li>OJO DE BIFE.......................$1800<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_ojobife'></li>\
    <li>CORDERO...........................$2100<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_cordero'></li>\
    <li>SALMON ROSADO............$2400<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_salmon'></li>"

var texto_pastas="<ul id='texto'>\
    <li>TALLARINES AL HUEVO....$980</li>\
    <li>TALLARINES NEGROS</li><br>\
    <p><u>SORRENTINOS</u></p>\
    <li>CAPRESSE</li>\
    <li>CORDERO AL MALBEC</li>\
    <li>JAMON Y QUESO</li>\
    <li>SALMON</li>\
    <p><i>ELEGI LA SALSA!</i></p>"

var texto_ensaladas="<ul id='texto'>\
    <li>MIXTA SIMPLE.............$450</li>\
    <li>RUCULA, CHERRYS<br> Y PARMESANO ..........$600</li>\
    <li>MAR Y TIERRA.........$1300<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>MEMPHIS..................$1500<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>"

var texto_sushi="<ul id='texto'>\
    <li>COMBO INFERNO<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>COMBO <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>"

var texto_infantil="<ul id='texto'>\
    <li>MILANESA<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>MILANESA POLLO<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>NUGETTS DE POLLO<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>"

var texto_bebidas="<ul id='texto'>\
    <li>LIMONADA<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>LINEA COCA-COLA 350ml<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>AQUARIOS 500ml<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>AGUA MINERAL</li>\
    <li>AGUA CON GAS</li>\
    <li>RED BULL 240ml<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>"

var texto_cervezas="<ul id='texto'>\
    <li>GOLDEN...............$300</li>\
    <li>SCOTISH.............$300</li>\
    <li>IPA.................$300</li>\
    <li>PEÑON DEL ÁGUILA....$300<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>STELLA ARTOIS....$300<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>CORONA</li>\
    <li>PATAGONIA<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>"

var texto_vinos="<ul id='texto'>\
    <p><u>BODEGAS</u><p><br>\
    <li>MI TERRUÑO<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>SALENTEIN<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>LAS PERDICES<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>MOSQUITA MUERTA<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <br><li>BLANCOS<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>"

var texto_coctelería="<ul id='texto'>\
    <li>GIN TONIC<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>APERITIVOS<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>TRADICIONALES<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>\
    <li>DE AUTOR<img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id=''></li>"

var texto_postres="<ul id='texto'>\
    <li>TIRAMISU.................$680</li>\
    <li>CHEESE CAKE..........$680</li>\
    <li>CHOCOTORTA.............$680</li>\
    <li>DOBLE OREO....$680</li>"

var texto_cafeteria="<ul id='texto'>\
    <li>POCILLO.........</li>\
    <li>JARRITO.........</li>\
    <li>TAZA................</li>"

 function detalles(e){
     

     $("#base_banner").css("zIndex", "3").animate({opacity:"1"}, 1000)
     $("#cruz").css("zIndex", "4").animate({opacity:"1"}, 1000)
     $("#texto").remove();

     if (e.target==img_entradas || e.target==h_entradas){
        $("#banner").attr("src", "imagenes/rabas.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
        $("#base_banner").append(texto_entradas);
        var informacion=document.querySelectorAll(".info");
        for (var i=0; i<informacion.length; i++){  
            informacion[i].addEventListener("click", info_entradas, false);
        };
     }else if (e.target==img_hamburguesas || e.target==h_hamb){
        $("#banner").attr("src", "imagenes/hamburguesa.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
        $("#base_banner").append(texto_hamburguesas);  
     }else if (e.target==img_lomos || e.target==h_lomos){
        $("#banner").attr("src", "imagenes/lomo.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
        $("#base_banner").append(texto_lomos);
     }else if (e.target==img_pizzas || e.target==h_pizzas){
         $("#banner").attr("src", "imagenes/pizza.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_pizzas);
     }else if (e.target==img_empanadas || e.target==h_empanadas){
         $("#banner").attr("src", "imagenes/empanada.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_empanadas);

     }else if (e.target==img_principales || e.target==h_principales){
         $("#banner").attr("src", "imagenes/principal.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_principales);
         var informacion_pr=document.querySelectorAll(".info");
         for (var i=0; i<informacion_pr.length; i++){  
            informacion_pr[i].addEventListener("click", info_principales, false);

        }
     }else if (e.target==img_pastas || e.target==h_pastas){
         $("#banner").attr("src", "imagenes/pastas.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_pastas);
     }else if (e.target==img_ensaladas || e.target==h_ensaladas){
         $("#banner").attr("src", "imagenes/ensalada.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_ensaladas);
     }else if (e.target==img_sushi || e.target==h_sushi){
         $("#banner").attr("src", "imagenes/sushi.jpeg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_sushi);
     }else if (e.target==img_infantil || e.target==h_infantil){
         $("#banner").attr("src", "imagenes/infantil.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_infantil);
     }else if (e.target==img_bebida || e.target==h_bebida){
         $("#banner").attr("src", "imagenes/bebida.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_bebidas);
     }else if (e.target==img_cerveza || e.target==h_cerveza){
         $("#banner").attr("src", "imagenes/cervezas.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_cervezas);
     }else if (e.target==img_vino || e.target==h_vino){
         $("#banner").attr("src", "imagenes/vino.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_vinos);
     }else if (e.target==img_coctel || e.target==h_coctel){
         $("#banner").attr("src", "imagenes/coctel.webp").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_coctelería);
     }else if (e.target==img_postres || e.target==h_postres){
         $("#banner").attr("src", "imagenes/postre.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_postres);
     }else if (e.target==img_cafeteria || e.target==h_cafeteria){
         $("#banner").attr("src", "imagenes/cafeteria.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
         $("#base_banner").append(texto_cafeteria);
     }

 }
function info_entradas(e){

    switch(e.target){
        case info_brusqueta:
        $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>BUSQUETAS SERRANAS</u></h3>\
        <p class='texto_info'>Pan de campo tostado, rucula, jamon crudo, queso sardo, tomate cherry</p>\
        <div id='boton_volver'><div id='flecha_volver'></div></div></div>");
        $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;

        case info_rabas:
         $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>RABAS</u></h3>\
         <p class='texto_info'>Rabas rebozadas y frutas, limón, mayonesa casera</p>\
         <div id='boton_volver'><div id='flecha_volver'></div></div></div>");
         $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_langostinos:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>LANGOSTINOS</u></h3>\
            <p class='texto_info'>rebozados y fritos</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
           break;
        case info_papascheddar:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>PAPAS CHEDDAR</u></h3>\
            <p class='texto_info'>Papas, queso cheddar y verdeo.</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_papasbacon:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>PAPAS BACON</u></h3>\
            <p class='texto_info'>Papas, queso cheddar, bacon y verdeo</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_papasquesos:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>PAPAS 4 QUESOS</u></h3>\
            <p class='texto_info'>papas, 4 quesos, jamón, verdeo, cebolla morada</p>\
            <div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_papasmemphis:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>PAPAS MEMPHIS</u></h3>\
            <p class='texto_info'>Papas, huevo, jamon, cebolla morada, perejil, bacon, crema</p>\
            <div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        

    };
    document.getElementById("boton_volver").addEventListener("click", volver, false);
 }

function info_principales(e){

    
    switch(e.target){
        case info_milapollo:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>MILANESA DE POLLO</u></h3>\
            <p class='texto_info'>Milanesa de pollo, jamon, queso, huevo, lechuga, tomate.</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);

        break;
        case info_milaternera:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>MILANESA DE TERNERA</u></h3>\
            <p class='texto_info'>Milanesa de ternera, jamon, queso, huevo, lechuga, tomate.</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_milarellena:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>MILANESA RELLENA</u></h3>\
            <p class='texto_info'>Milanesa de ternera rellena con muzza, jamon, pimientos y cebolla caramelizada</p>\
            <div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_pechuga:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>PECHUGA GRILLADA</u></h3>\
            <p class='texto_info'>Pechuga grillada con ensalada</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_lomoplato:;
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>LOMO AL PLATO</u></h3>\
            <p class='texto_info'>Lomo (jugoso, a punto o seco), huevo, tomate, lechuga.</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_brochetas:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>BROCHETAS DE POLLO</u></h3>\
            <p class='texto_info'>3 brochetas de pollo con salsa criolla y papas fritas.</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_carre:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>CARRÉ O BONDIOLA</u></h3>\
            <p class='texto_info'> Carré o bondiola de cerdo (a elección), chips de batatas, papas noisette y salsa a eleccion</p><br>\
            <p class='texto_info'><i>Salsas:<i> verdeo, champignones</p><div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_ojobife:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>OJO DE BIFE</u></h3>\
            <p class='texto_info'>Ojo de bife (jugoso, a punto o seco), vegetales asados, huevo y papas noisette</p>\
            <div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_cordero:
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>CORDERO</u></h3>\
            <p class='texto_info'>Cordero en reducción de malbec y frutos rojos con puré de papas</p>\
            <div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;
        case info_salmon:
            //$("#texto").animate({opacity:"0"},1000, function(){$(this).remove()});
            $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>SALMÓN ROSADO</u></h3>\
            <p class='texto_info'>Salmós rosado en salsa de camarones, arroz con vegetales y mix de brotes</p>\
            <div id='boton_volver'><div id='flecha_volver'></div></div></div>");
            $("#contenedor_info").animate({marginLeft:"0vw"}, 1000);
        break;


    }
    document.getElementById("boton_volver").addEventListener("click", volver, false);
}



 
 function cerrar_banner(){
     $(this).animate({opacity:"0"}, 1000, function(){$(this).css("zIndex", "0")});
     $("#banner").animate({opacity:"0"}, 1000, function(){
         $(this).attr("src", "").css("zIndex", "0");
     });
     $("#base_banner").animate({opacity:"0"}, 1000,function(){
         $(this).attr("src", "").css("zIndex", "0");
     });
     $("#texto").animate({opacity:"0"},1000, function(){$(this).remove()});
     
 }


 function volver(){
    $("#contenedor_info").animate({marginLeft:"-95vw"},1000, function(){$(this).remove()});

}