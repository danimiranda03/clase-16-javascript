const v1= "Tío Ben";
const v2= "recuerda lo siguiente:";
const v3= "un gran poder requiere una gran responsabilidad,";
const v4= "ten cuidado con el duende verde."

const spiderman=(peligro)=>{
    if (peligro == true){
        return `Como decía el ${v1} ${v2} ${v3}`;
    }else{
        return `como decía el ${v1} ${v4}`;
    }
};

//etiqueta titulos 
const titulo = document.createElement("h1");
titulo.textContent ="Hola, Me llamo Spiderman";
document.body.appendChild(titulo);

//crear un boton
const boton = document.createElement("button");
const boton2 = document.createElement("button");

boton.innerText="Peligro";
boton2.innerText="No peligro";

document.body.appendChild(boton);
document.body.appendChild(boton2);