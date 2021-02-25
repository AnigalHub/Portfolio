<template>
    <div id="Works">
      <b-container>
        <h2>Мои работы</h2>
        <div class="flex-container">
         <div v-for="(work,index) in WorksRow" :key="index">
           <b-row>
             <b-col cols="3">
               <img :src="work.src" :alt="work.alt"/>
             </b-col>
             <b-col>
              <h4>{{work.name_company}}</h4>
               <p class="text_works">{{work.descr_company}}</p>
               <p class="text_works"><u><b>Использованные технологии:</b></u><br>{{work.tecnology}}</p>
               <p class="text_works"><u><b>Адрес сайта:</b></u><a :href="work.url" target="_blank">{{work.website}}</a></p>
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
                name_company:'Сайт для компании «Промэлектронсервис»',
                descr_company:'Компания занимается сертифационными испытаниями и поставкой электронных компонентов.',
                tecnology:'Адаптивная вёрстка на Bootstrap 4, HTML5, CSS3, форма обратной связи на PHP.',
                url:'http://promelektronservis.ru/',
                website:'promelektronservis.ru',
              },
              {
                src:'./home_prom2.png',
                alt:'Промэлектронсервис_2',
                name_company:'Сайт для компании «Промэлектронсервис»',
                descr_company:'Компания занимается сертифационными испытаниями и поставкой электронных компонентов.',
                tecnology:'Второй релиз сайта - переписанный на Vue.js (с использованием Vue router)',
                url:'',
                website:'(сайт не был запущен)',
              },
              {
                src:'./home_gts.png',
                alt:'Гостехносервис',
                name_company:'Сайт для компании «Гостехносервис»',
                descr_company:'Компания поставляет IT-оборудование, производит аксессуары и вычислительных комплексы.',
                tecnology:'Одностраничный сайт на Vue.js (Sass, BootstrapVue) - с простой анимацией для svg-элементов ',
                url:'https://gtekhno.ru/',
                website:'gtekhno.ru',
              },
              {
                src:'./home_priamyeruki.jpg',
                alt:'Прямые_руки',
                name_company:'Сайт для компании «Аваконт»',
                descr_company:'Компания оказывает услуги по изготовлению разнообразного декора, рекламных вывесок,\n' +
                  'сувенирной продукции, реставрация, брендирование.',
                tecnology:'FIGMA (дизайн-макет сайта), HTML5, CSS3, Vue.js (Sass, BootstrapVue, Vue router), обратная связь на Javascript',
                url:'http://pryamye-ryki.ru/',
                website:'pryamye-ryki.ru',
              },
              {
                src:'./home_avacont.jpg',
                alt:'Аваконт',
                name_company:'Сайт для компании «Аваконт»',
                descr_company:'Компания занимается изготовлением накладок из дерева под розетки,\n' +
                  ' выключатели, радиаторы, светильники и карнизы разных производителей.',
                tecnology:'Создание макета сайта с помощью FIGMA. Разработка лендинга на Vue.js, HTML5, SASS, форма обратной связи и подсчет стоимости товара на JavaScript',
                url:'http://avacont.ru/',
                website:'avacont.ru',
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
    box-shadow: 7px 4px 11px -1px rgb(24, 31, 49);
    text-align: center;
    width: 100%;
    margin: 0 1.2% 2.5% 1.2% !important;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .flex-container > div:hover{
    box-shadow: 7px 4px 16px -1px rgb(24, 31, 49);
    img{
      filter: contrast(110%);
    }
  }
  .col-3{
    padding: 0 !important;
  }
  .row{
    margin: 0 !important;
  }
  .col{
    padding: 15px !important;
  }
  p{
    margin-bottom: 0.5rem !important;
  }
</style>
