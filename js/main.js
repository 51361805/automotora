document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".trs");
  let currentItemIndex = 0;

  function showNextImage() {
    carouselItems[currentItemIndex].classList.remove("active");
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    carouselItems[currentItemIndex].classList.add("active");
  }

  setInterval(showNextImage, 800); // Cambiar cada 1000 ms (1 segundo)
});




function changeCarouselImage(imagePath) {
  // Obtén el elemento de imagen del carrusel
  var carouselImage = document.getElementById('carouselImage');
  // Cambia la fuente de la imagen del carrusel
  carouselImage.src = imagePath;
}


const autos = [
  {
    id: "auto1",
    modelo: "Mitshubishi Mirage G 2023",
    precioContado: 18725,
    estado: true,
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    kilometros: 50000,
    combustible: "Nafta",
    puertas: 4,
    anio: 2020,
    traccion: "AWD",
    financiacion: 36,
    importeCuota: 125,
    motor: "V6",
    funciones: {
      camara: true,
      techoSolar: false,
      suspensiones: true,
      asientosCalefactables: true,
      direccionHidraulica: false,
      bluetooth: true,
      inicioRemoto: true,
      alarma: true,
      sensorEstacionamiento: true,
      abs: true,
      airbags: true,
      controlTraccion: true,
      navegacion:true
    },
  },
  {
    id: "auto2",
    modelo: "Toyota Corolla 2023",
    precioContado: 21500,
    estado: false,
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    kilometros: 35000,
    combustible: "Nafta",
    puertas: 4,
    anio: 2022,
    traccion: "FWD",
    financiacion: 48,
    importeCuota: 180,
    motor: "Inline-4",
    funciones: {
      camara: true,
      techoSolar: false,
      suspensiones: false,
      asientosCalefactables: false,
      direccionHidraulica: true,
      bluetooth: false,
      inicioRemoto: true,
      alarma: true,
      sensorEstacionamiento: true,
      abs: true,
      airbags: true,
      controlTraccion: true,
      navegacion:false
    },
  },
  {
    id: "auto3",
    modelo: "Ford Mustang GT",
    precioContado: 35000,
    estado: true,
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    kilometros: 28000,
    combustible: "Gasolina",
    puertas: 2,
    anio: 2019,
    traccion: "RWD",
    financiacion: 24,
    importeCuota: 400,
    motor: "V8",
    funciones: {
      camara: true,
      techoSolar: false,
      suspensiones: true,
      asientosCalefactables: false,
      direccionHidraulica: true,
      bluetooth: true,
      inicioRemoto: false,
      alarma: true,
      sensorEstacionamiento: false,
      abs: true,
      airbags: true,
      controlTraccion: true,
      navegacion:true
    },
  },
  {
    id: "auto8",
    modelo: "BMW X5",
    precioContado: 45000,
    estado: false,
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    kilometros: 25000,
    combustible: "Gasolina",
    puertas: 4,
    anio: 2020,
    traccion: "AWD",
    financiacion: 36,
    importeCuota: 500,
    motor: "V6",
    funciones: {
      camara: true,
      techoSolar: true,
      suspensiones: true,
      asientosCalefactables: true,
      direccionHidraulica: false,
      bluetooth: true,
      inicioRemoto: false,
      alarma: true,
      sensorEstacionamiento: true,
      abs: true,
      airbags: true,
      controlTraccion: true,
      navegacion: true
    }
  },
  // Agrega aquí los otros cuatro objetos adicionales
  {
    id: "auto9",
    modelo: "Audi Q5",
    precioContado: 38000,
    estado: true,
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    kilometros: 22000,
    combustible: "Gasolina",
    puertas: 4,
    anio: 2018,
    traccion: "AWD",
    financiacion: 24,
    importeCuota: 420,
    motor: "V6",
    funciones: {
      camara: true,
      techoSolar: true,
      suspensiones: false,
      asientosCalefactables: true,
      direccionHidraulica: false,
      bluetooth: true,
      inicioRemoto: true,
      alarma: true,
      sensorEstacionamiento: true,
      abs: true,
      airbags: true,
      controlTraccion: true,
      navegacion: true
    }
  },
  // ... Agregar más autos aquí
];
















