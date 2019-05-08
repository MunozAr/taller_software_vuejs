<template>
      <div class="col-xs-12 np posSesion">
       <div class="container">
        <div class="row">
 <div class="login-wrap">
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Iniciar Sesión</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Registrarse</label>
                <div class="login-form">
                    <div class="sign-in-htm">
                        <form @submit="formLogin" autocomplete="off">
                            <div class="group">
                            <label for="correo" class="label">Correo electrónico</label>
                            <input id="correo" v-model="email"  type="email" class="input">
                        </div>
                        <div class="group">
                            <label for="contrasena" class="label">Contraseña</label>
                            <input id="contrasena" v-model="password" type="password" class="input" data-type="password">
                        </div>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked>
                            <label for="check"><span class="icon"></span> Mantener la sesión</label>
                        </div>
                        <div class="group">
                            <!--input type="submit" class="button" value="Iniciar"--->
                            <button type="submit" class="button" >Iniciar</button>
                        </div>
                        </form>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <a href="#forgot">¿Olvidate tu contraseña?</a>
                        </div>
                    </div>
                    <div class="sign-up-htm">
                        <form @submit="formRegistro" autocomplete="off">
                            <div class="group">
                                <label for="registroUsername" class="label">Username</label>
                                <input id="registroUsername" v-model="registrousername" type="text" class="input">
                            </div>
                            <div class="group">
                                <label for="registroCorreo" class="label">Correo electrónico</label>
                                <input id="registroCorreo" v-model="registroemail" type="email" class="input">
                            </div>
                            <div class="group">
                                <label for="registroContrasena" class="label">Contraseña</label>
                                <input id="registroContrasena" v-model="registropassword" type="password" class="input" data-type="password">
                            </div>
                            <div class="group">
                                <label for="registroRecontrasena" class="label">Repetir Contraseña</label>
                                <input id="registroRecontrasena"  v-model="registrorepassword" type="password" class="input" data-type="repassword">
                            </div>

                            <div class="group">
                                <button type="submit" class="button" >Registrar</button>
                            </div>
                        </form>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <label for="tab-1">¿Ya eres miembro?</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       </div>
  </div>
</template>

<script>

export default {
    name:'Login',
    mounted() {
        console.log('Component mounted.')
    },
    data() {
        return {
            email: '',
            password:'',
            registrousername: '',
            registroemail:'',
            registropassword: '',
            registrorepassword: '',
            notificacionLogin : false,
        };
    },
    methods: {
        formRegistro(e) {
            e.preventDefault();
            let currentObj = this;
            this.axios.post('http://35.198.26.118:4000/api/sign_up', {
                user:{
                username : this.registrousername,
                email: this.registroemail,
                password: this.registropassword,
                password_confirmation: this.registrorepassword
                }
            })
            .then(function (response) {
                    currentObj.output = response.data;
                    registrousername = '';
                    registroemail = '';
                    registropassword = '';
                    registrorepassword = '';
            })
            .catch(function (error) {
                currentObj.output = error;
            });
        },
        formLogin(e) {
            e.preventDefault();
            let currentObjl = this;
            this.axios.post('http://35.198.26.118:4000/api/sign_in', {
                email: this.email,
                password: this.password
            })
            .then(function (response) {
                    currentObjl.output = response.data;
                    var token = currentObjl.output.jwt;
                    console.log(token);
   
            })
            .catch(function (error) {
                currentObjl.output = error.response;
                console.log(currentObjl.output);
            });
        }

     }
}
</script>

