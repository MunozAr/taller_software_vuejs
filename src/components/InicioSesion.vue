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
                        <div class="group">
                            <label for="correo" class="label">Correo electrónico</label>
                            <input id="correo" type="text" class="input">
                        </div>
                        <div class="group">
                            <label for="contrasena" class="label">Contraseña</label>
                            <input id="contrasena" type="password" class="input" data-type="password">
                        </div>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked>
                            <label for="check"><span class="icon"></span> Mantener la sesión</label>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Iniciar">
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <a href="#forgot">¿Olvidate tu contraseña?</a>
                        </div>
                    </div>
                    <div class="sign-up-htm">
                        <div class="group">
                            <label for="registroNombre" class="label">Nombre Completo</label>
                            <input id="registroNombre" type="text" class="input">
                        </div>
                        <div class="group">
                            <label for="registroCorreo" class="label">Correo electrónico</label>
                            <input id="registroCorreo" type="text" class="input">
                        </div>
                        <div class="group">
                            <label for="registroContrasena" class="label">Contraseña</label>
                            <input id="registroContrasena" type="password" class="input" data-type="password">
                        </div>
                        <div class="group">
                            <label for="registroRecontrasena" class="label">Repetir Contraseña</label>
                            <input id="registroRecontrasena" type="password" class="input" data-type="password">
                        </div>

                        <div class="group">
                            <input type="submit" class="button" value="Registrar">
                        </div>
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
}
</script>

