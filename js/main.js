document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
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
    },
  },
  {
    id: "auto2",
    modelo: "Toyota Corolla 2023",
    precioContado: 21500,
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
    },
  },
  {
    id: "auto3",
    modelo: "Ford Mustang GT",
    precioContado: 35000,
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
    },
  },
  // ... Agregar más autos aquí
];






function cargarAutos() {
  const autoscontenedor = document.getElementById('autoscontenedor');

  autos.forEach(auto => {
    const contenedor = document.createElement('div');
    contenedor.classList.add('cardd'); // Agrega la clase "cardd" al contenedor

    contenedor.innerHTML = `
    <img class="imgcardd" src="./img/gtr4.jpg" alt="">
    <h4 class="titleproducto">${auto.modelo}</h4>
    <p class="precio green-text">USD ${auto.precioContado}</p>

    <div class="trn">
        <div> 
            <i class="fas fa-road icon"></i> Kilómetros: ${auto.kilometros} km<br>
            <i class="fas fa-map-marker-alt icon"></i> Ubicación: Maldonado<br>
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
                <i class="fas fa-info-circle icon vis5"
                    style="color: rgb(42, 42, 214);"></i>
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
        <button id="${auto.id} " class="visualizar">Visualizar</button>
    </div>
     `;

    autoscontenedor.appendChild(contenedor);

   
  });
  
}










cargarAutos();




function changeCarouselImage(imageSrc ) {
  // Cambiar la imagen grande
  const imagenGrande = document.getElementById('imagenGrande');
  imagenGrande.src = '../img/' + imageSrc;


} 