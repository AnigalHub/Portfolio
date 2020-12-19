<template>
    <div id="Skils">
      <b-container>
      <h2>Ключевые навыки</h2>
        <b-row>
          <b-col>
            <b-row>
              <b-col cols="3">
                <img src="../static/html.png" class="img_3">
                <img src="../static/css.png" class="img_3">
                <img src="../static/bootstrap.png" class="img_3">
              </b-col>
              <b-col class="text">
                Уверенные знания HTML5,CSS,BOOTSTRAP
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3">
                <img src="../static/vue.png">
              </b-col>
              <b-col class="text">
                Опыт работы с фреймворком VUE.JS
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3">
                <img src="../static/javascript.png">
              </b-col>
              <b-col class="text">
                Базовые знания JAVASCRIPT
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <b-row>
              <b-col cols="3">
                <img src="../static/sass.png">
              </b-col>
              <b-col class="text">
               Работа с препроцессором SASS/SCSS
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3">
                <img src="../static/nuxt.png">
              </b-col>
              <b-col class="text">
               Умение работать с фреймворком NUXT.JS
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3">
                <img src="../static/flexbox.png">
              </b-col>
              <b-col class="text">
                Практический опыт адаптивной кроссбраузерной верски (в том числе flexbox)
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
    export default {
        name: "skills"
    }
</script>

<style scoped>

  .row{
    margin-top: 2% !important;
  }
  .img_3{
    width: 33%;
    height: 90px;
    float: left;
    padding: 1.5%;
  }
  .col-3:nth-child(1){
    padding: 0 !important;
  }
  img{
    width: 65%;
    height: 90px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .text{
    font-size: 1.3rem !important;
    font-family: 'Piazzolla', serif;
    display: flex;
    align-items: center;
  }
  .col{
    padding: 0 !important;
  }
</style>
