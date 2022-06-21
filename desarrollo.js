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

var texto_entradas="<ul id='texto'>\
    <li class='lista'>BRUSQUETA SERRANA $480  <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_1'></li><p hidden></p>\
    <li>RABAS....... $1200  <img src='./imagenes/info.jpg' height='50vh' width='50vw' class='info' id='info_2'></li><p hidden></p>\
    <li>LANGOSTINOS...... $1300</li><p hidden class='detalles'>bla bla bla</p><br>\
    <li>PAPAS CLÁSICAS.... $450</li><p hidden></p>\
    <li>PAPAS CHEDDAR..... $550</li><p hidden></p>\
    <li>PAPAS BACON..... $600</li><p hidden></p>\
    <li>PAPAS 4 QUESOS..... $680</li><p hidden></p>\
    <li>PAPAS MEMPHIS!.... $720</li><p hidden></p>"

var texto_hamburguesas="<ul id='texto'>\
    <li>CLASICA.......... $600 </li><p hidden>Medallon de carne, lechuga, tomate, jamon, queso</p>\
    <li>COMPLETA....... $700</li><p hidden>Medallon de carne, lechuga, tomate, cheddar, panceta, cebolla morada, huevo</p>\
    <li>VEGGIE........ $700</li><p hidden>Medallon veggie, lechuga, tomate y pimientos asados, cebolla morada,queso</p>\
    <li>CRIOLLA....... $750</li><p hidden>Medallon de carne, queso, chimi, salsa criolla, lechuga, cebolla morada, huevo</p>\
    <li>MEXICANA...... $750</li><p hidden>Medallon de carne, lechuga, tomate, guacamole, pimientos</p>\
    <li>BLUE.......... $780</li><p hidden>Medallon de carne, rucula, queso azul, nueces, jamon crudo</p>\
    <li>BLACK......... $800</li><p hidden>Bondiola desmenuzada, salsa barbacoa, queso, pimientos y cebollas asadas</p>\
    <li>MEMPHIS!....... $850</li><p hidden>Doble medallon de carne, lechuga, tomate, jamon, cheddar, huevo, pepinos</p>"

var texto_lomos="<ul id='texto'>\
    <li>LOMO COMPLETO $950 </li><p hidden>lomo, jamon, queso, huevo, tomate, lechuga, mayonesa, PAPAS FRITAS</p>\
    <li>LOMO POLLO $900</li><p hidden></p>\
    <li>LOMO VEGGIE $900</li><p hidden></p>\
    <li>LOMO MEXICANO $980</li><p hidden></p>"

var texto_pizzas="<ul id='texto'>\
    <li>MUZZARELLA............ $950 </li><p hidden></p>\
    <li>ESPECIAL.................... $1050</li><p hidden></p>\
    <li>NAPOLITANA............. $1050</li><p hidden></p>\
    <li>FUGAZA...................... $1050</li><p hidden></p>\
    <li>CUATRO QUESOS...... $1150</li><p hidden></p>\
    <li>ANCHOAS................... $1150</li><p hidden></p>\
    <li>RUCULA...................... $1150</li><p hidden></p>\
    <li>CALABRESA.............. $1150</li><p hidden></p>\
    <li>PALMITOS.................. $1200</li><p hidden></p>\
    <li>HAWAIANA................ $1200</li><p hidden></p>\
    <li>MEMPHIS!.................. $1350</li><p hidden></p>"

var texto_empanadas="<ul id='texto'>\
    <li>CARNE SALADA.......$150 </li><p hidden></p>\
    <li>CARNE DULCE..... $700</li><p hidden></p>\
    <li>JAMON Y QUESO.......$150</li><p hidden></p>\
    <li>QUESO Y CEBOLLA....$150</li><p hidden></p>\
    <li>ARABE...................$150</li><p hidden></p>\
    <li>POLLO..................$150</li><p hidden></p>\
    <li>LOMO A CUCHILLO..$170</li><p hidden></p>\
    <li>MATAMBRE A CUCHILLO..$170</li><p hidden></p>"

var texto_principales="<ul id='texto'>\
    <li>MILA DE POLLO...........$1000 </li><p hidden></p>\
    <li>MILA DE TERNERA.......$1100</li><p hidden></p>\
    <li>MILA RELLENA...........$1400</li><p hidden></p>\
    <li>PECHUGA GRILLADA... $1300</li><p hidden></p>\
    <li>LOMO AL PLATO......$1400</li><p hidden></p>\
    <li>PECHUGA GRILLADA... $1300</li><p hidden></p>\
    <li>BROCHETAS DE POLLO...$1400</li><p hidden></p>\
    <li>CARRÉ O BONDIOLA.......$1800</li><p hidden></p>\
    <li>OJO DE BIFE.............$1800</li><p hidden></p>\
    <li>CORDERO..................$2100</li><p hidden></p>\
    <li>SALMON...................$2400</li><p hidden></p>"