function cargarAutos() {
  const autoscontenedor = document.getElementById('autoscontenedor');

  autos.forEach(auto => {
    if (auto.estado) { // Verificar el estado
      const contenedor = document.createElement('div');
      contenedor.classList.add('cardd'); // Agregar la clase "cardd" al contenedor

      contenedor.innerHTML = `
      <div id="carouselExample${auto.id}" class="carousel slide trgdt">
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img class="d-block w-100" src="./img/gtr2.jpg" alt="Imagen 1">
          </div>
          <div class="carousel-item">
              <img class="d-block w-100" src="./img/gtr3.jpg" alt="Imagen 2">
          </div>
          <div class="carousel-item">
              <img class="d-block w-100" src="./img/porche.jpeg" alt="Imagen 3">
          </div>
          <!-- Agrega más imágenes según las propiedades de img4, img5, etc. -->
      </div>
      <button class="carousel-control-prev" type="button"
          data-bs-target="#carouselExample${auto.id}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button"
          data-bs-target="#carouselExample${auto.id}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
  </div>
  
      
      <h4 class="titleproducto">${auto.modelo}</h4>
      <p class="precio green-text">USD ${auto.precioContado}</p>

      <div class="trn">
          <div> 
              <i class="fas fa-road icon"></i> Km: ${auto.kilometros} km<br>
              <i class="fas fa-map-marker-alt icon"></i> Maldonado<br>
              <i class="fas fa-car icon"></i> ${auto.puertas} Puertas<br>
          </div>

          <div>
              <i class="fas fa-calendar-alt icon"></i> Año: ${auto.anio}<br>
              <i class="fas fa-gas-pump icon"></i> Combustible: ${auto.combustible}<br>
          </div>
      </div>

      <div class="accordion-item">
          <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#flush-collapse${auto.id}"
                  aria-expanded="false" aria-controls="flush-collapse${auto.id}">
                  <i class="fas fa-info-circle icon vis5" style="color: rgb(42, 42, 214);"></i>
                  <p> Ver Información</p>
              </button>
          </h2>
          <div id="flush-collapse${auto.id}" class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                  <div class="financiacion marginleft">
                      <p><i class="fas fa-credit-card"></i> Financiación disponible:</p>
                      <p>Hasta en ${auto.financiacion} cuotas de <span class="currency">USD</span> ${auto.importeCuota}</p>
                      <p>¡La primera cuota dentro de los 60 días!</p>
                  </div>
              </div>
          </div>
      </div>

      <div class="centbutton">
          <button id="${auto.id}" class="visualizar">Visualizar</button>
      </div>
      `;

      // ... Tu código para construir el contenido del contenedor

      const visualizarButton = contenedor.querySelector('.visualizar');
      visualizarButton.addEventListener('click', () => {
        // Al hacer clic en el botón "Visualizar", se guarda la información del vehículo en el Local Storage
        const vehiculosGuardados = JSON.parse(localStorage.getItem('vehiculosGuardados')) || [];
        vehiculosGuardados.push(auto);
        localStorage.setItem('vehiculosGuardados', JSON.stringify(vehiculosGuardados));
        window.location.href = '/pages/vistos.html'; 
      });

      autoscontenedor.appendChild(contenedor);
    }
  });
}

// Llama a la función para cargar los autos automáticamente
cargarAutos();
















const contadorElementos = document.querySelectorAll('.contador-item');
const valoresFinales = [100, 100, 400];
const mensajes = [
  'Atención Personalizada',
  'Clientes Satisfechos',
  'Negocios Realizados'
];

let contador = 0;
let valor = 0; // Valor actual del contador

