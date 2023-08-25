//autos vendidos
function autosvendidos() {
    const autosInactivos = document.getElementById('autosInactivos');

    autos.forEach(vendido => {
        if (!vendido.estado) { // Agrega esta condición para verificar el estado
            const contenedorvendido = document.createElement('div');
            // Agrega la clase "cardd" al contenedor

            contenedorvendido.innerHTML = ` 
           
          
            <section class="bloquevendido">


            <h4 class="titleproducto ertr">Vehículo vendido</h4>
            <div class="imggrande">


                <div class="accordion-item trabtn">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed contacbtnven" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse${vendido.id}"
                            aria-expanded="false" aria-controls="flush-collapse${vendido.id}">
                            <div class="btnain">
                                <i class="fas fa-info-circle icon vis5"
                                    style="color: rgb(42, 42, 214);"></i> Solicitar Información
                            </div>
                            <!-- Cambia el texto aquí -->
                        </button>

                    </h2>
                    <div id="flush-collapse${vendido.id}" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <form class="contact-form" action="#" method="POST">

                                <div class="mb-3">
                                    <label for="name" class="form-label">Tu nombre</label>
                                    <input type="text" class="form-control" id="name" name="name"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Teléfono</label>
                                    <input type="tel" class="form-control" id="phone" name="phone">
                                </div>
                                <div class="mb-3">
                                    <label for="comment" class="form-label">Comentario</label>
                                    <textarea class="form-control"
                                        placeholder="Solicitar información sobre este vehículo"
                                        id="comment" name="comment" rows="2" required></textarea>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="receiveAds"
                                        name="receiveAds">
                                    <label class="form-check-label" for="receiveAds">Recibe
                                        anuncios similares en tu
                                        email</label>
                                </div>
                                <button type="submit"
                                    class="btn btn-primary contactarbtn">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>


                <div id="carouselExample${vendido.id}" class="carousel slide sadsa">
                <div class="carousel-inner tretw">
                <div class="carousel-item active">
                     <img class="d-block w-100" src="./img/aaa.jpg" alt="Imagen 1">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="./img/re.jpg" alt="Imagen 1">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="./img/r2.jpg" alt="Imagen 1">
                </div>
                <!-- Agrega más imágenes según las propiedades de img4, img5, etc. -->
            </div>
                    <button class="carousel-control-prev" type="button"
                        data-bs-target="#carouselExample${vendido.id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button"
                        data-bs-target="#carouselExample${vendido.id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>







                <div class="infocar"> <!-- Agregado el div con clase "infocar" -->
                    <img class="imgcardd" src="./img/gtr4.jpg" alt="">
                    <h4 class="titleproducto">${vendido.modelo}</h4>
                    <p class="precio green-text">USD ${vendido.precioContado}</p>

                    <div class="trn columainfop">
                        <div class="topnax">
                            <i class="fas fa-road icon" style="color: #8e8e8e;"></i> Kilómetros:
                            ${vendido.kilometros} km<br>
                        </div>
                        <div>
                            <i class="fas fa-map-marker-alt icon" style="color: #8e8e8e;"></i>
                            Ubicación:
                            Maldonado<br>
                        </div>
                        <div>
                            <i class="fas fa-car icon" style="color: #8e8e8e;"></i>
                            ${vendido.puertas} Puertas<br>
                        </div>
                        <div>
                            <i class="fas fa-calendar-alt icon" style="color: #8e8e8e;"></i> Año:
                            ${vendido.anio}<br>
                        </div>
                        <div>
                            <i class="fas fa-gas-pump icon" style="color: #8e8e8e;"></i>
                            Combustible:
                            ${vendido.combustible}<br>
                        </div>
                        <div>
                            <i class="fas fa-cogs icon" style="color: #8e8e8e;"></i> Transmisión:
                            ${vendido.traccion}<br>
                        </div>
                        <div>
                            <i class="fas fa-tint icon" style="color: #8e8e8e;"></i> Color: <br>
                        </div>
                        <div>
                            <i class="fas fa-couch icon" style="color: #8e8e8e;"></i> Tapicería:
                            Cuero<br>
                        </div>

                        <div>
                            <i class="fas fa-camera-retro icon" style="color: #8e8e8e;"></i> Cámara
                            trasera: ${vendido.funciones.camara ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-sun icon" style="color: #8e8e8e;"></i> Techo solar:
                            ${vendido.funciones.techoSola ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-snowflake icon" style="color: #8e8e8e;"></i> Suspensión
                            Deportiva:
                            ${vendido.funciones.suspensiones ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-chair icon" style="color: #8e8e8e;"></i> Asientos
                            calefactables:
                            ${vendido.funciones.asientosCalefactables ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-car-alt icon" style="color: #8e8e8e;"></i> Dirección
                            Hidráulica:
                            ${vendido.funciones.direccionHidraulica ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-map icon" style="color: #8e8e8e;"></i> Sistema de
                            navegación: ${vendido.funciones.navegacion ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fab fa-bluetooth icon" style="color: #8e8e8e;"></i> Bluetooth:
                            ${vendido.funciones.bluetooth ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-key icon" style="color: #8e8e8e;"></i> Inicio
                            remoto:${vendido.funciones.inicioRemoto ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-bell icon" style="color: #8e8e8e;"></i>
                            Alarma:${vendido.funciones.alarma ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-shield-alt icon" style="color: #8e8e8e;"></i> ABS:
                            ${vendido.funciones.abs ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-airbag icon" style="color: #8e8e8e;"></i> Airbags:
                            ${vendido.funciones.airbags ? "Sí" : "No"}<br>
                        </div>
                        <div>
                            <i class="fas fa-snowplow icon" style="color: #8e8e8e;"></i> Control de
                            tracción:
                            ${vendido.funciones ? "Sí" : "No"}<br>
                        </div>



                    </div>


                </div>

            </div>
            
        </section>


        `;

            autosInactivos.appendChild(contenedorvendido);
        }
    });
}

autosvendidos();


function changeCarouselImage(imageSrc) {
    // Cambiar la imagen grande
    const imagenGrande = document.getElementById('imagenGrande');
    imagenGrande.src = '../img/' + imageSrc;


} 

// Función para animar el contador en la segunda página
function animateOtroContador() {
    const otroContadorItems = document.querySelectorAll('#otro-contador .contador-item');
    const duration = 10000; // Duración en milisegundos (10 segundos)
    const incrementoProyectos = 4;
    const incrementoSatisfaccion = 101;
    const incrementoHoras = 51;

    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        if (elapsed < duration) {
            const progress = elapsed / duration;

            otroContadorItems[0].querySelector('.contador-numero').textContent = Math.min(
                Math.floor(progress * incrementoProyectos),
                incrementoProyectos
            );

            otroContadorItems[1].querySelector('.contador-numero').textContent = Math.min(
                Math.floor(progress * incrementoSatisfaccion),
                100
            ) + '%';

            otroContadorItems[2].querySelector('.contador-numero').textContent = Math.min(
                Math.floor(progress * incrementoHoras),
                incrementoHoras
            );

            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Llamada a la función para animar el contador en la segunda página
animateOtroContador();
