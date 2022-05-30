<template>
  <div>
    <Home/>
    <Navbar/>
    <About/>
    <Skills/>
    <Works/>
    <Contact/>
    <Myfooter/>
  </div>
</template>

<script>
import Home from "~/components/home";
import Navbar from "~/components/navbar";
import About from "~/components/about";
import Skills from "~/components/skills";
import Works from "~/components/works";
import Myfooter from "~/components/myfooter";
import Contact from "~/components/contact";

export default {
  components: {Contact, Myfooter, Works, Skills, About, Navbar, Home}
}
</script>

<style>
  /*меню*/
  .navbar-light .navbar-toggler {border-color: white !important;}
  /*фраза в логотипе*/
  .navbar-brand{padding-bottom: 0 !important;}
</style>
<style lang="scss">
 $color_highlight:#5584bf;
 $cursor_pointer:pointer;

/*Компоненты меню и футера*/
#Nav,#Myfooter{
  background: #030407;
  color: #dedede;
}
/*Компонент футера*/
#Myfooter{
  padding: 1.5% 14%;
}
a{
  text-decoration: none !important;
  cursor: $cursor_pointer !important;
}
/*заголовки, текст, пункты меню, фраза в логотипе по всей странице*/
h1, #Home .name_company, .text,.text_technology,
.name_company,.name, .nav-link,.navbar-brand{font-family: 'Roboto', sans-serif;}
/*заголовки*/
h1{
  color: #a1cbff;
  font-weight: 200;
  text-shadow: 1px 1px 0 #000;
  padding: 3%;
}
h2{
  padding-bottom: 3%;
}
h1,h2{
  margin: 0 auto;
  text-align: center;
}
/*заголовок h1, фраза "Junior Frontend-разработчик*/
h2,span,.name{
  color: $color_highlight;
}
.text,h2,span,.name{
  font-weight: 300;
}
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
  font-weight: 200;
}
/*все кнопки в меню*/
.nav-link{padding: 0.5rem 1rem !important;}
/*контейнер, который включает в себя повтор блоков*/
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
/*Компоненты - "Об мне", "Ключевые навыки", "Мои работы"*/
#About, #Skills, #Works, #Contact{padding: 3%;}

/************ СВЕТЛАЯ ТЕМА ***********************/
@media screen and (prefers-color-scheme: light){
  $background_elements: white;
  $color_text: black;
  $box-shadow: 0 4px 12px rgb(0 0 0 / 12%);
  $box-shadow_hover: 2px 6px 15px rgba(0,0,0,.4);

  /*ссылки*/
  a{color: $color_text !important;}
  /*Компоненты - "Об мне","Ключевые навыки", "Контакты"*/
  #Skills,#Contact{background: $background_elements;}
  /*Компоненты - "Об мне", "Образование"*/
   #About,#Works{background: #f4f4f4;}
  /*Компоненты - "Об мне","Ключевые навыки", "Контакты", "Об мне", "Образование"*/
  #About, #Skills, #Works{color: #090c13 !important;}
  /*Компонент - "Об мне"*/
  #About{
    /*список - черточки (полосочки)*/
    ul li:after {border-left: 1px dotted $color_text;}
    .projects{
      background-color: #f9f9f9;
    }
  }
  #Skills{
    svg{
      background: hsla(0,0%,100%,.2);
      box-shadow: $box-shadow;
    }
    .express_svg{fill: #000;}
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки под каждую работу*/
    .flex-container > div {
      background: $background_elements;
      box-shadow: $box-shadow;
      /*при наведении*/
      &:hover {box-shadow: $box-shadow_hover;}
      .name_technology, .text_technology{
        background-color: $background_elements;
      }
    }
  }
  #Contact{
    /*блоки с контактной информацией*/
    .flex-container > div {
      background: $background_elements;
      box-shadow: $box-shadow;
      /*при наведении*/
      &:hover {box-shadow: $box-shadow_hover;}
    }
  }
}
/************ ТЕМНАЯ ТЕМА ***********************/
@media screen and (prefers-color-scheme: dark){
  $color_text:#afadad;
  $box-shadow_hover: 0 0 12px hsla(0,0%,100%,.4);

  /*ссылки*/
  a{color: $color_text !important;}
  /*Компоненты - "Об мне", "Ключевые навыки", "Контакты"*/
  #Skills, #Contact {background: #0c111c;}
  /*Компоненты -  "Мои работы","Образование"*/
  #Works, #About {background: #090c13;}
  /*Компоненты - "Об мне","Ключевые навыки", "Контакты", "Об мне", "Образование"*/
  #About, #Skills, #Works, #Contact {color: $color_text;}
  /*Компонент - "Об мне"*/
  #About{
    /*список - черточки (полосочки)*/
    ul li:after {border-left: 1px dotted $color_text;}
    .projects{
      background: #080a11;
    }
  }
  #Skills{
      svg{
        background: #111623;
        box-shadow: 0 0 12px hsla(0,0%,100%,.15);
      }
    .express_svg{fill: #afadad;}
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки под каждую работу*/
    .flex-container > div {
      box-shadow: 0 0 12px hsla(0,0%,100%,.15);
      /*при наведении*/
      &:hover {box-shadow: $box-shadow_hover;}
      .name_technology, .text_technology{
        background: #090c13;
      }
    }
  }
  #Contact{
    /*блоки с контактной информацией*/
    .flex-container > div {
      background: #111623;
      box-shadow: 0 0 12px hsla(0,0%,100%,.1);
      /*при наведении*/
      &:hover {box-shadow: $box-shadow_hover;}
    }
  }
}