function cambiarValor() {
  if (contador < contadorElementos.length) {
    const enfoqueElement = contadorElementos[contador].querySelector('.enfoque');
    const pElement = contadorElementos[contador].querySelector('p');

    if (contador === 2) {
      enfoqueElement.textContent = valor;
    } else {
      enfoqueElement.textContent = `${valor}%`;
    }
    
    pElement.textContent = mensajes[contador];

    contadorElementos[contador].classList.add('mostrar'); // Agregar clase para mostrar con animación

    valor++; // Incrementar el valor
    if (valor > valoresFinales[contador]) {
      contador++;
      valor = 0;
    }
  } else {
    clearInterval(intervalo);
  }
}

const duracionTotal = 10000; // 10 segundos en milisegundos
const intervalo = setInterval(cambiarValor, duracionTotal / (valoresFinales[0] + valoresFinales[1] + valoresFinales[2]));










function filtrarAutos() {
  const filtro = document.querySelector('.search-input').value.toLowerCase();
  const autosContenedor = document.getElementById('autosContenedor');

  if (filtro === '') {
    // Si el filtro está vacío, vaciar el contenido del contenedor
    autosContenedor.innerHTML = '';
    return; // No es necesario seguir procesando si el filtro está vacío
  }

  autosContenedor.innerHTML = '';

  autos.forEach(auto => {
    if (auto.modelo.toLowerCase().includes(filtro) && auto.estado) {
      const autoElement = document.createElement('div');
          
      autoElement.classList.add('cardd');
      autoElement.innerHTML = `
      <div id="carouselExample${auto.id}" class="carousel slide trgdt">
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img class="d-block w-100" src="./img/gtr2.jpg" alt="Imagen 1">
          </div>
          <div class="carousel-item">
              <img class="d-block w-100" src="./img/gtr3.jpg" alt="Imagen 2">
          </div>
          <div class="carousel-item">
              <img class="d-block w-100" src="./img/porche.jpeg" alt="Imagen 3">
          </div>
          <!-- Agrega más imágenes según las propiedades de img4, img5, etc. -->
      </div>
      <button class="carousel-control-prev" type="button"
          data-bs-target="#carouselExample${auto.id}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button"
          data-bs-target="#carouselExample${auto.id}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
  </div>
  
      
      <h4 class="titleproducto">${auto.modelo}</h4>
      <p class="precio green-text">USD ${auto.precioContado}</p>

      <div class="trn">
          <div> 
              <i class="fas fa-road icon"></i> Km: ${auto.kilometros} km<br>
              <i class="fas fa-map-marker-alt icon"></i> Maldonado<br>
              <i class="fas fa-car icon"></i> ${auto.puertas} Puertas<br>
          </div>

          <div>
              <i class="fas fa-calendar-alt icon"></i> Año: ${auto.anio}<br>
              <i class="fas fa-gas-pump icon"></i> Combustible: ${auto.combustible}<br>
          </div>
      </div>

      <div class="accordion-item">
          <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#flush-collapse${auto.id}"
                  aria-expanded="false" aria-controls="flush-collapse${auto.id}">
                  <i class="fas fa-info-circle icon vis5" style="color: rgb(42, 42, 214);"></i>
                  <p> Ver Información</p>
              </button>
          </h2>
          <div id="flush-collapse${auto.id}" class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                  <div class="financiacion marginleft">
                      <p><i class="fas fa-credit-card"></i> Financiación disponible:</p>
                      <p>Hasta en ${auto.financiacion} cuotas de <span class="currency">USD</span> ${auto.importeCuota}</p>
                      <p>¡La primera cuota dentro de los 60 días!</p>
                  </div>
              </div>
          </div>
      </div>

      <div class="centbutton">
          <button id="${auto.id}" class="visualizar">Visualizar</button>
      </div>
      `;
      autosContenedor.appendChild(autoElement);
    }
  });
}
