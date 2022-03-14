<template>
  <div>
    <v-app>
     
      <v-app-bar
        app
        dark
      >
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link class="link-menu" to="/"><span>Home</span> </router-link>
        <router-link class="link-menu" to="/portfolios"><span>Portfolio</span> </router-link>
        <router-link class="link-menu" to="/"><span>History</span> </router-link>
        <router-link class="link-menu" to="/"><span>Contact</span> </router-link>
      </v-app-bar>
    
    </v-app>
  </div>
</template>

<script>
export default {};
</script>


<style>

.v-application--wrap {
   min-height: 0 !important;  /*ヘッダーの最小サイズ指定を取り消し */
}
.link-menu {
    text-decoration: none;
    margin-right: 1%;
}
span{
  color: azure;
}

</style>