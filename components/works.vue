<template>
  <div id="Works">
    <b-container>
      <h2>Мои работы</h2>
      <b-tabs fill>
        <b-tab v-for="(works,index) in AllWorks" :key="index" :title="works.name" >
            <div class="flex-container">
              <div v-for="(work,index) in works.Works" :key="index">
                <img :src="work.src" :alt="work.alt" @click="showModal(work)"/>
                <h4>{{work.name_company}}</h4>
                <b-row>
                  <b-col>
                    <p class="text_works"><b>Технологии:</b><br>{{work.tecnology}}</p>
                  </b-col>
                  <b-col cols="2">
                    <a :href="work.url" target="_blank"> <component :is="svg"></component></a>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-tab>
      </b-tabs>
      <b-modal ref="modalWork" id="img" size="xl" :title="SelectedWorks.name_company" centered>
        <img :src="SelectedWorks.main_src" :alt="SelectedWorks.alt"/>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
   import Reference_svg from "~/components/svg_works/reference_github_svg";
    export default {
      name: "works",
      components: {Reference_svg},
        data(){
          return{
            svg:Reference_svg,
            SelectedWorks:{
              src:'',
              alt:'',
            },
            AllWorks:[
              {
                name:'Сайты',
                Works:[
                  {
                    main_src:'./prom.jpg',
                    src:'./home_prom.jpg',
                    alt:'Промэлектронсервис',
                    name_company:'Сайт компании «Промэлектронсервис»',
                    tecnology:'HTML, CSS, Bootstrap, PHP.',
                    url:'https://github.com/AnigalHub/Promelectronservice'
                  },
                  {
                    main_src:'./gts.jpg',
                    src:'./home_gts.png',
                    alt:'Гостехносервис',
                    name_company:'Сайт компании «Гостехносервис»',
                    tecnology:'Vue.js, BootstrapVue, Sass.',
                    url:"https://github.com/AnigalHub/Gts"
                  },
                  {
                    main_src:'./priamyeruki.jpg',
                    src:'./home_priamyeruki.jpg',
                    alt:'Прямые_руки',
                    name_company:'Сайт компании «Аваконт»',
                    tecnology:'Vue.js (BootstrapVue, VueRouter), Sass, Express.js.',
                    url:'https://github.com/AnigalHub/Priamyeruki'
                  },
                  {
                    main_src:'./avacont.jpg',
                    src:'./home_avacont.jpg',
                    alt:'Аваконт',
                    name_company:'Сайт компании «Аваконт»',
                    tecnology:'Vue.js, JavaScript, HTML, Sass, Express.js.',
                    url:'https://github.com/AnigalHub/Avacont'
                  },
                  {
                    main_src:'./valencia.png',
                    src:'./home_valencia.png',
                    alt:'Валенсия',
                    name_company:'Сайт компании «Валенсия»',
                    tecnology:'Nuxt.js, BootstrapVue, HTML, Sass.',
                    url: 'https://github.com/AnigalHub/Valencia'
                  },
                  {
                    main_src:'./pixelperfect.png',
                    src:'/home_pixelperfect.png',
                    alt:'pixelperfect',
                    name_company:'Сайт по Макету',
                    tecnology:'Vue.js, BootstrapVue, HTML, Sass.',
                    url:'https://github.com/AnigalHub/PixelPerfect'
                  }
                ],
              },
              {
                name:'API',
                Works:[
                  {
                    main_src:'./main_api.png',
                    src:'/api.png',
                    alt:'api',
                    name_company:'Проект “Аптечка”',
                    tecnology:'Node.js, Express.js, Vue.js, BootstrapVue, PostgreSQL.',
                    url:'https://github.com/AnigalHub/Pills_api'
                  },
                  {
                    main_src:'./main_wishlist.jpg',
                    src:'/wishlist.png',
                    alt:'wishlist',
                    name_company:'Проект “Список Желаний”',
                    tecnology:'Node.js, Express.js, Vue.js, BootstrapVue, PostgreSQL.',
                    url:'https://github.com/AnigalHub/WishList'
                  }
                ],
              },
              {
                name:'Игры',
                Works:[
                  {
                    main_src:'./main_training.jpg',
                    src:'./training.png',
                    alt:'Математический тренажёр',
                    name_company:'Игра "Математический тренажёр"',
                    tecnology:'JavaScript, HTML, CSS, Webpack.',
                    url:'https://github.com/AnigalHub/MathTest'
                  },
                  {
                    main_src:'./main_snake.jpg',
                    src:'./snake.png',
                    alt:'Игра "Змейка"',
                    name_company:'Игра "Змейка"',
                    tecnology:'JavaScript, Canvas, Webpack.',
                    url:'https://github.com/AnigalHub/Snake'
                  },
                  {
                    main_src:'./main_svgGame.jpg',
                    src:'./home_svgGame.png',
                    alt:'alphabet',
                    name_company:'Игра "Изучение Алфавита"',
                    tecnology:'Vue.js, JavaScript, Drag and Drop, Sass. ',
                    url:'https://github.com/AnigalHub/SvgGames'
                  },
                ],
              },
              {
                name:'Другое',
                Works:[
                  {
                    main_src:'./main.jpg',
                    src:'/parser.jpg',
                    alt:'parser',
                    name_company:'Парсинг сайта ',
                    tecnology:'Node.js',
                    url:'https://github.com/AnigalHub/Parser'
                  },
                  {
                    main_src:'./main_TestTask.png',
                    src:'/TestTask.png',
                    alt:'TestTask',
                    name_company:'Страничка с добавлением элементов',
                    tecnology:'Nuxt.js, Vuex, Sass.',
                    url:'https://github.com/AnigalHub/TestTask'
                  },
                  {
                    main_src:'./main_market.png',
                    src:'/market.png',
                    alt:'market',
                    name_company:'Каталог с корзиной и сортировкой',
                    tecnology:'Nuxt.js, Vuex, Sass.',
                    url:'https://github.com/AnigalHub/Market'
                  },
                  /*   {
                       main_src:'',
                       src:'/tgBot.png',
                       alt:'tgbot',
                       name_company:'Telegram-бот "Напоминалка"',
                       tecnology:'TypeScript, PostgreSQL. ',
                        url:''
                     },
                     */
                  {
                    main_src:'./main_TestBis.jpg',
                    src:'/TestBis.png',
                    alt:'TestBis',
                    name_company:'Прототип банковского приложения',
                    tecnology:'Vue.js (Vuex, VueRouter, BootstrapVue).',
                    url:'https://github.com/AnigalHub/TestBis'
                  },
                ]
              },
            ],
          }
        },
      methods:{
          showModal(work){
            this.SelectedWorks = work;
            this.$refs['modalWork'].show()
          }
      }
    }
</script>
<style>

  /*стили которые переписаны с бутстрапа (переносить отсюда нельзя!!!!!)*/
  .modal-dialog img{ /*картинка в модальном окне*/
    width: 100% !important;
    box-shadow: none !important;
  }
  .close { /*"крестик" (размер) - кнопка закрытия модального окна*/
    font-size: 2rem !important;
    padding: 1rem .5rem !important;
  }
  .modal-header{ /*заголовок модального окна*/
    padding: 0.5rem 1.5rem !important;
    font-family:'EB Garamond', serif;
  }
  .modal-title{ /*фразы в заголовке модального меню*/
    font-weight: 800;
  }
  .modal-body { /*тело модального окна*/
    padding:0 !important;
  }
  .modal-footer { /*footer-модального окна*/
    display: none !important;
  }
  @media (min-width: 992px){
    .modal-lg, .modal-xl { /*ширина модального окна на разных экранах*/
      max-width: 750px !important;
    }
  }
</style>
<style lang="scss" scoped>

</style>