/*Компонент - "Главный"*/
#Home{
  background: url("../static/background.jpg") no-repeat;
  background-size: 100% 100%;
}
/*Компонент - "Об мне"*/
#About{
  /*блоки под svg и название*/
  .projects{
    width: 60%;
    margin: 7% auto 2%;
    cursor: $cursor_pointer;
    border-radius: 10px;
    padding: 3%;
    text-align: center;
    .number{
      font-weight: 400;
      font-size: 1.8rem;
    }
    /*при наведении*/
    &:hover{
      transition: 1s;
      transform: scale(1.09);
    }
  }
 .row{
   margin: 0 5% 0 8%;
 }
  img{
    width: 75%;
    margin: -5% 15% 0;
    border-radius: 50%;
  }
  /*имя*/
  .name{
    font-size: 1.5rem;
    padding-top: 6%;
    color: $color_highlight;
    font-weight: 400;
    text-align: center;
    margin-bottom: .5%;
    font-family: 'Roboto', sans-serif;
  }
  /*список ненумерованный*/
  ul{
    list-style: none;
    margin-top: -1em !important;
    margin-left: -2.2rem !important;
  }
  /*элементы списка*/
  ul li {
    position: relative;
    padding: 5px 0 10px 40px;
    cursor: default;
    /*свой маркер - кружок*/
    &:before {
      position: absolute;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      background: #77a3db;
      content: "";
      left: 0;
      transition: .3s ease-in-out;
      top: 27px;
    }
    /*черточки (полосочки)*/
    &:after {
      position: absolute;
      width: 1px;
      bottom: -12px;
      content: "";
      left: 6px;
      top: 48px;
    }
    /*при наведении*/
    &:hover:before{box-shadow: 0 0 0 10px rgba(0,0,0,.2)}
    /*последний элемент*/
    &:last-child:after {content: none;}
  }
}
/*Компонент - "Ключевые навыки"*/
#Skills{
  /*текст в компоненте "Ключевые навыки"*/
  .text{
    text-align: center;
    font-weight: 400;
  }
  /*svg навыков (языков, фреймворков, ..)*/
  svg{
    width: 78px;
    height: 78px;
    display: block;
    margin: 0 auto 2%;
    backdrop-filter: blur(5px);
    border-radius: 50%;
    padding: 10%;
  }
  /*блоки под svg и название*/
  .flex-container{
    margin: 0 5%;
    & > div {
      width: 12.5%;
      margin: 0 2% 2%;
      cursor: default;
      border-radius: 15px;
      padding: 1%;
      /*при наведении*/
      &:hover{
        transition: 1s;
        transform: scale(1.09);
      }
    }
  }
}
/*Компонент - "Мои работы"*/
#Works{
  /*блоки с работами*/
  .flex-container{
    & > div {
      width: 31%;
      margin: 0 1% 2%;
      padding: 1%;
      position: relative;

      /*при наведении*/
      &:hover{
        transition: 1s;
        transform: scale(1.01);
        /*картинки*/
        img {
          filter: brightness(50%);
        }
        .link_work{
          display: block;
        }
      }
    }
    .link_work,.text_technology{
      position: absolute;
    }
    .link_work{
      display: none;
      top: 65px;
      margin: 0 30%;
      width: 93.5%;
    }
    .text_technology{
      font-weight: 400;
      font-size: 1rem;
      border-radius: 10px;
      padding: 2% 5%;
      top: 160px;
    }
    .name_company{
      text-align: center;
      color: $color_highlight;
      font-weight: 500;
      width: 100%;
      padding: 5% 0 1%;
      margin: 0;
    }
    /*svg*/
    svg {
      width: 50px;
      height: 50px;
      margin: 2%;
      background: rgba(222, 222, 222, 0.6);
      padding: 3%;
      border-radius: 50%;
      cursor: $cursor_pointer;
      /*при наведении*/
      &:hover{
        width: 45px;
        height: 45px;
      }
    }
    /*картинки*/
    img {
      width: 100%;
      filter: brightness(94%);
      border-radius: 5px;
      cursor: $cursor_pointer;
    }
    .name_technology {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center
    }
    .text{
      font-size: 1.1rem;
      margin: 0;
    }
  }
}
#Contact{
  /*блоки с контактной информацией*/
  .flex-container{
    margin: 0 10% 0;
    & > div {
      text-align: center;
      width: 45%;
      margin: 1.5%;
      padding: 1% 4%;
      &:hover{
        transition: 1s;
        transform: scale(1.01);
      }
      /*svg*/
      svg {
        display: block;
        margin: 0 auto;
        width: 50px;
        height: 50px;
        border: 2.5px solid $color_highlight;
        border-radius: 50%;
      }
      .name{
        font-weight: 500;
        padding-right: 2%;
      }
      .col{
        display: flex;
        align-items: center
      }
      .text{
        margin: 0;
      }
    }
  }
  /*цвет svg*/
  .svg_color{fill: $color_highlight;}
  .svg_color1{fill: #1a4376;}
}
#Myfooter{
  .svgFooter{
    margin: 0 0 0 auto;
    width: 15%;
  }
  .text{
    float: left;
    padding-top: .25%;
  }
  /*блоки с контактной информацией*/
  .flex-container > div {
    width: 25%;
    /*svg*/
    svg{
      width: 30px;
      border: 1px solid #dedede;
      height: 30px;
      border-radius: 50%;
      padding: 4%;
    }
    /*при наведении*/
    &:hover{
      transition: 1s;
      transform: scale(1.09);
    }
  }
  .svg_color{fill: #ffffff;}
  .svg_color1{fill: #868080;}
}

 /***********************АДАПТИВНОСТЬ******************/
@media screen and (max-width: 350px) {
  /*заголовки, текст, пункты меню, фраза в логотипе по всей странице*/
  .text_technology,.text,.nav-link,.navbar-brand{
    font-size: 1rem !important;
    line-height: 1rem !important;
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills {
    /*блоки под svg и название*/
    .flex-container > div {width: 35% !important;}
  }
  #Contact{
      .row{
        padding: 0 !important;
      }

  }
}
@media screen and (max-width: 500px) {
  /*Компоненты - "Об мне", "Ключевые навыки", "Мои работы"*/
  #About, #Skills, #Works, #Contact{padding: 6% 3%;}
  .navbar {
    padding: 0 2%;
  }
  /*заголовок*/
  h1,h2{font-size: 1.4rem !important;}
  /*Компоненты - "Об мне", "Ключевые навыки","Мои работы","Отзывы","Контакты"*/
  #About, #Skills, #Works{padding: 1rem 0;}
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_technology,.name, .text, .nav-link, .navbar-brand,#Works .flex-container .text, #About .name {
    font-size: 1rem;
    line-height: 1.25rem;
  }
  /*Компонент - "Главный"*/
  #Home {
    /*фраза-Junior Frontend-разработчик*/
    .front {font-size: 1.7rem;}
  }
  #About{
    ul {
      margin-left: -4.2rem !important;
    }
    ul li {
      padding: 5px 0 5px 40px;
    }
    .row{
      flex-direction: column;
      .col-4{
        max-width: 100%;
        img {
          width: 40%;
          margin: 0 30% 0;
        }
        .name{
          padding: 2% 0 6%;
        }
        .projects {
          display: none;
        }
      }
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    .flex-container  {
      margin: 0 .5%;
    }
    /*блоки под svg и название*/
    .flex-container  > div {width: 28%;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 55px;
      height: 55px;
    }
  }
  /*Компонент - "Мои работы"*/
  #Works {
    /*блоки с работами*/
    .flex-container > div {
      width: 100%;
      padding: 2.5%;
      margin: 0 2% 4%;
      .text_technology {
        top: 170px;
      }
      /*картинки*/
      img {
        width: 100%;
       height: 180px;
      }
    }
  }
  #Contact{
    .flex-container {
      margin: 0;
      & > div{
        width: 100%;
        padding: 1%;
        svg {
          width: 35px;
          height: 35px;
        }
      }
      .row{
        padding: 0 5%;
      }
    }
  }
  #Myfooter {
    padding: 5%;
    .text{
      float: inherit;
      text-align: center;
      padding-bottom: 3%;
    }
    .svgFooter{
      margin: 0 auto 2%;
      width: 45%;
    }
  }
}
@media screen and (min-width: 500px)and (max-width: 768px) {
  .navbar {
    padding: 0 2%;
  }
  /*заголовок*/
  h1{font-size: 1.4rem !important;}
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_technology, .text,.nav-link,.navbar-brand{
    font-size: 1.1rem;
    line-height: 1.25rem;
  }
  #About{
    ul li {
      padding: 5px 0 5px 40px;
    }
    .row{
      flex-direction: column;
      .col-4{
        max-width: 100%;
        img {
          width: 40%;
          margin: 0 30% 0;
        }
        .name{
          padding: 2% 0 6%;
        }
        .projects {
          display: none;
        }
      }
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    .flex-container  {
      margin: 0 .5%;
    }
    /*блоки под svg и название*/
    .flex-container  > div {width: 16%;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 55px;
      height: 55px;
    }
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки с работами*/
    .flex-container > div {
      width: 100%;
      padding: 2%;
      margin: 0 2% 4%;
      .text_technology {
        top: 210px;
      }
    }
  }
  #Contact .flex-container {
    margin: 0 14%;
    & > div{
      width: 100%;
      padding: 1%;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  #Myfooter {
    padding: 2% 5%;
    .text{
      float: inherit;
      text-align: center;
      padding-bottom: 3%;
    }
    .svgFooter{
      margin: 0 auto;
      width: 40%;
    }
  }
}
@media screen and (min-width: 768px)and (max-width: 992px) {
  .navbar {
    padding: 0 5%;
  }
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_technology,.text,.nav-link,.navbar-brand{line-height: 1.25rem;}
  #About{
    .row{
      flex-direction: column;
      .col-4{
        max-width: 100%;
        img {
          width: 40%;
          margin: 0 30% 0;
        }
        .name{
          padding: 2% 0 4%;
        }
        .projects {
          display: none;
        }
      }
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    .flex-container  {
      margin: 0 .5%;
    }
    /*блоки под svg и название*/
    .flex-container  > div {width: 12.5%;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 60px;
      height: 60px;
    }
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки с работами*/
    .flex-container > div {
      width: 47.5%;
      margin: 0 1.2% 2.3%;
      .text_technology {
        top: 150px;
      }
    }
  }
  #Contact .flex-container {
    margin: 0;
    & > div{
      width: 46.5%;
      padding: 1%;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  #Myfooter {
    padding: 1.5% 5%;
    .svgFooter{
      width: 25%;
    }
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .navbar {
    padding: 0 7%;
  }
  /*текст, пункты меню, фраза в логотипе по всей странице*/
  .text,.nav-link,.navbar-brand{line-height: 1.4rem;}
  .text, .nav-link, .navbar-brand, .name_company, .name, .text_technology {
    font-size: 1.1rem;
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 70px;
      height: 70px;
    }
  }
  #Works .flex-container .text_technology {
    top: 130px;
  }
  #Contact .flex-container {
    margin: 0 5% 0;
    & > div svg {
      width: 40px;
      height: 40px;
    }
  }
  #Myfooter {
    padding: 1.5% 7%;
    .svgFooter{
      width: 20%;
    }
  }
}
</style>
