///Modificar la función obtenerProductosServicios para que devuelva la lista de todos los productos o servicios si no especifa una categoria (if-else)
 
function obtenerProductosServicios(categoria = "") {
    /*
    let lista_filtrada = [];
    for (let int i = 0; i < lista_cursos.length; i++) {
        if (lista_cursos[i].codigo_categoria === categoria) {
            lista_filtrada.push(lista_cursos[i]);
        } 
    }
    return lista_filtrada;
    */
 
    if(categoria === null || categoria == "") {
        return lista_productos;
    } else {
        let lista_filtrada = lista_productos.filter(curso => curso.codigo_categoria === categoria);
        return lista_filtrada;
    }
}


//Funcion que devuelve la informacion de un producto o servicio dado su codigo
function obtenerProductoServicioPorCodigo(codigo) {
    /*
    for (let index = 0; lista_cursos < lista_cursos.length; index++) {
        if( lista_cursos[index].cidigo === codigo ) {
            return lista_cursos[index];
        }
    }
    return null;
    */
    return lista_productos.find(curso => curso.codigo === codigo);    
}


//Funciones relacionadas con el carrito de compras

function mostrarCarrito() {
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    etiqueta_carrito.innerHTML = "";
    let costoTotal = 0;

    carrito = obtenerCarrito();
    
    carrito.forEach((elemento, posicion) => {
        let li = document.createElement("li");
        li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                    <div class="row">
                        <p class="my-0">${elemento.nombre}</p>
                        <small>${elemento.precio}</small>
                    </div>
                    <a class="btn bg-warning text-decoration-none text-dark" href="#"
                        onclick="eliminarProductoServicio('${posicion}')" >
                        <i class="fa fa-times"></i>
                    </a>
                </div>`;
        etiqueta_carrito.appendChild(li);
        costoTotal = costoTotal + elemento.precio;
    });
    let etiqueta_total= document.getElementById("etiqueta_total");
    etiqueta_total.innerText = costoTotal;

}

//Mantener el carrito cuando se mueve entre categorias el usuario
function obtenerCarrito(){
    let carrito = [];
    const str = localStorage.getItem("carrito");
    if(str){
        carrito = JSON.parse(str);
    }
    return carrito;
}


//Funcion que agrega un producto al carrito
function agregarProductoServicio(producto,mostrar=true) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    if(mostrar === true){ 
        mostrarCarrito();
    }
}


//Funcion para eliminar productio del carrito
function eliminarProductoServicio(posicion) {
    //carrito = carrito.filter (elemento => elemento.codigo !== codigo);
    carrito.splice(posicion,1);
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

//Vaciar todo el carrito de compras
function vaciarCarrito(){
    carrito = [];
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}