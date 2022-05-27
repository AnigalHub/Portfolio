<template>
  <div id="Works">
    <b-container>
      <h2>Портфолио</h2>
      <div class="flex-container">
        <div v-for="(work,index) in Works" :key="index">
          <img :src="work.src" :alt="work.alt" @click="showModal(work)"/>
          <div class="work">
            <div class="name_works">

              <p class="text_works">{{work.technology}}</p>
            </div>
            <p class="name">{{work.name_company}}</p>
            <p class="text_about">{{work.about}}</p>
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
                name_company:'«Промэлектронсервис»',
                technology:'HTML & CSS & Bootstrap',
                about:'Сайт сертификационных испытаний и комплексной поставки электронных компонентов'
              },
              {
                main_src:'./gts.jpg',
                src:'./home_gts.png',
                alt:'Гостехносервис',
                name_company:'«Гостехносервис»',
                technology:'Vue',
                about:'Сайт производителя и поставщика ИТ‒оборудования для государственных и бизнес-структур'
              },
              {
                main_src:'./priamyeruki.jpg',
                src:'./home_priamyeruki.jpg',
                alt:'Прямые_руки',
                name_company:'«Аваконт»',
                technology:'Vue',
                about:'Сайт изготовления разнообразного декора, рекламных вывесок, сувенирной продукции, реставрации, брендирования'
              },
              {
                main_src:'./avacont.jpg',
                src:'./home_avacont.jpg',
                alt:'Аваконт',
                name_company:'«Аваконт»',
                technology:'Vue',
                about: 'Сайт изготовления накладок из дерева под розетки, выключатели, радиаторы, светильники и карнизы'
              },
              {
                main_src:'./valencia.png',
                src:'./home_valencia.png',
                alt:'Валенсия',
                name_company:'«Валенсия»',
                technology:'Nuxt',
                about:'Сайт частного охранного предприятия, обеспечивающего безопасность на всей территории во всех субъектах РФ.'
              },
              {
                main_src:'./pixelperfect.png',
                src:'/home_pixelperfect.png',
                alt:'pixelperfect',
                name_company:'Startup',
                technology:'Vue',
                about: 'Шаблон с попиксельной точностью, выполненный с помощью подхода Pixel Perfect'
              },
              // {
              //   main_src:'./main_api.png',
              //   src:'/api.png',
              //   alt:'api',
              //   name_company:'Проект “Аптечка”',
              //   technology:'Node.js, Express.js, Vue.js, BootstrapVue, PostgreSQL.',
              // },
              // {
              //   main_src:'./main_wishlist.jpg',
              //   src:'/wishlist.png',
              //   alt:'wishlist',
              //   name_company:'Проект “Список Желаний”',
              //   technology:'Node.js, Express.js, Vue.js, BootstrapVue, PostgreSQL.',
              // },
              {
                main_src:'./main_training.jpg',
                src:'./training.png',
                alt:'Математический тренажёр',
                name_company:'«Математический тренажёр»',
                technology:'JavaScript',
                about: 'Игра для малышей на сложение, вычитание, деление и умножение с таймером'
              },
              {
                main_src:'./main_snake.jpg',
                src:'./snake.png',
                alt:'Игра "Змейка"',
                name_company:'«Змейка»',
                technology:'JavaScript',
                about:'Классическая игра передвижения змейки за едой на игровом поле с помощью управления клавишами'
              },
              {
                main_src:'./main_svgGame.jpg',
                src:'./home_svgGame.png',
                alt:'alphabet',
                name_company:'"Алфавит"',
                technology:'Vue',
                about:'Игры на знание английского алфавита: изучение алфавита, собери пару и конструктор слов'
              },
              // {
              //   main_src:'./main.jpg',
              //   src:'/parser.jpg',
              //   alt:'parser',
              //   name_company:'Парсинг сайта ',
              //   technology:'Node.js',
              // },
              {
                main_src:'./main_TestTask.png',
                src:'/TestTask.png',
                alt:'TestTask',
                name_company:'Продажа товаров',
                technology:'Nuxt',
                about:'Целевая страница с формой на добавление товара в список и сортировкой товара в списке'
              },
              {
                main_src:'./main_market.png',
                src:'/market.png',
                alt:'market',
                name_company:'Каталог товаров',
                technology:'Nuxt',
                about:'Целевая страница с возможностью сортировки товаров, отправки заявки и удалении из корзины товара'
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
                name_company:'Банковское приложение',
                technology:'Vue',
                about:'Прототип банковского приложения с возможностью отображения таблиц, изменения и удаления данных из них'
              },
            ],
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>
