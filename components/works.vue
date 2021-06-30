<template>
    <div id="Works">
      <b-container>
        <h2>Мои работы</h2>
        <div class="flex-container">
         <div v-for="(work,index) in WorksRow" :key="index">
           <img :src="work.src" :alt="work.alt"/>
           <h4>{{work.name_company}}</h4>
           <p class="text_works">{{work.descr_company}}</p>
           <p class="text_works"><b>Использованные технологии:</b><br>{{work.tecnology}}</p>
           <p class="text_works"><b>Адрес сайта:</b><a :href="work.url" target="_blank"> {{work.website}}</a></p>
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
                tecnology:'Второй релиз сайта - переписанный на Vue.js (и Vue router).',
                url:'',
                website:'(сайт не был запущен)',
              },
              {
                src:'./home_gts.png',
                alt:'Гостехносервис',
                name_company:'Сайт для компании «Гостехносервис»',
                descr_company:'Компания поставляет IT-оборудование, производит аксессуары и вычислительных комплексы.',
                tecnology:'Одностраничный сайт на Vue.js, BootstrapVue, Sass с простой анимацией для SVG-элементов. ',
                url:'https://gtekhno.ru/',
                website:'gtekhno.ru',
              },
              {
                src:'./home_priamyeruki.jpg',
                alt:'Прямые_руки',
                name_company:'Сайт для компании «Аваконт»',
                descr_company:'Компания оказывает услуги по изготовлению разнообразного декора, рекламных вывесок,\n' +
                  'сувенирной продукции, реставрация, брендирование.',
                tecnology:'Дизайн-макет сайта на Figma, разработка на Vue.js (Sass, BootstrapVue, Vue router), обратная связь на Express.js.',
                url:'http://pryamye-ryki.ru/',
                website:'pryamye-ryki.ru',
              },
              {
                src:'./home_avacont.jpg',
                alt:'Аваконт',
                name_company:'Сайт для компании «Аваконт»',
                descr_company:'Компания занимается изготовлением накладок из дерева под розетки,\n' +
                  ' выключатели, радиаторы, светильники и карнизы разных производителей.',
                tecnology:'Создание макета сайта с помощью Figma. Разработка лендинга на Vue.js, HTML5, SASS, форма обратной связи на Express.js, подсчет стоимости товара на JavaScript.',
                url:'http://avacont.ru/',
                website:'avacont.ru',
              },
              {
                src:'./valencia.png',
                alt:'Валенсия',
                name_company:'Сайт для компании «Валенсия»',
                descr_company:'Частное охранное предприятие, обеспечивающее  безопасность личности, предпринимательской деятельности, мероприятий, и всех, кто нуждается в охране на всей территории РФ.',
                tecnology:'Разработка сайта на Nuxt.js, адаптивная вёрстка сайта на BootstrapVue, HTML5, Sass.',
                url:'',
                website:'(сайт на стадии разработки)',
              },
              {
                src:'./training.png',
                alt:'Математический тренажёр',
                name_company:'Математический тренажёр',
                descr_company:'Тренировочный тест по математике на сложение, вычитание, деление и умножение для младшей школы на время (без отрицательных чисел).',
                tecnology:'Разработка теста: логика на JavaScript, отображение с помощью обращения JavaScript к DOM-дереву, написанному на HTML5. Использование CSS3. Сборка теста на Webpack.',
                url:'',
                website:'(сайт на стадии разработки)',
              },
              {
                src:'./snake.png',
                alt:'Игра "Змейка"',
                name_company:'Игра "Змейка"',
                descr_company:'На игровом поле ползает змейка, ее еда появляется в разных местах и служит источником очков. Больше съешь - выше балл и длиннее тело. Управление с помощью клавиш: W, A, S, D. ',
                tecnology:'Разработка игры: логика на JavaScript, отображение с помощью Canvas. Компиляция игры происходит с помощью инструмента Webpack.',
                url:'',
                website:'(сайт на стадии разработки)',
              },
              {
                src:'./snake.png',
                alt:'',
                name_company:'PixelPerfect',
                descr_company:'Верстка по PSD-макету',
                tecnology:'Разработка одностраничного адаптивного сайта на Vue.js с помощью PixelPerfect (Pixel Perfect под Google Chrome), JavaScript, BootstrapVue, HTML5, Sass.',
                url:'',
                website:'(отсутствует)',
              },
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>
