<template>
  <div class="portfolio-body">
      <div class="main-container">
            <div class="content">
                <a href=""><h1>スマホアプリ紹介webサイト</h1></a>
                <a href=""><img src="../assets/lpport.png" alt=""></a>
                <h2>製作理由</h2>
                <p>
                    企業に提出できるwebサイトを作ろうと思ったのが一番の理由です。<br>
                    職業訓練校で製作したwebサイトは著作権に配慮しておらず、<br>
                    初めてコーディングしたサイトということもあってポートフォリオとしての提出は見送りました。<br>
                    どんなサイトを制作しようか迷っていた所アプリ広告のLPが目に入り、<br>
                    著作権に配慮しつつ自分の好きなアプリを紹介しようと決めて製作しました。
                </p>
                <h2>工夫したところ</h2>
                <p>
                    javascriptコーディングを工夫しました。<br>
                    ライブラリ使用は初めての経験だったので、プロパティの設定やDOM構成に躓きながらもなんとか実装にまでたどり着きました。<br>
                    画面固定のロジックは他サイトを参考にしつつ書いたオリジナルコードで、<br>
                    思い通りの動作をさせる為に試行錯誤した結果、コールバック関数のネスト構造に頼りました。
                </p>
                <h2>改善点</h2>
                <p>
                    1.デザインがシンプルなあまり殺風景な印象。画像を配置するなどしてデコレーションしたい。<br>
                    2.jsのロジックが煩雑なので。asyc/await等を使ってリファクタリングしていきたい……。<br>
                    3.調べながらのコーディングだったのでスピードが遅かった、会社に貢献できるスピードを目指す。<br>
                </p>
                <h2>利用した技術</h2>
                <p>
                   HTML&CSS<span class="span-margin"></span>/
                   JavaScript<span class="span-margin"></span>/
                   JQuery<span class="span-margin"></span>/
                   Git
                </p>
            </div>
            <div class="content">
                <a href=""><h1>webアプリケーション-ポドモーロタイマー</h1></a>
                <a href=""><img src="../assets/webport.png" alt=""></a>
                <h2>製作理由</h2>
                <p>
                    ユーザーファーストのwebサイトを作ろうと思ったのが一番の理由です。<br>
                    アプリ紹介サイトはユーザーのことをあまり意識せず製作したので、<br>
                    2作目では誰かに使ってもらえるようなサイトを作りたいと考え、思い浮かんだのがこのwebアプリケーションです。<br>
                    勉強時間の管理にポドモーロ法というインターバルと勉強時間をセット数として学習する方法があり、<br>
                    youtubeの動画を利用していたのですが、自分でセット数や時間を管理したいと思いこのアプリケーションを製作しました。<br>
                    現在もこのアプリを利用しながら学習しています。
                </p>
                <h2>工夫したところ</h2>
                <p>
                    やはり、こちらもjavascriptに力を入れています。<br>
                    時間管理やタイマーセットのロジックにも力を入れましたが、一番手こずったのはiframeの動的操作です。<br>
                    開発当初はjavascriptAPIを利用していたのですがサービスが停止していたらしく、気付くのに時間をかけてしまいました。<br>
                    最終的に利用したのはiframe APIで<br>
                    APIを利用しつつユーザーが入力したURLをしっかりセットできるようになるまで何度も試行しました。<br>
                    結果としては、コードは冗長ですが製作物には満足しています。
                </p>
                <h2>改善点</h2>
                <p>
                    1.リロードするとURLの入れ直しになるので、ユーザーの入力値をcoookieに保存して利用したい。<br>
                    2.jsのコードが冗長なのでリファクタリングして時間設定などをメソッド化したい。
                </p>
                <h2>利用した技術</h2>
                <p>
                   HTML&CSS<span class="span-margin"></span>/
                   JavaScript<span class="span-margin"></span>/
                   Sass<span class="span-margin"></span>/
                   Git
                </p>
            </div>
            <div class="content">
                <a href=""><h1>自己紹介ポートフォリオサイト</h1></a>
                <a href=""><img src="../assets/webport.png" alt=""></a>
                <h2>製作理由</h2>
                <p>
                    フロントエンドのフレームワークに対応できることをアピールしたくて製作しました。<br>
                    純粋にSPAサイトを作りたい欲求があったことも理由です。<br>
                    製作物をまとめてweb上に公開したいと思っており、どうせならVue.jsを使ってSPAサイトに！<br>
                    と半ば見切り発車で学習を開始しました。
                </p>
                <h2>苦労したところ</h2>
                <p>
                   Vueは学習コストが低いと聞いていたのですが、想定よりも難易度が高く学習段階で苦労しました。<br>
                   CDN版は確かに理解しやすい印象を受けましたが、SPAサイトに必須なCLI版はそんなことは無く……。<br>
                   2週間の学習では理解しきれないと判断し、最低限の学習を終えて当ポートフォリオの製作に移行しました。<br>
                   Vutifyやデータバイディングも使いこなしたいので、もっとVueの機能を活かした作品を作りたいです。<br>
                </p>
                <h2>改善点</h2>
                <p>
                    1.Vueを理解しているかと言われると言葉が詰まるので、継続して学習していく<br>
                </p>
                <h2>利用した技術</h2>
                <p>
                   HTML&CSS<span class="span-margin"></span>/
                   JavaScript<span class="span-margin"></span>/
                   Vue.js<span class="span-margin"></span>/
                   VueCLI<span class="span-margin"></span>/
                   VueRouter<span class="span-margin"></span>/
                   Vuetify<span class="span-margin"></span>/
                   Git
                </p>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@font-face {
    font-family: 'main-font';
    src: url('../assets/font/M_PLUS_1p/MPLUS1p-Medium.ttf');
}

.portfolio-body {
background-color: antiquewhite;
}

.main-container {
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    
    font-family: 'main-font';
    margin: 0 10%;
}
h1 {
  padding-top: 30px;
}

h2 {
  margin-top: 0px;
  margin-bottom: 20px;
}

p {
  text-align: left;
  padding-left: 10%;
}

img {
    max-width: 100%;
    margin-bottom: 30px;
}

a:link, a:visited, a:hover, a:active {
    color: darkblue;
    text-decoration: none;
  }

  .content {
      margin-bottom: 120px;
      padding-bottom: 20px;
      border-bottom: 2px darkblue solid;
  }

.content:last-of-type{
    margin-bottom: 0;
    border-bottom: none;
}
  .span-margin{
      margin-right: 5px;
  }
</style>