  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',effect: 'fade',
      loop: true,
      autoplay:{
      disableOnInteraction: false,
      delay: 5000,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); 
  });


  document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const navbarMenu = document.getElementById('navbar-sticky');

    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      navbarMenu.classList.toggle('hidden');
      navbarMenu.classList.toggle('block');
    });

    var prices = document.getElementsByClassName('price');

    for (var i = 0; i < prices.length; i++) {
      var price = prices[i];
      var number = parseInt(price.textContent, 10);
      price.textContent = number.toLocaleString();
    }


  });



// Función para controlar la visibilidad de la barra de navegación
function toggleNavbarVisibility() {
  const scrollTriggerPosition = 600;

  if (window.pageYOffset >= scrollTriggerPosition) {
    document.getElementById('nav').classList.add('hidden'); // Oculta la barra de navegación
  } else if (window.pageYOffset < scrollTriggerPosition) {
    document.getElementById('nav').classList.remove('hidden'); // Muestra la barra de navegación
  }
}

// Agrega un evento de scroll para llamar a la función
window.addEventListener('scroll', toggleNavbarVisibility);




  // Función para filtrar los productos
  function filterProducts(filter) {
    const products = document.querySelectorAll('.product');
    
    products.forEach((product) => {
      const daysUsage = product.getAttribute('data-days-usage');
      
      if (filter === 'all' || daysUsage === filter) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }

  // Agrega un evento clic a las etiquetas de filtro
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.getAttribute('data-filter');
      
      // Remueve la clase 'active' de todos los botones
      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
      });
      
      // Agrega la clase 'active' al botón clickeado
      event.target.classList.add('active');
      
      // Filtra los productos
      filterProducts(filter);
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Obtén todas las etiquetas <a> con la clase filter-button
    const filterButtons = document.querySelectorAll(".filter-button");

    // Agrega un evento de clic a cada etiqueta <a>
    filterButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();

        // Remueve la clase 'bg-gray-300' de todas las etiquetas <a>
        filterButtons.forEach((btn) => {
          btn.classList.remove( "underline", "text-3xl", "text-red-700" ,"font-semibold");
        });

        // Agrega la clase 'bg-gray-300' a la etiqueta <a> actual
        this.classList.add("underline", "text-3xl", "text-red-700", "font-semibold");

        // Obtén el valor del atributo 'data-filter' de la etiqueta <a> actual
        const filterValue = this.getAttribute("data-filter");

        // Aquí puedes realizar alguna lógica para filtrar los productos según 'filterValue'
        // Por ejemplo, mostrar/ocultar productos en función de 'filterValue'
      });
    });

    // Establece la clase 'bg-gray-300' en el botón "Todos" por defecto
    const allFilterButton = document.querySelector(".filter-button[data-filter='all']");
    allFilterButton.classList.add("underline", "text-3xl", "text-red-700", "font-semibold" );

    // Simula un clic en el botón "Todos" al cargar la página
    allFilterButton.click();
  });

   // Espera a que el documento esté listo
   document.addEventListener("DOMContentLoaded", function () {
    // Encuentra todas las imágenes con la clase hover-image
    const hoverImages = document.querySelectorAll(".hover-image");

    // Recorre cada imagen y agrega eventos de mouseenter y mouseleave
    hoverImages.forEach((image) => {
        const hoverImageUrl = image.getAttribute("data-hover-image");
        const originalImageUrl = image.getAttribute("src");

        // Al pasar el cursor por encima de la imagen
        image.addEventListener("mouseenter", function () {
            image.setAttribute("src", hoverImageUrl);
        });

        // Al retirar el cursor de la imagen
        image.addEventListener("mouseleave", function () {
            image.setAttribute("src", originalImageUrl);
        });
    });
});

//  // Obtén una referencia al carrito y otros elementos relevantes
//  const carrito = document.getElementById('carrito');
//  const listaCarrito = document.getElementById('lista-carrito');
//  const totalCarrito = document.getElementById('total');
//  const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

//  let carritoData = []; // Almacenar los productos en el carrito

//  // Agregar un evento de clic a los botones "Agregar al carrito"
//  botonesAgregarCarrito.forEach((boton) => {
//    boton.addEventListener('click', () => {
//      const nombre = boton.getAttribute('data-nombre');
//      const precio = parseFloat(boton.getAttribute('data-precio'));

//      // Agregar el producto al arreglo de datos del carrito
//      carritoData.push({ nombre, precio });

//      // Actualizar la lista de productos en el carrito
//      renderizarCarrito();
//    });
//  });

//  // Función para renderizar la lista de productos en el carrito
//  function renderizarCarrito() {
//    listaCarrito.innerHTML = '';

//    let total = 0;

//    carritoData.forEach((producto) => {
//      const listItem = document.createElement('li');
//      listItem.innerHTML = `${producto.nombre}: ${producto.precio} Gs`;
//      listaCarrito.appendChild(listItem);

//      total += producto.precio;
//    });

//    totalCarrito.textContent = total.toFixed(2);
//  }


// const mostrarCarritoBtn = document.getElementById('mostrar-carrito');

// // Agregar un evento de clic al botón "Mostrar Carrito"
// mostrarCarritoBtn.addEventListener('click', () => {
//   // Verificar si la clase 'hidden' está presente en el carrito
//   if (carrito.classList.contains('hidden')) {
//     // Si está oculto, quitar la clase 'hidden' para mostrar el carrito
//     carrito.classList.remove('hidden');
//   } else {
//     // Si está visible, agregar la clase 'hidden' para ocultar el carrito
//     carrito.classList.add('hidden');
//   }
// });


// // Agregar un evento de clic a los botones "Agregar al carrito"
// botonesAgregarCarrito.forEach((boton) => {
//   boton.addEventListener('click', () => {
//     const nombre = boton.getAttribute('data-nombre');
//     const precio = parseFloat(boton.getAttribute('data-precio'));
//     const imagen = boton.getAttribute('data-imagen_url')

//     // Actualizar la lista de productos en el carrito
//     renderizarCarrito();

//     // Mostrar la sección del carrito cuando se agrega un producto
//     carrito.classList.remove('hidden');
//   });
// });


// const mostrarCarritoCarritoBtn = document.getElementById('mostrar-carrito-carrito');

// // Agregar un evento de clic al botón "Mostrar Carrito" en la sección de carrito
// mostrarCarritoCarritoBtn.addEventListener('click', () => {
//   // Verificar si la clase 'hidden' está presente en el carrito
//   if (carrito.classList.contains('hidden')) {
//     // Si está oculto, quitar la clase 'hidden' para mostrar el carrito
//     carrito.classList.remove('hidden');
//   } else {
//     // Si está visible, agregar la clase 'hidden' para ocultar el carrito
//     carrito.classList.add('hidden');
//   }
// });