
//Lista que contiene la información de los elementos que se mostraran en el carrusel de la pagina principal
//En el carrusel se encuentra los productos más destacados

const elementos_carrusel = [
    {nombre: "Plan básico protección 60 años", 
        descripcion:"Plan que permite ahorrar para complementar tu pensión",
        imagen:"images/planbasicoahorro.jpg" },
    {nombre: "Plan Educativo", 
        descripcion:"Plan adicional que permite asegurar el futuro de quienes amas",
        imagen:"images/familia.jpg" },
    {nombre: "Solvencia", 
        descripcion:"Plan que te permite ahorrar para lo que desees en corto plazo",
        imagen:"images/viajes.jpg" }

]

//Lista que contiene información de las categorias de los productos
const lista_categorias = [
    {codigo: "101",
        nombre: "Planes básicos", 
        descripcion:"Plan básico de protección para el asociado",
        imagen:"images/categoriabasicoproteccion.png"},
    {codigo: "201",
        nombre: "Planes adicionales", 
        descripcion:"Plan adicionales para mejorar la protección del asociado",
        imagen:"images/categoriasadicionales.png"},
    {codigo: "301",
        nombre: "Planes complementarios", 
        descripcion:"Planes que ofrecen protección y apoyo en situaciones inesperadas",
        imagen:"images/categoriascomplementarias.jpg"},
    {codigo: "401",
        nombre: "Planes de auxilio funerario", 
        descripcion:"Planes que te ayudan en los momentos más difíciles",
        imagen:"images/categoriafunerario.jpg"}
]


//Lista que contiene infromación de los cursos
const lista_productos = [
    {   codigo: "1011",
        nombre: "Plan básico 60 años", 
        descripcion:"Plan básico de protección para el asociado con cumplimiento de edad a sus 60 años",
        codigo_categoria: "101",
        imagen:"images/productopb60.jpg",
        precio: 80000,
        clasificacion: 4, 
        contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"]    
    },
    {   codigo: "1012",
        nombre: "Plan básico 70 años", 
        descripcion:"Plan básico de protección para el asociado con cumplimiento de edad a sus 70 años",
        codigo_categoria: "101",
        imagen:"images/productopb70.jpg",
        precio: 80000,
        clasificacion: 4,
        contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"] 
    },
    {   codigo: "2011",
        nombre: "Solvencia", 
        descripcion:"Plan adicional que permite ahorrar a corto plazo",
        codigo_categoria: "201",
        imagen:"images/productosolvencia2.jpg",
        precio: 30000,
        clasificacion: 5,
        contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"] 
    },
    {   codigo: "2012",
        nombre: "Plan educativo", 
        descripcion:"Plan adicional que permite planear el futuro de tus hijos",
        codigo_categoria: "201",
        imagen:"images/productoeducativo.jpg",
        precio: 60000,
        clasificacion: 5,
        contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"] 
    },
    {   codigo: "2013",
        nombre: "Mejora incapacidad temporal", 
        descripcion:"Plan adicional que permite mejorar el valor diario de una incapacidad temporal del plan básico",
        codigo_categoria: "201",
        imagen:"images/productoincapacidad.jpg",
        precio: 60000,
        clasificacion: 5,
        contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"] 
    },
    {   codigo: "3011",
        nombre: "Plan complementario básico", 
        descripcion:"Plan que permite cubrir otros eventos del día a día",
        codigo_categoria: "301",
        imagen:"images/productocomplementario.png",
        precio: 20000,
        clasificacion: 5,
         contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"] 
    },
    {   codigo: "4011",
        nombre: "Plan funerario familiares directos", 
        descripcion:"",
        codigo_categoria: "401",
        imagen:"images/productofunerariofamiliar2.jpg",
        precio: 17000,
        clasificacion: 4,
         contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"] 
    },
    {   codigo: "4012",
        nombre: "Plan funerario adicional", 
        descripcion:"",
        codigo_categoria: "401",
        imagen:"images/productofunerariofamiliar3.jpg",
        precio: 25000,
        clasificacion: 4,
         contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"] 
    },
    {   codigo: "4013",
        nombre: "Plan funerario asociado", 
        descripcion:"",
        codigo_categoria: "401",
        imagen:"images/productofunerarioaociado.jpg",
        precio: 9000,
        clasificacion: 4,
        contenido: ["cobertura a","cobertura b","cobertura c","cobertura d"] 
    }    
]


//Lista que representa el carrito de compras del usuario
let carrito = [];