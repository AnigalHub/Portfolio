<template>
    <div id="Works">
      <b-container>
        <h2>Мои работы</h2>
        <div class="flex-container">
         <div v-for="(work,index) in WorksRow" :key="index">
           <img :src="work.src" :alt="work.alt" @click="showModal(work)"/>
           <h4>{{work.name_company}}</h4>
           <p class="text_works">{{work.descr_company}}</p>
           <p class="text_works"><b>Использованные технологии:</b><br>{{work.tecnology}}</p>
           <p class="text_works"><b>{{work.text}}</b><a :href="work.url" target="_blank"> {{work.website}}</a></p>
         </div>
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
            WorksRow:[
              {
                main_src:'./prom.jpg',
                src:'./home_prom.jpg',
                alt:'Промэлектронсервис',
                name_company:'Сайт для компании «Промэлектронсервис»',
                descr_company:'Компания занимается сертифационными испытаниями и поставкой электронных компонентов.',
                tecnology:'Адаптивная вёрстка на Bootstrap 4, HTML5, CSS3, форма обратной связи на PHP.',
                text:'Адрес сайта:',
                url:'http://promelektronservis.ru/',
                website:'promelektronservis.ru',
              },
              {
                main_src:'./prom2.jpg',
                src:'./home_prom2.png',
                alt:'Промэлектронсервис_2',
                name_company:'Сайт для компании «Промэлектронсервис»',
                descr_company:'Компания занимается сертифационными испытаниями и поставкой электронных компонентов.',
                tecnology:'Второй релиз сайта - переписанный на Vue.js (и Vue router). Не был использован',
                text:'Адрес сайта:',
                url:'http://promelektronservis.ru/',
                website:'(сайт не был запущен)',
              },
              {
                main_src:'./gts.jpg',
                src:'./home_gts.png',
                alt:'Гостехносервис',
                name_company:'Сайт для компании «Гостехносервис»',
                descr_company:'Компания поставляет IT-оборудование, производит аксессуары и вычислительных комплексы.',
                tecnology:'Одностраничный сайт на Vue.js, BootstrapVue, Sass с простой анимацией для SVG-элементов. ',
                text:'Адрес сайта:',
                url:'https://gtekhno.ru/',
                website:'gtekhno.ru',
              },
              {
                main_src:'./priamyeruki.jpg',
                src:'./home_priamyeruki.jpg',
                alt:'Прямые_руки',
                name_company:'Сайт для компании «Аваконт»',
                descr_company:'Компания оказывает услуги по изготовлению разнообразного декора, рекламных вывесок,\n' +
                  'сувенирной продукции, реставрация, брендирование.',
                tecnology:'Дизайн-макет сайта на Figma. Разработка на Vue.js (Sass, BootstrapVue, Vue router), форма обратной связи на Express.js.',
                text:'Адрес сайта:',
                url:'http://pryamye-ryki.ru/',
                website:'pryamye-ryki.ru',
              },
              {
                main_src:'./avacont.jpg',
                src:'./home_avacont.jpg',
                alt:'Аваконт',
                name_company:'Сайт для компании «Аваконт»',
                descr_company:'Компания занимается изготовлением накладок из дерева под розетки,\n' +
                  ' выключатели, радиаторы, светильники и карнизы разных производителей.',
                tecnology:'Создание макета сайта на Figma. Разработка лендинга на Vue.js, HTML5, SASS, форма обратной связи на Express.js, подсчет стоимости товара на JavaScript.',
                text:'Адрес сайта:',
                url:'http://avacont.ru/',
                website:'avacont.ru',
              },
              {
                main_src:'./valencia.png',
                src:'./home_valencia.png',
                alt:'Валенсия',
                name_company:'Сайт для компании «Валенсия»',
                descr_company:'Частное охранное предприятие, обеспечивающее  безопасность личности, предпринимательской деятельности, мероприятий, и всех, кто нуждается в охране на территории РФ.',
                tecnology:'Разработка сайта на Nuxt.js, адаптивная вёрстка сайта на BootstrapVue, HTML5, Sass.',
                text:'Адрес сайта:',
                url:'',
                website:'(отсутствует)',
              },
              {
                main_src:'./main_training.jpg',
                src:'./training.png',
                alt:'Математический тренажёр',
                name_company:'Математический тренажёр',
                descr_company:'Тренировочный тест по математике на сложение, вычитание, деление и умножение для младшей школы на время (без отрицательных чисел).',
                tecnology:'Разработка теста: логика на JavaScript, отображение с помощью обращения JavaScript к DOM-дереву, написанному на HTML5. Использование CSS3. Сборка теста на Webpack.',
              },
              {
                main_src:'./main_snake.jpg',
                src:'./snake.png',
                alt:'Игра "Змейка"',
                name_company:'Игра "Змейка"',
                descr_company:'На игровом поле ползает змейка, ее еда появляется в разных местах и служит источником очков. Больше съешь - выше балл и длиннее тело. Управление с помощью клавиш: W, A, S, D. ',
                tecnology:'Разработка игры: логика на JavaScript, отображение с помощью Canvas. Компиляция игры происходит с помощью инструмента Webpack.',
              },
              {
                main_src:'./pixelperfect.png',
                src:'/home_pixelperfect.png',
                alt:'pixelperfect',
                name_company:'Your favourite creative agency template - Startup (layout)',
                descr_company:'Верстка одностраничного адаптивного сайта по готовому PSD-макету в технике Pixel Perfect',
                tecnology:'Разработка сайта на Vue.js, с помощью BootstrapVue, HTML5, Sass.',
              },
              {
                main_src:'./main.jpg',
                src:'/parser.jpg',
                alt:'parser',
                name_company:'Парсинг сайта ',
                descr_company:'Сбор информации о ценах определенного препарата на сайте stolichki.ru',
                tecnology:'Разработка логики на Node.js с использованием библиотеки Axios. Вывод информации в консоль, прохождение по сайту с заданным интервалом повтора',
              },
              {
                main_src:'./main_api.png',
                src:'/api.png',
                alt:'api',
                name_company:'Проект “Аптечка”',
                descr_company:'Вывод всех товаров, поиск и удаление/добавление препарата в аптечку',
                tecnology:'Разработка API: серверной части на Node.js с помощью Express.js и библиотеки Axios, клиентская часть на Vue.js c использованием  BootstrapVue.\n',
              },
              {
                main_src:'./main_TestTask.png',
                src:'/TestTask.png',
                alt:'TestTask',
                name_company:'Тестовое задание от компании ida.lite - TestTask',
                descr_company:'Страница со списком товаров, и возможностью добавления/удаления товаров в списке',
                tecnology:'Разработка страницы со списком товаров на Nuxt.js, добавление/удаление товаров в списке - при помощи Vuex. Верстка страницы с использованием  Sass. Валидация формы.\n',
              },
              {
                main_src:'./main_market.png',
                src:'/market.png',
                alt:'market',
                name_company:'Тестовое задание от компании ida.lite - Market',
                descr_company:'Страница со списком товаров, и возможностью добавления/удаления товаров в корзине',
                tecnology:'Разработка страницы со списком товаров на Nuxt.js, обновления товаров при помощи Vuex, получение и отрисовывания товаров в корзине на сервере. Верстка страницы с использованием  Sass. Валидация формы.\n',
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
