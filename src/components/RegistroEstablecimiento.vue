<template>
    <div class="col-xs-12 np backgroundEstablecimiento">
        <div class="login-wrapEstablecimiento">
            <div class="login-html">
                <div class="login-form">
                        <form @submit = "formRegistroEstablecimiento" enctype="multipart/form-data"   autocomplete="off">
                            <div class="group">
                                <label for="fotoPerfil" class="label">Subir Fotos</label>
                                <input style="display:none" id="fotoPerfil" type="file" class="input" @change="onFotosFile" ref="subirFotos">
                                <button @click="$refs.subirFotos.click()">
                                    Subir Imagenes
                                </button>
                            </div>
                            <div class="group">
                                <label for="registroNombreEstablecimiento" class="label">Nombre de Establecimiento</label>
                                <input id="registroNombreEstablecimiento" v-model="nombreEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroTelefonoEstablecimiento" class="label">Teléfono</label>
                                <input id="registroTelefonoEstablecimiento" v-model="telefonoEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroDireccionEstablecimiento" class="label">Dirección</label>
                                <input id="registroDireccionEstablecimiento" v-model="direccionEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroDireccionEstablecimiento" class="label">Horario de Atencion</label>
                                <input id="registroHorarioEstablecimiento" v-model="horarioEstablecimiento" type="text" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroDireccionEstablecimiento" class="label">Correo de Contacto</label>
                                <input id="registroCorreoEstablecimiento" v-model="correoEstablecimiento" type="email" class="input" >
                            </div>
                            <div class="group">
                                <label for="registroDireccionEstablecimiento" class="label">Descripción del Establecimiento</label>
                                <textarea @change="getdescripcionEstablecimiento" id="registroDescripcionEstablecimiento" cols="30" rows="5" class="input"></textarea>
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

</template>
<script>
export default {
    name:'RegistroEstablecimiento',
    data(){
        return{
            fotosFile : null,
            nombreEstablecimiento: '',
            telefonoEstablecimiento: '',
            direccionEstablecimiento: '',
            horarioEstablecimiento: '',
            correoEstablecimiento: '',
            descripcionEstablecimiento: null,
            errors:[],
        }
    },
    methods:{
        onFotosFile(event){
            this.fotosFile = event.target.files[0];
             
            //console.log(this.fotosFile);
        },
        getdescripcionEstablecimiento(event){
            this.descripcionEstablecimiento = event.target.value
            //console.log(this.descripcionEstablecimiento);
        },
        formRegistroEstablecimiento(e){
            e.preventDefault();
            var establecimiento = {
                "fotos" : this.fotosFile.name,
                "name" : this.nombreEstablecimiento,
                "telefono" : this.telefonoEstablecimiento,
                "direccion" : this.direccionEstablecimiento,
                "horario" : this.horarioEstablecimiento,
                "correo" : this.correoEstablecimiento,
                "descripcion" : this.descripcionEstablecimiento}
            ;
            console.log(establecimiento);
        },
        /*convert64Base(foto){
            var fotoConvert = foto;
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
            this.fotosFile = fileLoadedEvent.target.result; // <--- data: base64
            }
        }*/
    }
}
</script>
