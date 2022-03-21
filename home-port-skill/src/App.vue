<template>
  <v-app>
    <Loading v-show="loading"></Loading>
    <div v-show="!loading">
      <Header/>
      <v-main>
        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
    </v-main>
    <Footer/>
    </div>
  </v-app>
</template>

<script>


  import Header from '@/global/Header.vue'
  import Footer from '@/global/Footer.vue'
  import Loading from '@/global/Loading.vue'
export default {
  name: 'App',

  data: () => ({
    loading: true
  }),
  mounted(){
    
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  beforeCreate(){
document.title="Mitusya.Uchida-Portfolio"
  },
  components: {
    Header,
    Footer,
    Loading
  }
};
</script>

<style lang="scss">
  .fade{
    &-enter{
      transform: translate(-100px, 0);
      opacity: 0;

      &-to{
        opacity: 1;
      }
      &-active{
        transition: all 1s 0s ease;
      }
    }
    &-leave{
      transform: translate(0, 0);
      opacity: 1;

      &-to{
        transform: translate(100px, 0);
        opacity: 0;
      }
      &-active{
        transition: all .5s 0s ease;
      }
    }
    
  }
</style>
