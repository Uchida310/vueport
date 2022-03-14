<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>


  import Header from '@/global/Header.vue'
  import Footer from '@/global/Footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Header,
    Footer
  }
};
</script>
