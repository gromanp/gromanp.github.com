//DOM
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});

//Obtener los  elementos de la clase .close
let links = document.querySelectorAll(".close");

//recorrer elementos
links.forEach(function(link){

    //agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        return false;        
    });
});*/

//Obtener los  elementos de la clase .close
let links = document.querySelectorAll(".close");
//recorrer esos elementos
links.forEach(function(link){

    //agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        // Quitarle las clases a la animacion que ya tiene
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");  
        //agregar clases para animar con fadeOut
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){
            location.href= "/";
        },800); 

        return false;
    });
});

