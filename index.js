'use strict';

/*
 *  LOPEZ
 */

let productos = [
    {
        id: 1,
        nombre: 'Sombra de ojos',
        descripcion: 'La paleta de sombras Colorfully incluye 16 tonos brillantes perfectos para crear un estilo de maquillaje de ojos personalizado.',
        precio: 6500,
        imagen: 'sombra.jpg',
        categoría: 'Maquillajes',
    },
    {
        id: 2,
        nombre: 'Gloss dorado',
        descripcion: 'Gloss color dorado dura hasta 12 horas y es fácil de remover.',
        precio: 3800,
        imagen: 'gloss-dorado.jpg',
        categoría: 'Maquillajes',
    },
    {
        id: 3,
        nombre: 'Crema de peinar de almendras y ricino',
        descripcion: 'El aceite de almendras dulces ayuda a reparar el cabello seco y maltratado, fortalece y reduce las puntas abiertas. El aceite de ricino aporta resistencia al cabello, da brillo y aporta a la raíz los ácidos grasos necesarios, como el omega 9 y vitamina E que ayudan a fortalecer el pelo.',
        precio: 1800,
        imagen: 'crema-para-peinar.jpg',
        categoría: 'Productos capilares',
    },
    {
        id: 4,
        nombre: 'Protector térmico de moringa y argán',
        descripcion: 'Este protector térmico de moringa y argán reduce la sequedad, fortalece y aporta mucho brillo al pelo. Además facilita el peinado del cabello, reduce el frizz y deja una textura super suave.',
        precio: 1500,
        imagen: 'protector-termico.jpg',
        categoría: 'Productos capilares',
    },
    {
        id: 5,
        nombre: 'Crema corporal',
        descripcion: 'La crema de rosa es ideal para una hidratación profunda y diaria de la piel. La rosa mosqueta además de hidratar es un excelente cicatrizador y regenerador. ',
        precio: 1600,
        imagen: 'crema-corporal.jpg',
        categoría: 'Cuidado corporal',
    },
    {
        id: 6,
        nombre: 'Desodorante natural',
        descripcion: 'Este desodorante es 100% natural, vegano y libre de testeo animal. Es ideal para pieles sensibles.',
        precio: 1200,
        imagen: 'desodorante-natural.jpg',
        categoría: 'Cuidado corporal',
    },
];

const aMaquillajes = document.querySelector("#miniCarrito > p > a");
aMaquillajes.setAttribute("class", "linkMaquillajes");

const aCapilares = aMaquillajes.nextElementSibling;
aCapilares.setAttribute("class", "linkCapilares");

const aCorporal = aCapilares.nextElementSibling;
aCorporal.setAttribute("class", "linkCorporal");


const cateM = productos.filter(producto => producto.categoría === 'Maquillajes');
const cateCapilar = productos.filter(producto => producto.categoría === 'Productos capilares');
const cateCorporal = productos.filter(producto => producto.categoría === 'Cuidado corporal');


const botonMostrarM = document.querySelector(".linkMaquillajes");
botonMostrarM.addEventListener("click",mostrarM);

const botonMostrarCapilar = document.querySelector(".linkCapilares");
botonMostrarCapilar.addEventListener("click", mostrarCapilar);

const botonMostrarCorporal = document.querySelector(".linkCorporal");
botonMostrarCorporal.addEventListener("click", mostrarCorporal);


function estructura (array) {
    const listaP = document.querySelector('#listaProductos');
    listaP.innerHTML = "";
    
    for(let p of array){
    const div1 = document.createElement('div');
    div1.setAttribute("id", "productos");
    
    const div2 = document.createElement('div');
    div1.appendChild(div2);
    
    const img = document.createElement('img');
    img.setAttribute("src", p.imagen);
    img.setAttribute("alt", p.nombre);
   
    const div3 = document.createElement('div');
    div2.append(img, div3);
    
    const h3 = document.createElement('h3');
    h3.innerText = p.nombre;
    const p1 = document.createElement('p');
    p1.innerText = p.descripcion;
    const p2 = document.createElement('p');
    p2.innerText = "Precio: $"
    const p2Span = document.createElement('span');
    p2.appendChild(p2Span);
    p2Span.innerText = p.precio;
    const p3 = document.createElement('p');
    p3.innerText = `Categoría: ${p.categoría}`;

    const boton = document.createElement('button');
    boton.innerText = "Agregar";
    boton.addEventListener("click", abrirModalProducto);
    
    div3.append(h3, p1, p2, p3, boton);

    listaP.appendChild(div1);
    
};
};

function mostrarM () {
 estructura(cateM); 
};

function mostrarCapilar () {
    estructura(cateCapilar);
};

function mostrarCorporal () {
    estructura(cateCorporal);
};




//modal producto
function abrirModalProducto () {
   
    const modalProducto = document.querySelector(".modal");
    modalProducto.setAttribute("id", "modalProducto");
    
    const modalTituloProducto = document.querySelector(".modal-title");
    modalTituloProducto.innerHTML = "producto.nombre";
    
    const botonCerrar = document.querySelector(".btn-close")
    botonCerrar.innerHTML = "X";

    const modalBody = document.querySelector(".modal-body");

    const modalDescripcionProducto = document.querySelector(".modal-body > p");
    modalDescripcionProducto.innerHTML = "producto.descripcion";
    
    const modalPrecio = document.createElement("p");
    modalBody.appendChild(modalPrecio);
    modalPrecio.innerHTML = "Precio: $";

    const modalSpanPrecio = document.createElement("span");
    modalPrecio.appendChild(modalSpanPrecio);

    modalSpanPrecio.innerHTML = "producto.precio";

    const modalCategoria = document.createElement("p");
    modalBody.append(modalCategoria);
    modalCategoria.innerHTML = "producto.categoria";

    const modalAgregar = document.querySelector(".modal-footer > button");
    modalAgregar.innerHTML = "Agregar";

    modalProducto.style.display = "block";
    botonCerrar.addEventListener("click", cerrarModal);

    function cerrarModal () {
        modalProducto.style.display = "none";
    }
    // modalAgregar.classList.toggle("inactive");
    
}