var texto_pastas="<ul id='texto'>\
    <li>TALLARINES AL HUEVO....$980</li><p hidden></p>\
    <li>TALLARINES NEGROS</li><p hidden></p><br>\
    <P><u>SORRENTINOS</u><P><p hidden></p>\
    <li>CAPRESSE</li><p hidden></p>\
    <li>CORDERO AL MALBEC</li><p hidden></p>\
    <li>JAMON Y QUESO</li><P hidden></P>\
    <li>SALMON</li><p hidden></p>"

var texto_ensaladas="<ul id='texto'>\
    <li>MIXTA SIMPLE.............$450</li><p hidden></p>\
    <li>RUCULA, CHERRYS<br> Y PARMESANO ..........$600</li><p hidden></p>\
    <li>MAR Y TIERRA.........$1300</li><p hidden></p>\
    <li>MEMPHIS..................$1500</li><p hidden></p>"

var texto_sushi="<ul id='texto'>\
    <li>COMBO INFERNO</li><p hidden></p>\
    <li>COMBO </li><p hidden></p>"

var texto_infantil="<ul id='texto'>\
    <li>MILANESA</li><p hidden></p>\
    <li>MILANESA POLLO</li><p hidden></p>\
    <li>NUGETTS DE POLLO</li><p hidden></p>"

var texto_bebidas="<ul id='texto'>\
    <li>LIMONADA</li><p hidden></p>\
    <li>LINEA COCA-COLA 350ml</li><p hidden></p>\
    <li>AQUARIOS 500ml</li><p hidden></p>\
    <li>AGUA MINERAL</li><p hidden></p>\
    <li>AGUA CON GAS</li><p hidden></p>\
    <li>RED BULL 240ml</li><p hidden></p>"

var texto_cervezas="<ul id='texto'>\
    <li>GOLDEN...............$300</li><p hidden></p>\
    <li>SCOTISH.............$300</li><p hidden></p>\
    <li>IPA.................$300</li><p hidden></p>\
    <li>PEÑON DEL ÁGUILA....$300</li><p hidden></p>\
    <li>STELLA ARTOIS....$300</li><p hidden></p>\
    <li>CORONA</li><p hidden></p>\
    <li>PATAGONIA</li><p hidden></p>\
    <li></li><p hidden></p>"

var texto_vinos="<ul id='texto'>\
    <p><u>BODEGAS</u><p><br><p hidden></p>\
    <li>MI TERRUÑO</li><p hidden></p>\
    <li>SALENTEIN</li><p hidden></p>\
    <li>LAS PERDICES</li><p hidden></p>\
    <li>MOSQUITA MUERTA</li><p hidden></p>\
    <br><li>BLANCOS</li><p hidden></p>"

var texto_coctelería="<ul id='texto'>\
    <li>GIN TONIC</li><p hidden></p>\
    <li>APERITIVOS</li><p hidden></p>\
    <li>TRADICIONALES</li><p hidden></p>\
    <li>DE AUTOR</li><p hidden></p>"

var texto_postres="<ul id='texto'>\
    <li>TIRAMISU.................$680</li><p hidden></p>\
    <li>CHEESE CAKE..........$680</li><p hidden></p>\
    <li>CHOCOTORTA.............$680</li><p hidden></p>\
    <li>DOBLE OREO....$680</li><p hidden></p>"

var texto_cafeteria="<ul id='texto'>\
    <li>POCILLO.........</li><p hidden></p>\
    <li>JARRITO.........</li><p hidden></p>\
    <li>TAZA................</li><p hidden></p>"

 function detalles(e){
     

     $("#base_banner").css("zIndex", "3").animate({opacity:"1"}, 1000)
     $("#cruz").css("zIndex", "4").animate({opacity:"1"}, 1000)
     $("#texto").remove();

     if (e.target==img_entradas || e.target==h_entradas){
        $("#banner").attr("src", "imagenes/rabas.jpg").css("zIndex", "4").animate({opacity:"1"}, 1000);
        $("#base_banner").append(texto_entradas);
        var informacion=document.querySelectorAll(".info");
        for (var i=0; i<informacion.length; i++){  
            informacion[i].addEventListener("click", muestra_informacion, false);
        }
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

 function muestra_informacion(a){
    if(a.target==info_1){
        $("#texto").animate({opacity:"0"},1000, function(){$(this).remove()});
        $("#base_banner").append("<div id='contenedor_info'><p class='texto_info'>esto es una prueba</p></div>");
        $("#contenedor_info").animate({opacity:"1"}, 1000);
    }else if(a.target==info_2){
        $("#texto").animate({opacity:"0"},1000, function(){$(this).remove()});
        $("#base_banner").append("<div id='contenedor_info'><h3 class='texto_info'><u>RABAS</u></h3>\
        <p class='texto_info'>hola hola hola hola hola hola hoal hola hola hola hola hola</p></div>");
        $("#contenedor_info").animate({opacity:"1"}, 1000);
    }
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
