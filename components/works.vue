<template>
    <div id="Works">
      <b-container>
        <h2>Мои работы</h2>
        <div class="flex-container">
         <div v-for="(work,index) in WorksRow" :key="index">
           <b-row>
             <b-col cols="6">
               <img :src="work.src" :alt="work.alt"/>
             </b-col>
             <b-col>
               cc
             </b-col>
           </b-row>

         </div>
        </div>
      </b-container>
    </div>
</template>

<script>
    export default {
        name: "works",
        data(){
          return{
            WorksRow:[
              {
                src:'./home_prom.jpg',
                alt:'Промэлектронсервис',
              },
              {
                src:'./home_prom2.png',
                alt:'Промэлектронсервис_2',
              },
              {
                src:'./home_gts.png',
                alt:'Гостехносервис',
              },
              {
                src:'./home_priamyeruki.jpg',
                alt:'Прямые_руки',
              },
              {
                src:'./home_avacont.jpg',
                alt:'Аваконт',
              }
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3%;
  }
  .flex-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 5px 5px 5px rgb(24, 31, 49);
    text-align: center;
  }
  .flex-container > div:hover{
    box-shadow: 8px 10px 10px rgb(24, 31, 49);
  }
  .col-6{
    padding: 0 !important;
  }
  .row{
    margin: 0 !important;
  }

</style>
