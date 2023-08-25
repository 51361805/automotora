

function cargarVehiculoSeleccionado() {
    const vehiculosGuardados = JSON.parse(localStorage.getItem('vehiculosGuardados')) || [];

    const contenedorPrincipal = document.getElementById('boloquevistosve');

    vehiculosGuardados.forEach(vehiculoSeleccionado => {
        const bloqueVendido = document.createElement('section');
        bloqueVendido.classList.add('bloquevendido');

        // Verificar si el vehículo ya existe en la lista de vehículos guardados
        if (!existeVehiculoEnContenedor(contenedorPrincipal, vehiculoSeleccionado)) {
            bloqueVendido.innerHTML = `
                      



<h4 class="titleproducto ertr">Vehículo Visto</h4>
<div class="imggrande">


    <div class="accordion-item trabtn">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed contacbtnven" type="button"
                data-bs-toggle="collapse" data-bs-target="#flush-collapse${vehiculoSeleccionado.id}"
                aria-expanded="false" aria-controls="flush-collapse${vehiculoSeleccionado.id}">
                <div class="btnain">
                    <i class="fas fa-info-circle icon vis5"
                        style="color: rgb(42, 42, 214);"></i> Solicitar Información
                </div>
                <!-- Cambia el texto aquí -->
            </button>

        </h2>
        <div id="flush-collapse${vehiculoSeleccionado.id}" class="accordion-collapse collapse"
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


    <div id="carouselExample${vehiculoSeleccionado.id}" class="carousel slide sadsa">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="../img/gtr1.jpg" alt="Imagen 1">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../img/gtr3.jpg" alt="Imagen 2">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../img/porche.jpeg" alt="Imagen 3">
            </div>
            <!-- Agrega más imágenes según las propiedades de img4, img5, etc. -->
        </div>
        <button class="carousel-control-prev" type="button"
            data-bs-target="#carouselExample${vehiculoSeleccionado.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button"
            data-bs-target="#carouselExample${vehiculoSeleccionado.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>







    <div class="infocar"> <!-- Agregado el div con clase "infocar" -->
        <img class="imgcardd" src="./img/gtr4.jpg" alt="">
        <h4 class="titleproducto">${vehiculoSeleccionado.modelo}</h4>
        <p class="precio green-text">USD ${vehiculoSeleccionado.precioContado}</p>

        <div class="trn columainfop">
            <div class="topnax">
                <i class="fas fa-road icon" style="color: #8e8e8e;"></i> Kilómetros:
                ${vehiculoSeleccionado.kilometros} km<br>
            </div>
            <div>
                <i class="fas fa-map-marker-alt icon" style="color: #8e8e8e;"></i>
                Ubicación:
                Maldonado<br>
            </div>
            <div>
                <i class="fas fa-car icon" style="color: #8e8e8e;"></i>
                ${vehiculoSeleccionado.puertas} Puertas<br>
            </div>
            <div>
                <i class="fas fa-calendar-alt icon" style="color: #8e8e8e;"></i> Año:
                ${vehiculoSeleccionado.anio}<br>
            </div>
            <div>
                <i class="fas fa-gas-pump icon" style="color: #8e8e8e;"></i>
                Combustible:
                ${vehiculoSeleccionado.combustible}<br>
            </div>
            <div>
                <i class="fas fa-cogs icon" style="color: #8e8e8e;"></i> Transmisión:
                ${vehiculoSeleccionado.traccion}<br>
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
                trasera: ${vehiculoSeleccionado.funciones.camara ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-sun icon" style="color: #8e8e8e;"></i> Techo solar:
                ${vehiculoSeleccionado.funciones.techoSola ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-snowflake icon" style="color: #8e8e8e;"></i> Suspensión
                Deportiva:
                ${vehiculoSeleccionado.funciones.suspensiones ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-chair icon" style="color: #8e8e8e;"></i> Asientos
                calefactables:
                ${vehiculoSeleccionado.funciones.asientosCalefactables ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-car-alt icon" style="color: #8e8e8e;"></i> Dirección
                Hidráulica:
                ${vehiculoSeleccionado.funciones.direccionHidraulica ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-map icon" style="color: #8e8e8e;"></i> Sistema de
                navegación: ${vehiculoSeleccionado.funciones.navegacion ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fab fa-bluetooth icon" style="color: #8e8e8e;"></i> Bluetooth:
                ${vehiculoSeleccionado.funciones.bluetooth ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-key icon" style="color: #8e8e8e;"></i> Inicio
                remoto:${vehiculoSeleccionado.funciones.inicioRemoto ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-bell icon" style="color: #8e8e8e;"></i>
                Alarma:${vehiculoSeleccionado.funciones.alarma ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-shield-alt icon" style="color: #8e8e8e;"></i> ABS:
                ${vehiculoSeleccionado.funciones.abs ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-airbag icon" style="color: #8e8e8e;"></i> Airbags:
                ${vehiculoSeleccionado.funciones.airbags ? "Sí" : "No"}<br>
            </div>
            <div>
                <i class="fas fa-snowplow icon" style="color: #8e8e8e;"></i> Control de
                tracción:
                ${vehiculoSeleccionado.funciones ? "Sí" : "No"}<br>
            </div>



        </div>


    </div>

</div>


        `;

            // ... Tu código para llenar el contenido del bloque con los datos del vehículo seleccionado

            contenedorPrincipal.appendChild(bloqueVendido);
        }
    });
}

// Función para verificar si un vehículo ya existe en el contenedor
function existeVehiculoEnContenedor(contenedor, vehiculoSeleccionado) {
    const contenedoresHijos = contenedor.querySelectorAll('.bloquevendido');

    for (const contenedorHijo of contenedoresHijos) {
        // Compara por ejemplo el ID del vehículo, asegúrate de ajustarlo según la estructura de tus datos
        if (contenedorHijo.id === `vehiculo-${vehiculoSeleccionado.id}`) {
            return true;
        }
    }
    return false;
}

// Llama a la función para cargar los vehículos seleccionados automáticamente
cargarVehiculoSeleccionado();












