<template>
    <div id="Works">
      <b-container>
        <h2>Мои работы</h2>
        <div>
          <b-tabs fill>
            <b-tab title="Сайты" active>
              <div class="flex-container">
                <div v-for="(work,index) in WorksSites" :key="index">
                  <img :src="work.src" :alt="work.alt" @click="showModal(work)"/>
                  <h4>{{work.name_company}}</h4>
                  <p class="text_works"><b>Технологии:</b><br>{{work.tecnology}}</p>
                  <p class="text_works"><a :href="work.url" target="_blank"> {{work.website}}</a></p>
                </div>
              </div>
            </b-tab>
            <b-tab title="API">
              <div class="flex-container">
                <div v-for="(work,index) in WorksAPI" :key="index">
                  <img :src="work.src" :alt="work.alt" @click="showModal(work)"/>
                  <h4>{{work.name_company}}</h4>
                  <p class="text_works"><b>Технологии:</b><br>{{work.tecnology}}</p>
                  <p class="text_works"><a :href="work.url" target="_blank"> {{work.website}}</a></p>
                </div>
              </div>
            </b-tab>
            <b-tab title="Игры">
              <div class="flex-container">
                <div v-for="(work,index) in WorksGames" :key="index">
                  <img :src="work.src" :alt="work.alt" @click="showModal(work)"/>
                  <h4>{{work.name_company}}</h4>
                  <p class="text_works"><b>Технологии:</b><br>{{work.tecnology}}</p>
                  <p class="text_works"><a :href="work.url" target="_blank"> {{work.website}}</a></p>
                </div>
              </div>
            </b-tab>
            <b-tab title="Другое">
              <div class="flex-container">
                <div v-for="(work,index) in WorksOther" :key="index">
                  <img :src="work.src" :alt="work.alt" @click="showModal(work)"/>
                  <h4>{{work.name_company}}</h4>
                  <p class="text_works"><b>Технологии:</b><br>{{work.tecnology}}</p>
                  <p class="text_works"><a :href="work.url" target="_blank"> {{work.website}}</a></p>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
        <b-modal ref="my-modal" id="img" size="xl" :title="SelectedWorks.name_company" centered>
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
            WorksSites:[
              {
                main_src:'./prom.jpg',
                src:'./home_prom.jpg',
                alt:'Промэлектронсервис',
                name_company:'Сайт компании «Промэлектронсервис»',
                tecnology:'HTML, CSS, Bootstrap, PHP.',
              },
              {
                main_src:'./gts.jpg',
                src:'./home_gts.png',
                alt:'Гостехносервис',
                name_company:'Сайт компании «Гостехносервис»',
                tecnology:'Vue.js, BootstrapVue, Sass.',

              },
              {
                main_src:'./priamyeruki.jpg',
                src:'./home_priamyeruki.jpg',
                alt:'Прямые_руки',
                name_company:'Сайт компании «Аваконт»',
                tecnology:'Vue.js (BootstrapVue, VueRouter), Sass, Express.js.',
              },
              {
                main_src:'./avacont.jpg',
                src:'./home_avacont.jpg',
                alt:'Аваконт',
                name_company:'Сайт компании «Аваконт»',
                tecnology:'Vue.js, JavaScript, HTML, Sass, Express.js.',

              },
              {
                main_src:'./valencia.png',
                src:'./home_valencia.png',
                alt:'Валенсия',
                name_company:'Сайт компании «Валенсия»',
                tecnology:'Nuxt.js, BootstrapVue, HTML, Sass.',
              },
              {
                main_src:'./pixelperfect.png',
                src:'/home_pixelperfect.png',
                alt:'pixelperfect',
                name_company:'Сайт по Макету',
                tecnology:'Vue.js, BootstrapVue, HTML, Sass.',
              }
            ],
            WorksAPI:[
              {
                main_src:'./main_api.png',
                src:'/api.png',
                alt:'api',
                name_company:'Проект “Аптечка”',
                tecnology:'Node.js, Express.js, Vue.js, BootstrapVue.',
              }
            ],
            WorksGames:[
              {
                main_src:'./main_training.jpg',
                src:'./training.png',
                alt:'Математический тренажёр',
                name_company:'Игра "Математический тренажёр"',
                tecnology:'JavaScript, HTML, CSS, Webpack.',
              },
              {
                main_src:'./main_snake.jpg',
                src:'./snake.png',
                alt:'Игра "Змейка"',
                name_company:'Игра "Змейка"',
                tecnology:'JavaScript, Canvas, Webpack.',
              },
              {
                main_src:'./main_svgGame.jpg',
                src:'./home_svgGame.png',
                alt:'alphabet',
                name_company:'Игра "Изучение Алфавита"',
                tecnology:'Vue.js, JavaScript, Drag and Drop, Sass. ',
              },
            ],
            WorksOther:[
              {
                main_src:'./main.jpg',
                src:'/parser.jpg',
                alt:'parser',
                name_company:'Парсинг сайта ',
                tecnology:'Node.js',
              },
              {
                main_src:'./main_TestTask.png',
                src:'/TestTask.png',
                alt:'TestTask',
                name_company:'Страничка с добавлением элементов',
                tecnology:'Nuxt.js, Vuex, Sass.',
              },
              {
                main_src:'./main_market.png',
                src:'/market.png',
                alt:'market',
                name_company:'Каталог с корзиной и сортировкой',
                tecnology:'Nuxt.js, Vuex, Sass.',
              },
              {
                main_src:'',
                src:'',
                alt:'tgbot',
                name_company:'Telegram-бот "Напоминалка"',
                tecnology:'TypeScript, PostgreSQL. ',
              },
            ]
          }
        },
      methods:{
          showModal(work){
            this.SelectedWorks = work;
            this.$refs['my-modal'].show()
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
