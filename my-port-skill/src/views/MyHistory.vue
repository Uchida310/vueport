
<template>
  <div>
    <v-app>
      <v-container fill-height class="main-content">
        <v-card class="v-content-style" color="light-green" shaped elevation="10">
          <v-card-title>高校卒業後、リサイクルショップでアルバイトを始める。</v-card-title>
          <v-card-subtitle>2014</v-card-subtitle>
          <v-card-text>
            <div>
                特に将来の目標もなく、卒業と同時に一人暮らしを開始。21まで適当に生きる。
            </div>
          </v-card-text>
        </v-card>
        <v-card  class="v-content-style" color="light-green" shaped width="600" elevation="10">
          <v-card-title>人生の転機</v-card-title>
          <v-card-text>
            <div>
                従弟が16歳で他界し、自分の人生について考えるようになる<br>
                適当に生きることの無意味さを感じ、アルバイトを真面目にするようになる。
            </div>
          </v-card-text>
        </v-card>
        <v-card  class="v-content-style" color="light-green" shaped width="600" elevation="10">
          <v-card-title>家電担当へ</v-card-title>
          <v-card-text>
            <div>
                家電担当を本格的に任される。<br>
                買取価格や販売価格を自分で管理し、目標を達成できるよう考えて働くようになる。
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style>
.v-content-style{
  margin-bottom: 40px;
  height: 150px;
  width: 600px;
}

.main-content {
  flex-direction: column;
}
</style>
