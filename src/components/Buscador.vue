<template>
    <section class="primeraSection">
        <div class="col-12 np backgroundNav">
            <div class="container">
                <div class="col-12 np buscadorInicio">
                    <h1 class="tituloSection1 text-center">
                        Encuentra todo cerca a ti
                    </h1>
                    <h5 class="tituloSection2 text-center">
                        Los mejores establecimientos en un solo lugar
                    </h5>
                </div>
                <div class="col-12 np formPosition">
                    <form class="busquedaForm" method="POST" action="index.html">
                        <div>
                            <div class="form-group">
                                <input class="form-control" type="text" autocomplete="off" placeholder="Palabra clave">
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" autocomplete="off"
                                    placeholder="Ingrese su zona">
                            </div>
                            <div class="form-group">
                                <select name="categoria" id="categoriaBusqueda" class="form-control option-style"
                                    tabindex="-98">
                                    <option class="color-selected" value="0" selected disabled>Todas las categorías
                                    </option>
                                    <option class="color-selected" value="prueba 1"> Prueba 1</option>
                                </select>
                            </div>
                            <div class="form-group form-control">
                                <button type="submit" id="busquedaForm" class="btn-busquedaForm">
                                    BUSCAR LOCALES
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name :'Buscador',

}
</script>


