
<template>
    <header id="changeHeader" class="header-color col-12 np">
        <div class="container"> 
            <div class="row no-gutters">
                <div class="col-6 col-md-6 col-lg-6 np">
                    <div class="row">
                        <div class="col-md-6 col-lg-4" style="padding-right:0px;">
                            <span class="header-logo">
                                <a href="/"><svg width="40px" height="50px" viewBox="0 0 40 50" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs></defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="logo" transform="translate(-20.000000, -15.000000)" stroke="#FF1D47"
                                                stroke-width="3">
                                                <g id="Marker" transform="translate(22.000000, 17.000000)">
                                                    <path
                                                        d="M18,45.2332275 C30,33.8305966 36,24.7932582 36,18.1212121 C36,8.11314302 27.9411255,0 18,0 C8.0588745,0 0,8.11314302 0,18.1212121 C0,24.7932582 6,33.8305966 18,45.2332275 Z"
                                                        id="Oval"></path>
                                                    <ellipse id="Oval-2" cx="18" cy="16.7272727" rx="5.53846154"
                                                        ry="5.57575758"></ellipse>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></a>
                            </span>
                            <span id="LogoChange" class="header-title">
                                D'TodoAqui
                            </span>
                        </div>
                        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-8 ">
                            <nav class="nav">
                                <ul class="ul-spacei">
                                    <li class="nav-item">
                                        <a href="/">Inicio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/establecimientos">Establecimientos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="">Noticias</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-6 col-lg-6 ">
                    <div class="d-none d-sm-none d-md-none d-lg-block  col-lg-12 np">
                        <nav class="nav">
                            <ul class="ul-spaced">
                                <li>
                                    <a class="btnFormEstablecimientos" href="#">
                                        <i class="fa fa-plus"></i> Agregar Establecimiento
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Registrarme</a>
                                </li>
                                <li>
                                    <a href="/inicio_sesion">Inicio de Sesión</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none col-md-12 np">
                        <button onclick="SandwichEffect()" class="bte2" id="btn2">
                            <span id="lin1" class="spn12"></span>
                            <span id="lin2" class="spn22"></span>
                            <span id="lin3" class="spn32"></span>
                            <span id="lin4" class="spn42"></span>
                            <span id="lin6" class="spn62"></span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <div id="subheader" class="d-block d-sm-block d-md-block d-lg-none d-xl-none col-md-12">
            <ul class="subnav-mobile">
                <li>
                    <a class="btnFormEstablecimientos" href="">
                        <i class="fa fa-plus"></i> Agregar Establecimiento
                    </a>
                </li>
                <li>
                    <a href="registro.html">Registrarme</a>
                </li>
                <li>
                    <a href="/inicio_sesion">Inicio de Sesión</a>
                </li>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/establecimientos">ss</a>
                </li>
                <li>
                    <a href="">Noticias</a>
                </li>

            </ul>
        </div>
    </header>

</template>
<script>
/*eslint-disable */




export default {
  name: 'Header',
   
};
</script>
<script>
        
        
        

</script>


