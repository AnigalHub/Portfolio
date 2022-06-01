<template>
  <div>
    <Home/>
    <Navbar/>
    <About/>
    <Skills/>
    <Works/>
    <Contacts/>
    <Myfooter/>
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
    components: {Myfooter, Contacts, Works, Skills, About, Home, Navbar}
  }
</script>

<style>
  /*меню*/
  .navbar-light .navbar-toggler{border-color: white !important;}
  /*фраза в логотипе*/
  .navbar-brand{padding-bottom: 0 !important;}
</style>
<style lang="scss">
 $color_highlight: #5584bf;
 $cursor_pointer: pointer;
 $cursor_default: default;
 $circle: 50%;
 $center_block: 0 auto;
 $center_text: center;
 $time: 1s;
 $percent100: 100%;
 $font-weight400: 400;
 $font-weight500: 500;
 $none:none;

/*Компоненты меню и футера*/
#Nav,#Myfooter{
  background: #030407;
  color: #dedede;
}
/*Компонент футера*/
#Myfooter{padding: 1.5% 14%;}
a{
  text-decoration: $none !important;
  cursor: $cursor_pointer !important;
}
/*заголовки,, текст, текст про технологии, название компании, пункты меню, название, пункты меню*/
h1, .text, .text_technology, .name_company, .name, .nav-link, .navbar-brand{font-family: 'Roboto', sans-serif;}
/*заголовки*/
h1{
  color: #a1cbff;
  text-shadow: 1px 1px 0 #000;
  padding: 3%;
}
h2{padding-bottom: 3%;}
h1,h2{
  margin: $center_block;
  text-align: $center_text;
}
/*заголовок, все кнопки в меню,блок под логотип*/
h1,.navbar .nav-link,.navbar-brand{font-weight: 200;}
/*заголовок h2,даты в #About, название*/
h2,span,.name{color: $color_highlight;}
 /*текст, заголовок h2, даты в #About, название*/
.text,h2,span,.name{font-weight: 300;}
/*текст, пункты меню, фраза в логотипе*/
.nav-link,.navbar-brand{line-height: 1.8rem;}
/*текст, пункты меню, фраза в логотипе,текст для компонента "Мои работы"*/
.text,.nav-link,.navbar-brand,.name_company,.name,.text_technology{font-size: 1.15rem;}
/*svg в логотипе*/
#logo{
  width: 60px;
  height: 50px;
}
/*меню*/
.navbar{padding: 0 14%;}
/*все кнопки в меню,блок под логотип*/
.navbar .nav-link,.navbar-brand{
  color: #dedede !important;
}
/*все кнопки в меню*/
.nav-link{padding: 0.5rem 1rem !important;}
/*контейнер, который включает в себя повтор блоков*/
.flex-container{
  display: flex;
  flex-wrap: wrap;
}
/*Компоненты - "Об мне", "Ключевые навыки", "Портфолио", "Контакты"*/
#About, #Skills, #Works, #Contacts{padding: 3%;}

