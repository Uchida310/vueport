<template>
  <div>
    <v-app>
      <v-main class="main-container">
        <v-container fulid>
          <v-card>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h4 my-1">
                  自己紹介 
                </v-list-item-title>
                <v-list-item-avatar
                  tile
                  min-height="200"
                >
                <v-img  contain height="350" src="../assets/profile.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="center">
                  <p>年齢: <span>27</span></p>
                  <p>
                    学歴:<span
                      >宮崎県立都城工業高等学校卒業/<br />
                      ライフビジネスクール/情報処理技術者養成科卒業</span
                    >
                  </p>
                  <p>
                    趣味/特技:
                    <span>スポーツ観戦/ゲーム制作/モダンIT情報収集/筋トレ</span>
                  </p>       
                  </div>   
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <h2 class="my-5">所持しているスキル</h2>
          <v-row justify="center" align="center" class="has-skill">
            <v-col cols="6" md="4" class="home-v-col">
              <v-text>HTML/CSS</v-text>
              <v-spacer  class="mb-1"></v-spacer>
              <div class="graph">
                <span class="bar" style="width: 50%; background: yellowgreen"
                  >50%</span
                >
              </div>
            </v-col>
            <v-col cols="6" md="4" class="home-v-col">
              <v-text>JavaScript</v-text>
              <v-spacer  class="mb-1"></v-spacer>
              <div class="graph">
                <span class="bar" style="width: 70%; background: red">70%</span>
              </div>
            </v-col>
            <v-col cols="6" md="4" class="home-v-col">
              <v-text>Vue.js</v-text>
              <v-spacer  class="mb-1"></v-spacer>
              <div class="graph">
                <span class="bar" style="width: 30%; background: green"
                  >30%</span
                >
              </div>
            </v-col>
            <v-col cols="6" md="4" class="home-v-col">
              <v-text>JAVA</v-text>
              <v-spacer  class="mb-1"></v-spacer>
              <div class="graph">
                <span class="bar" style="width: 40%; background: yellowgreen"
                  >40%</span
                >
              </div>
            </v-col>
            <v-col cols="6" md="4">
              <v-text>Linux</v-text>
              <v-spacer  class="mb-1"></v-spacer>
              <div class="graph">
                <span class="bar" style="width: 25%">25%</span>
              </div>
            </v-col>
            <v-col cols="6" md="4" class="home-v-col">
              <v-text>Git</v-text>
              <v-spacer  class="mb-1"></v-spacer>
              <div class="graph">
                <span class="bar" style="width: 30%; background: green">30%</span>
              </div>
            </v-col>
            <v-col cols="6" md="4">
              <v-text>AWS</v-text>
              <v-spacer  class="mb-1"></v-spacer>
              <div class="graph">
                <span class="bar" style="width: 25%">25%</span>
              </div>
            </v-col>
            <v-col cols="6" md="4">
              <v-text>Unity</v-text>
              <v-spacer  class="mb-1"></v-spacer>
              <div class="graph">
                <span class="bar" style="width: 40%; background: yellowgreen"
                  >40%</span
                >
              </div>
            </v-col>
          </v-row>
          <h2 class="my-5">所持資格</h2>
          <v-row justify="center" align-content="center">
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="justify-center"
                  >LinuCレベル1 Version 4.0</v-card-title
                >
                <v-divider></v-divider>
                <v-img contain max-height="250" src="../assets/linuc-1.png">
                </v-img>
                <v-divider my="5"></v-divider>
                <v-card-text
                  class="text-left"
                  style="padding-left: 1em; text-indent: -1em"
                >
                  <div>
                    ・仮想マシンとコンテナを含むLinuxサーバーの構築と運用・管理ができる
                  </div>
                  <div>・クラウドのセキュリティを理解し、安全に運用できる</div>
                  <div>・オープンソースの文化を理解し、業務に活用できる。</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card
                class="text-left"
                style="padding-left: 1em; text-indent: -1em"
              >
                <v-card-title class="justify-center"
                  >AWS Certified Cloud Practitioner</v-card-title
                >
                <v-divider></v-divider>
                <v-img contain max-height="250" src="../assets/AWS.png">
                </v-img>
                <v-divider my="5"></v-divider>
                <v-card-text>
                  <div>
                    ・IT サービスのベーシックな知識と、AWS
                    クラウドプラットフォームにおけるそれらのサービスの使用に関するベーシックな知識がある
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
</script>
<style>
@font-face {
  font-family: "main-font";
  src: url("../assets/font/M_PLUS_1p/MPLUS1p-Medium.ttf");
}

p {
  font-size: 16px;
  font-weight: bold;
}

.home-v-col p{
  text-align: center;
}
.center  p {
  text-align: center;
  margin-right: 10%;
}

.graph {
  position: relative; /* IE is dumb */
  width: 10vw;
  border: 2px solid black;
  margin: 0 auto;
}

.graph .bar {
  display: block;
  position: relative;
  background: #409890;
  text-align: center;
  color: black;
  height: 2.1em;
  line-height: 2em;
}

.graph .bar span {
  position: absolute;
}

</style>
