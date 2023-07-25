<template>
  <div id="Works">
    <b-container>
      <h2>Портфолио</h2>
      <div class="flex-container">
        <div v-for="(work,index) in Works" :key="index">
          <img :src="work.src" :alt="work.alt"/>
          <div class="work">
            <div class="name_technology">
              <p class="text_technology">{{work.technology}}</p>
            </div>
            <p class="name_company">{{work.name_company}}</p>
            <p class="text">{{work.about}}</p>
          </div>
          <div class="link_work">
            <a :href="work.git" target="_blank">
              <component :is="git"/>
            </a>
            <a :href="work.show" target="_blank">
              <component :is="show"/>
            </a>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import Github_svg from "~/components/svg_contacts/github_svg";
  import Show_svg from "~/components/svg_works/show_svg";
  export default {
    name: "works",
    data(){
      return{
        git:Github_svg,
        show:Show_svg,
        Works:[
          {
            src:'./home_prom.jpg',
            alt:'Промэлектронсервис',
            name_company:'«Промэлектронсервис»',
            technology:'HTML & CSS & Bootstrap',
            git:'https://github.com/AnigalHub/Promelectronservice',
            show:'http://promelektronservis.ru/',
            about:'Сайт сертификационных испытаний и комплексной поставки электронных компонентов.'
          },
          {
            src:'./home_gts.jpg',
            alt:'Гостехносервис',
            name_company:'«Гостехносервис»',
            git:'https://github.com/AnigalHub/Gts',
            show:'/gts',
            technology:'Vue',
            about:'Сайт производителя и поставщика ИТ‒оборудования для государственных и бизнес-структур.'
          },
          {
            src:'./home_priamyeruki.jpg',
            alt:'Прямые_руки',
            name_company:'«Аваконт»',
            git:'https://github.com/AnigalHub/Priamyeruki',
            show:'/priamyeruki',
            technology:'Vue',
            about:'Сайт изготовления разнообразного декора, рекламных вывесок, сувенирной продукции, реставрации, брендирования.'
          },
          {
            src:'./home_avacont.jpg',
            alt:'Аваконт',
            name_company:'«Аваконт»',
            git:'https://github.com/AnigalHub/Avacont',
            show:'/avacont',
            technology:'Vue',
            about: 'Сайт изготовления накладок из дерева под розетки, выключатели, радиаторы, светильники и карнизы.'
          },
          {
            src:'./home_security.jpg',
            alt:'Пересвет',
            name_company:'«Пересвет»',
            git:'https://github.com/AnigalHub/Valencia',
            show:'/security',
            technology:'Nuxt',
            about:'Сайт частного охранного предприятия, обеспечивающего безопасность на всей территории РФ.'
          },
          {
            src:'/home_pixelperfect.jpg',
            alt:'pixelperfect',
            name_company:'«Startup»',
            git:'https://github.com/AnigalHub/PixelPerfect',
            show:'/pixelperfect',
            technology:'Vue',
            about: 'Шаблон с попиксельной точностью, выполненный с помощью подхода Pixel Perfect.'
          },
          {
            src:'./home_training.jpg',
            alt:'Математический тренажёр',
            name_company:'«Математический тренажёр»',
            git:'https://github.com/AnigalHub/MathTest',
            show:'/mathtest',
            technology:'JavaScript',
            about: 'Игра для малышей на сложение, вычитание, деление и умножение с таймером.'
          },
          {
            src:'./home_snake.jpg',
            alt:'Игра "Змейка"',
            name_company:'«Змейка»',
            git:'https://github.com/AnigalHub/Snake',
            show:'/snake',
            technology:'JavaScript',
            about:'Классическая игра передвижения змейки за едой на игровом поле с помощью управления клавишами.'
          },
          {
            src:'./home_svgGame.jpg',
            alt:'alphabet',
            name_company:'«Алфавит»',
            git:'https://github.com/AnigalHub/SvgGames',
            show:'/svggames',
            technology:'Vue',
            about:'Игры на знание английского алфавита: изучение алфавита, собери пару и конструктор слов.'
          },
          {
            src:'/home_testtask.jpg',
            alt:'TestTask',
            name_company:'«Продажа товаров»',
            git:'https://github.com/AnigalHub/TestTask',
            show:'/testtask',
            technology:'Nuxt',
            about:'Целевая страница с формой на добавление товара и сортировки товара в списке.'
          },
          {
            src:'/home_market.jpg',
            alt:'market',
            name_company:'«Каталог товаров»',
            git:'https://github.com/AnigalHub/Market',
            show:'/market',
            technology:'Nuxt',
            about:'Целевая страница с возможностью сортировки товаров, отправки заявки и удалении из корзины товара.'
          },
          {
            src:'/home_testbis.jpg',
            alt:'TestBis',
            name_company:'«Банковское приложение»',
            git:'https://github.com/AnigalHub/TestBis',
            show:'/testbis',
            technology:'Vue',
            about:'Прототип банковского приложения с возможностью отображения таблиц, изменения и удаления данных из них.'
          },
          {
            src:'/home_mag.png',
            alt:'Mag',
            name_company:'ОАО «Группа компаний МАГ»',
            git:'https://github.com/AnigalHub/GroupOfCompaniesMAG',
            show:'/mag',
            technology:'Vue',
            about:'Сайт группы компаний, оказывающих услуги по строительно-монтажными и пуско-наладочными работами систем.'
          },
          {
            src:'/home_greasepaint.png',
            alt:'Greasepaint',
            name_company:'«PolyakovsTeam»',
            git:'https://github.com/AnigalHub/Greasepaint',
            show:'/greasepaint',
            technology:'Vue',
            about:'Сайт о профессиональных гримерах спортсменов на соревнованиях NBC по бодибилдингу и фитнесу.'
          },
          {
            src:'/home_calendar.png',
            alt:'Calendar',
            name_company:'«Адвент-календарь»',
            git:'https://github.com/AnigalHub/AdventCalendar',
            show:'/calendar',
            technology:'Vue',
            about:'Адвент-календарь на месяц с 60 разными интересными заданиями на выбор для детей к Новому году.'
          },
          // {
          //   src:'/home_calendar.png',
          //   alt:'Calendar',
          //   name_company:'«Адвент-календарь»',
          //   git:'https://github.com/AnigalHub/AdventCalendar',
          //   show:'/calendar',
          //   technology:'Vue',
          //   about:'Адвент-календарь на месяц с 60 разными интересными заданиями на выбор для детей к Новому году.'
          // },
          // {
          //   src:'/api.jpg',
          //   alt:'api',
          //   name_company:'Проект “Аптечка”',
          //   technology:'Node.js, Express.js, Vue.js, BootstrapVue, PostgreSQL.',
          // },
          // {
          //   src:'/wishlist.jpg',
          //   alt:'wishlist',
          //   name_company:'Проект “Список Желаний”',
          //   technology:'Node.js, Express.js, Vue.js, BootstrapVue, PostgreSQL.',
          // },
          // {
          //    src:'/tgBot.jpg',
          //    alt:'tgbot',
          //    name_company:'Telegram-бот "Напоминалка"',
          //    tecnology:'TypeScript, PostgreSQL. ',
          //    url:''
          // },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