/************ СВЕТЛАЯ ТЕМА ***********************/
@media screen and (prefers-color-scheme: light){
  $background_elements: white;
  $color_text: black;
  $box-shadow: 0 4px 12px rgb(0 0 0 / 12%);
  $box-shadow_hover: 2px 6px 15px rgba(0,0,0,.4);

  /*ссылки*/
  a{color: $color_text !important;}
  /*Компоненты - "Ключевые навыки", "Контакты"*/
  #Skills,#Contacts{background: $background_elements;}
  /*Компоненты - "Об мне", "Портфолио"*/
  #About,#Works{background: #f4f4f4;}
  /*Компоненты - "Об мне","Ключевые навыки", "Портфолио", "Контакты"*/
  #About, #Skills, #Works, #Contacts{color: #090c13;}
  /*Компонент - "Об мне"*/
  #About{
    /*список - черточки (полосочки)*/
    ul li:after{border-left: 1px dotted $color_text;}
    /*блок с количеством проектов*/
    .projects{background-color: #f9f9f9;}
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*svg*/
    svg{
      background: hsla(0,0%,$percent100,.2);
      box-shadow: $box-shadow;
    }
    /*svg - express.js*/
    .express_svg{fill: #000;}
  }
  /*Компонент - "Портфолио"*/
  #Works{
    /*блоки под каждую работу*/
    .flex-container > div{
      background: $background_elements;
      box-shadow: $box-shadow;
      /*при наведении*/
      &:hover{box-shadow: $box-shadow_hover;}
      /*название технологии, текст технологии*/
      .name_technology, .text_technology{background-color: $background_elements;}
    }
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container > div{
      background: $background_elements;
      box-shadow: $box-shadow;
      /*при наведении*/
      &:hover{box-shadow: $box-shadow_hover;}
    }
  }
}
/************ ТЕМНАЯ ТЕМА ***********************/
@media screen and (prefers-color-scheme: dark){
  $color_text: #afadad;
  $box-shadow: 0 0 12px hsla(0,0%,$percent100,.15);
  $box-shadow_hover: 0 0 12px hsla(0,0%,$percent100,.4);

  /*ссылки*/
  a{color: $color_text !important;}
  /*Компоненты - "Об мне", "Ключевые навыки", "Контакты"*/
  #Skills, #Contacts{background: #0c111c;}
  /*Компоненты -  "Портфолио","Образование"*/
  #Works, #About{background: #090c13;}
  /*Компоненты - "Об мне","Ключевые навыки", "Портфолио", "Контакты"*/
  #About, #Skills, #Works, #Contacts{color: $color_text;}
  /*Компонент - "Об мне"*/
  #About{
    /*список - черточки (полосочки)*/
    ul li:after{border-left: 1px dotted $color_text;}
    /*блок с количеством проектов*/
    .projects{background: #080a11;}
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*svg*/
    svg{
      background: #111623;
      box-shadow: $box-shadow;
    }
    /*svg - express.js*/
    .express_svg{fill: #afadad;}
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки под каждую работу*/
    .flex-container > div{
      box-shadow: $box-shadow;
      /*при наведении*/
      &:hover{box-shadow: $box-shadow_hover;}
      /*название технологии, текст технологии*/
      .name_technology, .text_technology{background: #090c13;}
    }
  }
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container > div{
      background: #111623;
      box-shadow: 0 0 12px hsla(0,0%,$percent100,.1);
      /*при наведении*/
      &:hover{box-shadow: $box-shadow_hover;}
    }
  }
}

/*Компонент - "Главный"*/
#Home{
  background: url("../static/background.jpg") no-repeat;
  background-size: $percent100 $percent100;
}
/*Компонент - "Об мне"*/
#About{
  /*блок с количеством проектов*/
  .projects{
    width: 60%;
    margin: 7% auto 2%;
    cursor: $cursor_pointer;
    border-radius: 10px;
    padding: 3%;
    text-align: $center_text;
    /*блок под число проектов*/
    .number{
      font-weight: $font-weight400;
      font-size: 1.8rem;
    }
    /*при наведении*/
    &:hover{
      transition: $time;
      transform: scale(1.09);
    }
  }
  /*бутстрап сетка*/
  .row{margin: 0 5% 0 8%;}
  /*картинка*/
  img{
    width: 75%;
    margin: -5% 15% 0;
    border-radius: $circle;
  }
  /*имя*/
  .name{
    font-size: 1.5rem;
    padding-top: 6%;
    color: $color_highlight;
    font-weight: $font-weight400;
    text-align: $center_text;
    margin-bottom: .5%;
  }
  /*список ненумерованный*/
  ul{
    list-style: $none;
    margin-top: -1em !important;
    margin-left: -2.2rem !important;
  }
  /*элементы списка*/
  ul li{
    position: relative;
    padding: 5px 0 10px 40px;
    cursor: $cursor_default;
    /*свой маркер - кружок*/
    &:before{
      border-radius: $circle;
      width: 12px;
      height: 12px;
      background: #77a3db;
      content: "";
      left: 0;
      transition: .3s ease-in-out;
      top: 27px;
    }
    /*черточки (полосочки)*/
    &:after{
      width: 1px;
      bottom: -12px;
      content: "";
      left: 6px;
      top: 48px;
    }
    /*свой маркер - кружок, черточки (полосочки)*/
    &:before, &:after{position: absolute;}
    /*при наведении*/
    &:hover:before{box-shadow: 0 0 0 10px rgba(0,0,0,.2)}
    /*последний элемент*/
    &:last-child:after{content: $none;}
  }
}
/*Компонент - "Ключевые навыки"*/
#Skills{
  /*текст в компоненте "Ключевые навыки"*/
  .text{
    text-align: $center_text;
    font-weight: $font-weight400;
  }
  /*svg навыков (языков, фреймворков, ..)*/
  svg{
    width: 78px;
    height: 78px;
    display: block;
    margin: $center_block 2%;
    backdrop-filter: blur(5px);
    border-radius: $circle;
    padding: 10%;
  }
  /*блоки под svg и название*/
  .flex-container{
    margin: 0 5%;
    /*блок под svg и название*/
    & > div{
      width: 12.5%;
      margin: 0 2% 2%;
      cursor: $cursor_default;
      border-radius: 15px;
      padding: 1%;
      /*при наведении*/
      &:hover{
        transition: $time;
        transform: scale(1.09);
      }
    }
  }
}
/*Компонент - "Портфолио"*/
#Works{
  /*блоки с работами*/
  .flex-container{
    /*блоки с работой*/
    & > div{
      width: 31%;
      margin: 0 1% 2%;
      padding: 1%;
      position: relative;
      /*при наведении*/
      &:hover{
        transition: $time;
        transform: scale(1.01);
        /*картинки*/
        img{filter: brightness(50%);}
        /*блок с ссылками на проект*/
        .link_work{display: block;}
      }
    }
    /*блок с ссылками на проект, текст технологии*/
    .link_work,.text_technology{position: absolute;}
    /*блок с ссылками на проект*/
    .link_work{
      display: $none;
      top: 65px;
      margin: 0 30%;
      width: 93.5%;
    }
    /*текст технологии*/
    .text_technology{
      font-weight: $font-weight400;
      font-size: 1rem;
      border-radius: 10px;
      padding: 2% 5%;
      top: 160px;
    }
    /*название компании*/
    .name_company{
      text-align: $center_text;
      color: $color_highlight;
      font-weight: $font-weight500;
      width: $percent100;
      padding: 5% 0 1%;
      margin: 0;
      cursor: $cursor_default;
    }
    /*svg*/
    svg{
      width: 50px;
      height: 50px;
      margin: 2%;
      background: rgba(222, 222, 222, 0.6);
      padding: 3%;
      border-radius: $circle;
      cursor: $cursor_pointer;
      /*при наведении*/
      &:hover{
        width: 45px;
        height: 45px;
      }
    }
    /*картинки*/
    img{
      width: $percent100;
      filter: brightness(94%);
      border-radius: 5px;
    }
    /*название технологии*/
    .name_technology{
      width: $percent100;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    /*текст*/
    .text{
      font-size: 1.1rem;
      margin: 0;
    }
    /*название технологии, текст*/
    .name_technology, .text{cursor: $cursor_default;}
  }
}
/*Компонент - "Контакты"*/
#Contacts{
  /*блоки с контактной информацией*/
  .flex-container{
    margin: 0 10% 0;
    /*блок с контактной информацией*/
    & > div{
      text-align: $center_text;
      width: 45%;
      margin: 1.5%;
      padding: 1% 4%;
      /*при наведении*/
      &:hover{
        transition: $time;
        transform: scale(1.01);
      }
      /*svg*/
      svg{
        display: block;
        margin: $center_block;
        width: 50px;
        height: 50px;
        border: 2.5px solid $color_highlight;
        border-radius: $circle;
      }
      /*название контактной информации*/
      .name{
        font-weight: $font-weight500;
        padding-right: 2%;
      }
      /*сетка бутстрап*/
      .col{
        display: flex;
        align-items: center;
      }
      /*текст*/
      .text{margin: 0;}
    }
  }
  /*цвет svg*/
  .svg_color{fill: $color_highlight;}
  .svg_color1{fill: #1a4376;}
}
/*Компонент - "Футер"*/
#Myfooter{
  /*блок с svg*/
  .svgFooter{
    margin: 0 0 0 auto;
    width: 15%;
  }
  /*текст*/
  .text{
    float: left;
    padding-top: .25%;
  }
  /*блоки с контактной информацией*/
  .flex-container > div{
    width: 25%;
    /*svg*/
    svg{
      width: 30px;
      border: 1px solid #dedede;
      height: 30px;
      border-radius: $circle;
      padding: 4%;
    }
    /*при наведении*/
    &:hover{
      transition: $time;
      transform: scale(1.09);
    }
  }
  .svg_color{fill: #ffffff;}
  .svg_color1{fill: #868080;}
}

 /***********************АДАПТИВНОСТЬ******************/
@media screen and (max-width: 350px){
  /*текст технологии, текст, пункты меню*/
  .text_technology, .text,.nav-link, .navbar-brand{
    font-size: 1rem !important;
    line-height: 1rem !important;
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*блоки под svg и название*/
    .flex-container > div{width: 35% !important;}
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*сетка бутстрап*/
    .row{padding: 0 !important;}
  }
}
@media screen and (max-width: 500px){
  /*Компоненты - "Об мне", "Ключевые навыки", "Портфолио", "Контакты"*/
  #About, #Skills, #Works, #Contacts{padding: 6% 3%;}
  /*меню*/
  .navbar{padding: 0 2%;}
  /*заголовок*/
  h1,h2{font-size: 1.4rem !important;}
  /*Компоненты - "Об мне", "Ключевые навыки","Портфолио","Контакты"*/
  #About, #Skills, #Works, #Contacts{padding: 1rem 0;}
  /*текст технологии, текст, пункты меню, название*/
  .text_technology, .name, .text, .nav-link, .navbar-brand, #Works .flex-container .text, #About .name{
    font-size: 1rem;
    line-height: 1.25rem;
  }
  /*Компонент - "Главный"*/
  #Home{
    /*фраза-Junior Frontend-разработчик*/
    .front{font-size: 1.7rem;}
  }
  /*Компонент - "Об мне"*/
  #About{
    /*список*/
    ul{margin-left: -4.2rem !important;}
    /*пункты списка*/
    ul li{padding: 5px 0 5px 40px;}
    /*сетка бутстрап*/
    .row{
      flex-direction: column;
      /*сетка бутстрап*/
      .col-4{
         max-width: $percent100;
        /*картинка*/
        img{
          width: 40%;
          margin: 0 30% 0;
        }
        /*имя*/
        .name{padding: 2% 0 6%;}
        /*блок с количеством проектов*/
        .projects{display: $none;}
      }
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*блок под svg и название*/
    .flex-container{margin: 0 .5%;}
    /*блоки под svg и название*/
    .flex-container  > div{width: 28%;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 55px;
      height: 55px;
    }
  }
  /*Компонент - "Портфолио"*/
  #Works{
    /*блоки с работами*/
    .flex-container > div{
      width: $percent100;
      padding: 2.5%;
      margin: 0 2% 4%;
      /*текст технологии*/
      .text_technology{top: 170px;}
      /*картинки*/
      img{
        width: $percent100;
        height: 180px;
      }
    }
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container{
      margin: 0;
      /*блок с контактной информацией*/
      & > div{
        width: $percent100;
        padding: 1%;
        /*svg*/
        svg{
          width: 35px;
          height: 35px;
        }
      }
      /*сетка бутстрап*/
      .row{padding: 0 5%;}
    }
  }
  /*Компонент - "Футер"*/
  #Myfooter{
    padding: 5%;
    /*текст*/
    .text{
      float: inherit;
      text-align: $center_text;
      padding-bottom: 3%;
    }
    /*блок с svg*/
    .svgFooter{
      margin: $center_block 2%;
      width: 45%;
    }
  }
}
@media screen and (min-width: 500px)and (max-width: 768px){
  /*меню*/
  .navbar{padding: 0 2%;}
  /*заголовки*/
  h1, h2{font-size: 1.4rem !important;}
  /*текст дтехнологии, текст, пункты меню*/
  .text_technology, .text,.nav-link,.navbar-brand{
    font-size: 1.1rem;
    line-height: 1.25rem;
  }
  /*Компонент - "Об мне"*/
  #About{
    /*пункты списка*/
    ul li{padding: 5px 0 5px 40px;}
    /*сетка бутстрап*/
    .row{
      flex-direction: column;
      /*сетка бутстрап*/
      .col-4{
        max-width: $percent100;
        /*картинки*/
        img{
          width: 40%;
          margin: 0 30% 0;
        }
        /*имя*/
        .name{padding: 2% 0 6%;}
        /*блок с количеством проектов*/
        .projects{display: $none;}
      }
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*блок под svg и название*/
    .flex-container{margin: 0 .5%;}
    /*блоки под svg и название*/
    .flex-container  > div{width: 16%;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 55px;
      height: 55px;
    }
  }
  /*Компонент - "Портфолио"*/
  #Works{
    /*блоки с работами*/
    .flex-container > div{
      width: $percent100;
      padding: 2%;
      margin: 0 2% 4%;
      /*текст технологии*/
      .text_technology{top: 210px;}
    }
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container{
      margin: 0 14%;
      /*блок с контактной информацией*/
      & > div{
        width: $percent100;
        padding: 1%;
        /*svg*/
        svg{
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  /*Компонент - "Футер"*/
  #Myfooter{
    padding: 2% 5%;
    /*текст*/
    .text{
      float: inherit;
      text-align: $center_text;
      padding-bottom: 3%;
    }
    /*блок с svg*/
    .svgFooter{
      margin: $center_block;
      width: 40%;
    }
  }
}
@media screen and (min-width: 768px)and (max-width: 992px){
  .navbar{padding: 0 5%;}
  /*текст технологии, текст, пункты меню*/
  .text_technology,.text,.nav-link,.navbar-brand{line-height: 1.25rem;}
  /*Компонент - "Об мне"*/
  #About{
    /*сетка бутстрап*/
    .row{
      flex-direction: column;
      /*сетка бутстрап*/
      .col-4{
        max-width: $percent100;
        /*картинки*/
        img{
          width: 40%;
          margin: 0 30% 0;
        }
        /*имя*/
        .name{padding: 2% 0 4%;}
        /*блок с количеством проектов*/
        .projects{display: $none;}
      }
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*блок под svg и название*/
    .flex-container{margin: 0 .5%;}
    /*блоки под svg и название*/
    .flex-container  > div{width: 12.5%;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 60px;
      height: 60px;
    }
  }
  /*Компонент - "Портфолио"*/
  #Works{
    /*блоки с работами*/
    .flex-container > div{
      width: 47.5%;
      margin: 0 1.2% 2.3%;
      /*текст технологии*/
      .text_technology{top: 150px;}
    }
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container{
      margin: 0;
      /*блок с контактной информацией*/
      & > div{
        width: 46.5%;
        padding: 1%;
        /*svg*/
        svg{
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  /*Компонент - "Футер"*/
  #Myfooter{
    padding: 1.5% 5%;
    /*блок с svg*/
    .svgFooter{width: 25%;}
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px){
  .navbar{padding: 0 7%;}
  /*текст, пункты меню, фраза в логотипе по всей странице*/
  .text,.nav-link, .navbar-brand{line-height: 1.4rem;}
  /* текст, пункты меню, название компании, имя, текст технологии,*/
  .text, .nav-link, .navbar-brand, .name_company, .name, .text_technology{font-size: 1.1rem;}
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 70px;
      height: 70px;
    }
  }
  /*Компонент - "Портфолио"*/
  #Works{
    /*текст технологии*/
    .flex-container .text_technology{top: 130px;}
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container{
      margin: 0 5% 0;
      /*svg*/
      & > div svg{
        width: 40px;
        height: 40px;
      }
    }
  }
  /*Компонент - "Футер"*/
  #Myfooter{
    padding: 1.5% 7%;
    /*блок с svg*/
    .svgFooter{width: 20%;}
  }
}
</style>
