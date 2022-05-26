<template>
  <div id="Works">
    <b-container>
      <h1>Портфолио</h1>
      <div class="flex-container">
        <div v-for="(work,index) in Works" :key="index">
          <img :src="work.src" :alt="work.alt" @click="showModal(work)"/>
          <div class="work">
            <div class="name_works">
              <p class="name">{{work.name_company}}</p>
              <p class="text_works">{{work.technology}}</p>
            </div>
          </div>
        </div>
      </div>
      <b-modal ref="modalWork" id="img" size="xl" :title="SelectedWorks.name_company" centered hide-footer>
        <img :src="SelectedWorks.main_src" :alt="SelectedWorks.alt"/>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
    export default {
      name: "works",
        data(){
          return{
            SelectedWorks:{
              src:'',
              alt:'',
            },
            Works:[
              {
                main_src:'./prom.jpg',
                src:'./home_prom.jpg',
                alt:'Промэлектронсервис',
                name_company:'Сайт «Промэлектронсервис»',
                technology:'HTML, CSS, Bootstrap, PHP.',
              },
              {
                main_src:'./gts.jpg',
                src:'./home_gts.png',
                alt:'Гостехносервис',
                name_company:'Сайт «Гостехносервис»',
                technology:'Vue.js, BootstrapVue, Sass.',
              },
              {
                main_src:'./priamyeruki.jpg',
                src:'./home_priamyeruki.jpg',
                alt:'Прямые_руки',
                name_company:'Сайт «Аваконт»',
                technology:'Vue.js, Sass, Express.js.',
              },
              {
                main_src:'./avacont.jpg',
                src:'./home_avacont.jpg',
                alt:'Аваконт',
                name_company:'Сайт «Аваконт»',
                technology:'Vue.js, JavaScript, HTML, Sass, Express.js.',
              },
              {
                main_src:'./valencia.png',
                src:'./home_valencia.png',
                alt:'Валенсия',
                name_company:'Сайт «Валенсия»',
                technology:'Nuxt.js, BootstrapVue, HTML, Sass.',
              },
              {
                main_src:'./pixelperfect.png',
                src:'/home_pixelperfect.png',
                alt:'pixelperfect',
                name_company:'Сайт по Макету',
                technology:'Vue.js, BootstrapVue, HTML, Sass.',
              },
              {
                main_src:'./main_api.png',
                src:'/api.png',
                alt:'api',
                name_company:'Проект “Аптечка”',
                technology:'Node.js, Express.js, Vue.js, BootstrapVue, PostgreSQL.',
              },
              {
                main_src:'./main_wishlist.jpg',
                src:'/wishlist.png',
                alt:'wishlist',
                name_company:'Проект “Список Желаний”',
                technology:'Node.js, Express.js, Vue.js, BootstrapVue, PostgreSQL.',
              },
              {
                main_src:'./main_training.jpg',
                src:'./training.png',
                alt:'Математический тренажёр',
                name_company:'Игра "Математический тренажёр"',
                technology:'JavaScript, HTML, CSS, Webpack.',
              },
              {
                main_src:'./main_snake.jpg',
                src:'./snake.png',
                alt:'Игра "Змейка"',
                name_company:'Игра "Змейка"',
                technology:'JavaScript, Canvas, Webpack.',
              },
              {
                main_src:'./main_svgGame.jpg',
                src:'./home_svgGame.png',
                alt:'alphabet',
                name_company:'Игра "Изучение Алфавита"',
                technology:'Vue.js, JavaScript, Drag and Drop, Sass. ',
              },
              {
                main_src:'./main.jpg',
                src:'/parser.jpg',
                alt:'parser',
                name_company:'Парсинг сайта ',
                technology:'Node.js',
              },
              {
                main_src:'./main_TestTask.png',
                src:'/TestTask.png',
                alt:'TestTask',
                name_company:'Страница продажи товаров',
                technology:'Nuxt.js, Vuex, Sass.',
              },
              {
                main_src:'./main_market.png',
                src:'/market.png',
                alt:'market',
                name_company:'Каталог с корзиной и сортировкой',
                technology:'Nuxt.js, Vuex, Sass.',
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
                technology:'Vue.js (Vuex, VueRouter, BootstrapVue).',
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
  @media (min-width: 992px){
    .modal-lg, .modal-xl { /*ширина модального окна на разных экранах*/
      max-width: 750px !important;
    }
  }
</style>
<style lang="scss" scoped>
.text_works{
  color: white;
}
</style>
