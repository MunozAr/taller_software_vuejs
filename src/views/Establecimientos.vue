<template>
  <div class="establecimientos">
    <Header />  
    <BannerEstablecimiento />
    <Footer />
  </div>
</template>

<script>
/*eslint-disable */
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BannerEstablecimiento from "@/components/BannerEstablecimiento.vue";
export default {
  name: "establecimientos",
  components: {
    Header,
    BannerEstablecimiento,
    Footer,

  }
};
</script>
