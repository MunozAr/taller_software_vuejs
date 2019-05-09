<template>
    <div class="col-xs-12 np backgroundEstablecimiento">
        <div class="login-wrapEstablecimiento">
            <div class="login-html">
                <div class="login-form">
                        <form  autocomplete="off">
                            <div class="group">
                                <label for="fotoPerfil" class="label">Subir Fotos</label>
                                <input id="fotoPerfil" type="file" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroNombreEstablecimiento" class="label">Nombre de Establecimiento</label>
                                <input id="registroNombreEstablecimiento" name="nombreEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroTelefonoEstablecimiento" class="label">Teléfono</label>
                                <input id="registroTelefonoEstablecimiento" name="telefonoEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroDireccionEstablecimiento" class="label">Dirección</label>
                                <input id="registroDireccionEstablecimiento" name="direcciónEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroDireccionEstablecimiento" class="label">Horario de Atencion</label>
                                <input id="registroHorarioEstablecimiento" name="horarioEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroDireccionEstablecimiento" class="label">Correo de Contacto</label>
                                <input id="registroCorreoEstablecimiento" name="correoEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroDireccionEstablecimiento" class="label">Descripción del Establecimiento</label>
                                <textarea name="descripcionEstablecimiento" id="registroDescripcionEstablecimiento" cols="30" rows="5" class="input"></textarea>
                            </div>
                            <div class="group">
                                <button type="submit" class="button">Registrar</button>
                            </div>
                        </form>
                        <div class="hr"></div>
                        
                </div>
            </div>
        </div>
        </div>
</div>
    </div>
</template>
<script>
export default {
    name:'RegistroEstablecimiento'
}
</script>
