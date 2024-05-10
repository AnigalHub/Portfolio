<template>
  <div :class="currentTheme">
    <div id="content">
      <Home/>
      <Navbar/>
      <About/>
      <Skills/>
      <Works/>
      <Contacts/>
      <Myfooter/>
    </div>
  </div>
</template>

<script>
  import Navbar from "~/components/navbar";
  import Home from "~/components/home";
  import About from "~/components/about";
  import Skills from "~/components/skills";
  import Works from "~/components/works";
  import Contacts from "~/components/contacts";
  import Myfooter from "~/components/myfooter";

  export default {
    components: { Myfooter, Contacts, Works, Skills, About, Home, Navbar },
    computed: {
      currentTheme() {
        return this.$store.state['Themes'].currentTheme
      },
    },
    created(){
      if (process.client){
        const VueSession = () => import('vue-session')
        this.$store.dispatch('Themes/loadTheme')
      }
      //this.$store.dispatch('Themes/loadTheme')
    },
  }
</script>

<style>
  /*фраза в логотипе*/
  .navbar-brand {
    padding-bottom: 0 !important;
  }
</style>
<style lang="scss">
  @import './../static/style.css';

  /*Компоненты меню и футера*/
  #Nav, #Myfooter {
    background: var(--background_navbar_footer);
    color: var(--color_navbar_footer);
  }
  /*Компонент футера*/
  #Myfooter {
    padding: 1.5% 14%;
  }
  .navbar a {
    color: var(--color-a) !important;
  }
  /*активный свич смены темы*/
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: var(--background_switch_active) !important;
    background-color: var(--background_switch_active);
  }
  /*пассивный свич смены темы*/
  .custom-switch .custom-control-label::before{
    border-color: var(--background_switch) !important;
    background-color: var(--background_switch);
  }
  /*пассивный свич - луна*/
  .custom-switch .custom-control-input:checked ~ .custom-control-label::after {
    content: '🌙 ';
    background-color: transparent;
    margin-top: -9px;
    margin-left: -5px;
    font-size: 1rem;
  }
  /*активный свич - солнышко*/
  .custom-switch .custom-control-label::after{
    content: '☀️';
    background-color: transparent;
    margin-top: -9px;
    margin-left: -5px;
    font-size: 1rem;
  }
  /*свич смены темы*/
  .custom-switch {
    padding-left: 3rem;
    padding-top: .8rem;
  }
  a {
    color: var(--color-text) !important;
    text-decoration: var(--none) !important;
    cursor: var(--cursor_pointer) !important;
  }
  /*заголовки, текст, текст про технологии, название компании, пункты меню, название, пункты меню*/
  h1, .text, .text_technology, .name_company, .name, .nav-link, .navbar-brand {
    font-family: 'Roboto', sans-serif;
  }
  /*заголовки*/
  h1 {
    color: var(--color_h1);
    text-shadow: 1px 1px 0 var(--color_text_shadow_h1);
    padding: 3%;
  }
  h2 {
    padding-bottom: 3%;
  }
  h1, h2 {
    margin: var(--center_block);
    text-align: var(--center_text);
  }
  /*заголовок, все кнопки в меню, блок под логотип*/
  h1, .navbar .nav-link, .navbar-brand {
    font-weight: 200;
  }
  /*заголовок h2, даты в #About, название*/
  h2, span, .name {
    color: var(--color_highlight);
  }
   /*текст, заголовок h2, даты в #About, название*/
  .text, h2, span, .name {
    font-weight: 300 !important;
  }
  /*текст, пункты меню, фраза в логотипе*/
  .nav-link, .navbar-brand {
    line-height: 1.8rem;
  }
  /*текст, пункты меню, фраза в логотипе,текст для компонента "Мои работы"*/
  .text, .nav-link, .navbar-brand, .name_company, .name, .text_technology {
    font-size: 1.15rem;
  }
  /*svg в логотипе*/
  #logo {
    width: 60px;
    height: 50px;
  }
  /*меню*/
  .navbar {
    padding: 0 14%;
  }
  /*все кнопки в меню*/
  .nav-link {
    padding: .5rem .7rem !important;
  }
  /*контейнер, который включает в себя повтор блоков*/
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  body {
    background: var(--background_components-odd) !important;
  }
  /*Компоненты - "Ключевые навыки", "Контакты"*/
  #Skills, #Contacts {
    background: var(--background_components-even);
  }
  /*Компоненты - "Об мне", "Портфолио"*/
  #About, #Works {
    background: var(--background_components-odd);
  }
  /*Компоненты - "Об мне", "Ключевые навыки", "Портфолио", "Контакты"*/
  #About, #Skills, #Works, #Contacts {
    color: var(--color_text);
  }
  /*Компоненты - "Об мне", "Ключевые навыки", "Портфолио", "Контакты"*/
  #About, #Skills, #Works, #Contacts {
    padding: 3%;
  }
  /*Компонент - "Главный"*/
  #Home {
    background: url("../static/background.jpg") no-repeat;
    background-size: var(--percent100) var(--percent100);
  }
  /*Компонент - "Об мне"*/
  #About {
    /*бутстрап сетка*/
    .row {
      margin: 0 5% 0 8%;
    }
    /*картинка*/
    img {
      width: 78%;
      margin: 5% 12% 0;
      border-radius: 50%;
    }
    /*имя*/
    .name {
      font-size: 1.5rem;
      padding-top: 4%;
      color: var(--color_highlight);
      font-weight: var(--font-weight400);
      text-align: var(--center_text);
      margin-bottom: .5%;
    }
    /*список ненумерованный*/
    ul {
      list-style: var(--none);
      margin-top: -1em !important;
      margin-left: -2.2rem !important;
    }
    /*блоки списков*/
    .block_li {
      border-radius: 7px;
      padding: 1%;
      margin-bottom: 2%;
      border: var(--border_color);
      background: var(--background_components-even);
      p {margin-bottom: .2rem;}
      /*при наведении*/
      &:hover {
        border: var(--border_color_hover);
      }
    }
    /*элементы списка*/
    ul li {
      position: relative;
      padding: 5px 0 0 40px;
      cursor: var(--cursor_default);
      /*при наведении*/
      &:hover .block_li {
        transform: scale(1.03);
      }
      /*свой маркер - кружок*/
      &:before {
        border-radius: var(--circle);
        width: 12px;
        height: 12px;
        background: var(--background_circle_li);
        content: "";
        left: 0;
        transition: .3s ease-in-out;
        top: 16px;
      }
      /*черточки (полосочки)*/
      &:after {
        border-left: 1px dotted var(--color_text);
        width: 1px;
        bottom: -12px;
        content: "";
        left: 6px;
        top: 48px;
      }
      /*свой маркер - кружок, черточки (полосочки)*/
      &:before, &:after {
        position: absolute;
      }
      /*при наведении*/
      &:hover:before {
        box-shadow: var(--background_circle_li_hover);
      }
      /*последний элемент*/
      &:last-child:after {
        content: var(--none);
      }
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills {
    /*текст в компоненте "Ключевые навыки"*/
    .text {
      text-align: var(--center_text);
      font-weight: var(--font-weight400);
    }
    /*svg навыков (языков, фреймворков, ..)*/
    svg {
      background: var(--background_svg);
      border: var(--border_color);
      width: 78px;
      height: 78px;
      display: block;
      margin: var(--center_block) 2%;
      border-radius: var(--circle);
      padding: 10%;
    }
    /*блоки под svg и название*/
    .flex-container {
      margin: 0 5%;
      /*блок под svg и название*/
      & > div {
        width: 12.5%;
        margin: 0 2% 2%;
        cursor: var(--cursor_default);
        border-radius: 15px;
        padding: 1%;
        /*при наведении*/
        &:hover {
          transform: scale(1.05);
          svg {
            border: var(--border_color_hover);
          }
        }
      }
    }
    /*svg - express.js*/
    .express_svg {
      fill: var(--color-svg-express);
    }
  }
  /*Компонент - "Портфолио"*/
  #Works {
    /*блоки с работами*/
    .flex-container {
      align-items: center;
      justify-content: center;
      /*блоки с работой*/
      & > div {
        background: var(--background_components-even);
        border: var(--border_color);
        width: 31%;
        margin: 0 1% 2%;
        padding: 1%;
        position: relative;
        border-radius: 7px;
        /*картинки*/
        img {
          filter: brightness(94%);
        }
        /*при наведении*/
        &:hover {
          transform: scale(1.01);
          border: var(--border_color_hover);
          /*картинки*/
          img {
            filter: brightness(50%);
          }
          /*блок с ссылками на проект*/
          .link_work {
            display: block;
          }
        }
      }
      /*блок с ссылками на проект, текст технологии*/
      .link_work, .text_technology {
        position: absolute;
      }
      /*блок с ссылками на проект*/
      .link_work {
        display: var(--none);
        top: 65px;
        margin: 0 30%;
        width: 93.5%;
      }
      /*текст технологии*/
      .text_technology {
        font-weight: var(--font-weight400);
        font-size: 1rem;
        border-radius: 10px;
        padding: 2% 5%;
        top: 160px;
      }
      /*название компании*/
      .name_company {
        text-align: var(--center_text);
        color: var(--color_highlight);
        font-weight: var(--font-weight500);
        width: var(--percent100);
        padding: 5% 0 1%;
        margin: 0;
        cursor: var(--cursor_default);
      }
      /*svg*/
      svg {
        width: 50px;
        height: 50px;
        margin: 2%;
        background: var(--svg_background_works);
        padding: 3%;
        border-radius: var(--circle);
        cursor: var(--cursor_pointer);
        /*при наведении*/
        &:hover {
          transform: scale(0.8);
        }
      }
      /*картинки*/
      img {
        width: var(--percent100);
        border-radius: 5px;
      }
      /*название технологии*/
      .name_technology {
        width: var(--percent100);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      /*текст*/
      .text {
        font-size: 1.1rem;
        margin: 0;
      }
      /*название технологии, текст технологии*/
      .name_technology, .text_technology {
        background-color: var(--background_components-even);
      }
      /*название технологии, текст*/
      .name_technology, .text {
        cursor: var(--cursor_default);
      }
    }
  }
  /*Компонент - "Контакты"*/
  #Contacts {
    /*блоки с контактной информацией*/
    .flex-container {
      margin: 0 10% 0;
      /*блок с контактной информацией*/
      & > div {
        background: var(--background_components-even);
        border: var(--border_color);
        text-align: var(--center_text);
        width: 45%;
        margin: 1.5%;
        padding: 1% 4%;
        border-radius: 7px;
        /*при наведении*/
        &:hover {
          border: var(--border_color_hover);
          transform: scale(1.01);
        }
        /*svg*/
        svg {
          display: block;
          margin: var(--center_block);
          width: 50px;
          height: 50px;
          border: 2.5px solid var(--color_highlight);
          border-radius: var(--circle);
        }
        /*название контактной информации*/
        .name {
          font-weight: var(--font-weight500);
          padding-right: 2%;
        }
        /*сетка бутстрап*/
        .col {
          display: flex;
          align-items: center;
        }
        /*текст*/
        .text {
          margin: 0;
        }
      }
    }
    /*цвет svg*/
    .svg_color {
      fill: var(--svg_color_contract_1);
    }
    .svg_color1 {
      fill: var(--svg_color_contract_2);
    }
  }
  /*Компонент - "Футер"*/
  #Myfooter {
    /*блок с svg*/
    .svgFooter {
      margin: 0 0 0 auto;
      width: 15%;
    }
    /*текст*/
    .text {
      float: left;
      padding-top: .25%;
    }
    /*блоки с контактной информацией*/
    .flex-container > div {
      width: 25%;
      border-radius: 7px;
      /*svg*/
      svg {
        width: 30px;
        border: 1px solid var(--border-color-svg-footer);
        height: 30px;
        border-radius: var(--circle);
        padding: 4%;
      }
      /*при наведении*/
      &:hover {
        transform: scale(1.09);
      }
    }
    .svg_color {
      fill: var(--svg_color_footer_1);
    }
    .svg_color1 {
      fill: var(--svg_color_footer_2);
    }
  }

   /***********************АДАПТИВНОСТЬ******************/
  @media screen and (max-width: 350px) {
    /*текст технологии, текст, пункты меню*/
    .text_technology, .text, .nav-link, .navbar-brand {
      font-size: 1rem !important;
      line-height: 1rem !important;
    }
    /*Компонент - "Ключевые навыки"*/
    #Skills {
      /*блоки под svg и название*/
      .flex-container > div {
        width: 35% !important;
      }
    }
    /*Компонент - "Контакты"*/
    #Contacts {
      /*сетка бутстрап*/
      .row {
        padding: 0 !important;
      }
    }
  }
  @media screen and (max-width: 500px) {
    /*Компоненты - "Об мне", "Ключевые навыки", "Портфолио", "Контакты"*/
    #About, #Skills, #Works, #Contacts {
      padding: 6% 3%;
    }
    /*меню*/
    .navbar {
      padding: 0 2%;
    }
    /*заголовок*/
    h1, h2 {
      font-size: 1.4rem !important;
    }
    /*Компоненты - "Об мне", "Ключевые навыки","Портфолио","Контакты"*/
    #About, #Skills, #Works, #Contacts {
      padding: 1rem 0;
    }
    /*текст технологии, текст, пункты меню, название*/
    .text_technology, .name, .text, .nav-link, .navbar-brand, #Works .flex-container .text, #About .name {
      font-size: 1rem;
      line-height: 1.25rem;
    }
    /*Компонент - "Главный"*/
    #Home {
      /*фраза-Junior Frontend-разработчик*/
      .front {
        font-size: 1.7rem;
      }
    }
    /*Компонент - "Об мне"*/
    #About {
      /*список*/
      ul {
        margin-left: -4.2rem !important;
      }
      /*пункты списка*/
      ul li {
        padding: 5px 0 5px 40px;
      }
      /*сетка бутстрап*/
      .row {
        flex-direction: column;
        /*сетка бутстрап*/
        .col-4 {
           max-width: var(--percent100);
          /*картинка*/
          img {
            width: 40%;
            margin: 0 30% 0;
          }
          /*имя*/
          .name {
            padding: 2% 0 6%;
          }
        }
      }
    }
    /*Компонент - "Ключевые навыки"*/
    #Skills {
      /*блок под svg и название*/
      .flex-container {
        margin: 0 .5%;
      }
      /*блоки под svg и название*/
      .flex-container  > div {
        width: 28%;
      }
      /*svg навыков (языков, фреймворков, ..)*/
      svg {
        width: 55px;
        height: 55px;
      }
    }
    /*Компонент - "Портфолио"*/
    #Works {
      /*блоки с работами*/
      .flex-container > div {
        width: var(--percent100);
        padding: 2.5%;
        margin: 0 2% 4%;
        /*текст технологии*/
        .text_technology {
          top: 170px;
        }
        /*картинки*/
        img {
          width: var(--percent100);
          height: 180px;
        }
      }
    }
    /*Компонент - "Контакты"*/
    #Contacts {
      /*блоки с контактной информацией*/
      .flex-container {
        margin: 0;
        /*блок с контактной информацией*/
        & > div {
          width: var(--percent100);
          padding: 1%;
          /*svg*/
          svg {
            width: 35px;
            height: 35px;
          }
        }
        /*сетка бутстрап*/
        .row {
          padding: 0 5%;
        }
      }
    }
    /*Компонент - "Футер"*/
    #Myfooter {
      padding: 5%;
      /*текст*/
      .text {
        float: inherit;
        text-align: var(--center_text);
        padding-bottom: 3%;
      }
      /*блок с svg*/
      .svgFooter {
        margin: var(--center_block) 2%;
        width: 45%;
      }
    }
  }
  @media screen and (min-width: 500px)and (max-width: 768px) {
    /*меню*/
    .navbar {
      padding: 0 2%;
    }
    /*заголовки*/
    h1, h2 {
      font-size: 1.4rem !important;
    }
    /*текст дтехнологии, текст, пункты меню*/
    .text_technology, .text, .nav-link, .navbar-brand {
      font-size: 1.1rem;
      line-height: 1.25rem;
    }
    /*Компонент - "Об мне"*/
    #About {
      /*пункты списка*/
      ul li {
        padding: 5px 0 5px 40px;
      }
      /*сетка бутстрап*/
      .row {
        flex-direction: column;
        /*сетка бутстрап*/
        .col-4 {
          max-width: var(--percent100);
          /*картинки*/
          img {
            width: 40%;
            margin: 0 30% 0;
          }
          /*имя*/
          .name {
            padding: 2% 0 6%;
          }
        }
      }
    }
    /*Компонент - "Ключевые навыки"*/
    #Skills {
      /*блок под svg и название*/
      .flex-container {
        margin: 0 .5%;
      }
      /*блоки под svg и название*/
      .flex-container  > div {
        width: 16%;
      }
      /*svg навыков (языков, фреймворков, ..)*/
      svg {
        width: 55px;
        height: 55px;
      }
    }
    /*Компонент - "Портфолио"*/
    #Works {
      /*блоки с работами*/
      .flex-container > div {
        width: var(--percent100);
        padding: 2%;
        margin: 0 2% 4%;
        /*текст технологии*/
        .text_technology {
          top: 210px;
        }
      }
    }
    /*Компонент - "Контакты"*/
    #Contacts {
      /*блоки с контактной информацией*/
      .flex-container {
        margin: 0 14%;
        /*блок с контактной информацией*/
        & > div {
          width: var(--percent100);
          padding: 1%;
          /*svg*/
          svg {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
    /*Компонент - "Футер"*/
    #Myfooter {
      padding: 2% 5%;
      /*текст*/
      .text {
        float: inherit;
        text-align: var(--center_text);
        padding-bottom: 3%;
      }
      /*блок с svg*/
      .svgFooter {
        margin: var(--center_block);
        width: 40%;
      }
    }
  }
  @media screen and (min-width: 768px)and (max-width: 992px) {
    .navbar {
      padding: 0 5%;
    }
    /*текст технологии, текст, пункты меню*/
    .text_technology, .text, .nav-link, .navbar-brand {
      line-height: 1.25rem;
    }
    /*Компонент - "Об мне"*/
    #About {
      /*сетка бутстрап*/
      .row {
        flex-direction: column;
        /*сетка бутстрап*/
        .col-4 {
          max-width: var(--percent100);
          /*картинки*/
          img {
            width: 40%;
            margin: 0 30% 0;
          }
          /*имя*/
          .name {
            padding: 2% 0 4%;
          }
        }
      }
    }
    /*Компонент - "Ключевые навыки"*/
    #Skills {
      /*блок под svg и название*/
      .flex-container {
        margin: 0 .5%;
      }
      /*блоки под svg и название*/
      .flex-container  > div {
        width: 12.5%;
      }
      /*svg навыков (языков, фреймворков, ..)*/
      svg {
        width: 60px;
        height: 60px;
      }
    }
    /*Компонент - "Портфолио"*/
    #Works {
      /*блоки с работами*/
      .flex-container > div {
        width: 47.5%;
        margin: 0 1.2% 2.3%;
        /*текст технологии*/
        .text_technology {
          top: 150px;
        }
      }
    }
    /*Компонент - "Контакты"*/
    #Contacts {
      /*блоки с контактной информацией*/
      .flex-container {
        margin: 0;
        /*блок с контактной информацией*/
        & > div {
          width: 46.5%;
          padding: 1%;
          /*svg*/
          svg {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
    /*Компонент - "Футер"*/
    #Myfooter {
      padding: 1.5% 5%;
      /*блок с svg*/
      .svgFooter {
        width: 25%;
      }
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .navbar {
      padding: 0 7%;
    }
    /*текст, пункты меню, фраза в логотипе по всей странице*/
    .text, .nav-link, .navbar-brand {
      line-height: 1.4rem;
    }
    /* текст, пункты меню, название компании, имя, текст технологии */
    .text, .nav-link, .navbar-brand, .name_company, .name, .text_technology {
      font-size: 1.1rem;
    }
    /*Компонент - "Ключевые навыки"*/
    #Skills {
      /*svg навыков (языков, фреймворков, ..)*/
      svg {
        width: 70px;
        height: 70px;
      }
    }
    /*Компонент - "Портфолио"*/
    #Works {
      /*текст технологии*/
      .flex-container .text_technology {
        top: 130px;
      }
    }
    /*Компонент - "Контакты"*/
    #Contacts {
      /*блоки с контактной информацией*/
      .flex-container {
        margin: 0 5% 0;
        /*svg*/
        & > div svg {
          width: 40px;
          height: 40px;
        }
      }
    }
    /*Компонент - "Футер"*/
    #Myfooter {
      padding: 1.5% 7%;
      /*блок с svg*/
      .svgFooter {
        width: 20%;
      }
    }
  }
  @media screen and (max-width: 1200px){
    /*пассивный свич - луна*/
    .custom-switch .custom-control-input:checked ~ .custom-control-label::after {
      margin-top: -5px;
      margin-left: -5px;
    }
    /*активный свич - солнышко*/
    .custom-switch .custom-control-label::after{
      margin-top: -5px;
      margin-left: -5px;
    }
  }
</style>
