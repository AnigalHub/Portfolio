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
/*ссылки*/
a{color: #000 !important;}
/*Компоненты меню и футера*/
#Nav,#Myfooter{
  background: #030407;
  color: white;
}

/*Компонент футера*/
#Myfooter{
  padding: 1.5% 14%;
}
/*заголовки, текст, пункты меню, фраза в логотипе по всей странице*/
.text,.text_works,.name,.nav-link,.navbar-brand{font-family: 'Roboto', sans-serif;}
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
/*заголовок h1, имя, фраза "Junior Frontend-разработчик*/
h1, #Home .name, #Home .front{font-family: 'Roboto', sans-serif;}
/*заголовок h1, фраза "Junior Frontend-разработчик*/
h2,.name,span{
  font-weight: 300;
  color: #5584bf;
}
.text{
  font-weight: 300;
}
/*текст, пункты меню, фраза в логотипе*/
.text,.nav-link,.navbar-brand{line-height: 1.8rem;}
/*текст, пункты меню, фраза в логотипе,текст для компонента "Мои работы"*/
.text,.nav-link,.navbar-brand,.name{font-size: 1.15rem;}
/*текст для компонента "Мои работы"*/
.text_works{line-height: 1.4rem;}
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
  margin: 1% 12% 0 15%;
}
/*Компоненты - "Об мне","Образование", "Ключевые навыки", "Мои работы"*/
#About, #Education, #Skills, #Works, #Contact{padding: 3% 0;}

/************ СВЕТЛАЯ ТЕМА ***********************/
@media screen and (prefers-color-scheme: light){
  /*пункты меню в tabs*/
  .nav-link{color: black !important;}
  /*фраза-Junior Frontend-разработчик*/
  #Home .front{
    text-shadow:
      0 0 3px #000000,
      0 0 70px #000000,
      1.3px 1.25px 0 #321002;
  }
  /*Компоненты - "Об мне","Ключевые навыки", "Контакты"*/
  #Skills{background: #ffffff;}
  /*Компоненты - "Об мне", "Образование"*/
   #About,#Works{background: #f4f4f4;}
  /*Компоненты - "Об мне","Ключевые навыки", "Контакты", "Об мне", "Образование"*/
  #About, #Skills, #Works{color: #090c13 !important;}
  /*Компонент - "Об мне"*/
  #About{
    /*список - черточки (полосочки)*/
    ul li:after {border-left: 1px dotted black;}
  }
  #Skills{
    .flex-container > div{
    background: white;
    }
  }
  /*Компонент - "Мои работы"*/
  #Works{
    .flex-container{
      margin: 1% 0;
    }
    /*блоки под каждую работу*/
    .flex-container > div {
      background: #fff;
      box-shadow: 0 4px 24px rgba(0,0,0,.12);
      /*при наведении*/
      &:hover {box-shadow: 2px 6px 15px rgba(0,0,0,.4);}
      .name_works{
        background: #fff;
      }
    }
  }
  .express_svg{fill: #000;}
}
/************ ТЕМНАЯ ТЕМА ***********************/
@media screen and (prefers-color-scheme: dark){
  /*пункты меню в tabs*/
  .nav-link{color: #afadad !important;}
  /*tabs, активные пункты меню в tabs*/
  .nav-tabs,.nav-link.active{
    color: #afadad !important;
    border-color: #afadad #afadad #afadad;
  }
  /*активные пункты меню в tabs*/
  .nav-link.active{background: #121a2a !important;}
  /*фраза-Junior Frontend-разработчик*/
  #Home .front{
    text-shadow:
      0 0 3px #000000,
      0 0 70px #000000,
      1.3px 1.25px 0 #321002;
  }
  /*Компоненты - "Об мне", "Ключевые навыки", "Контакты"*/
  #Skills{background: #0c111c;}
  /*Компоненты -  "Мои работы","Образование"*/
  #Works, #About {background: #090c13;}
  /*Компоненты - "Об мне","Ключевые навыки", "Контакты", "Об мне", "Образование"*/
  #About, #Skills, #Works, #Education{color: #afadad !important;}
  /*Компонент - "Об мне"*/
  #About{
    /*список - черточки (полосочки)*/
    ul li:after {border-left: 1px dotted #afadad;}
  }
  /*контент модального окошка*/
  .modal-content{
    background: black !important;
    color: #afadad;
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки под каждую работу*/
    .flex-container > div {
      background: #0f1522;
      /*при наведении*/
      &:hover {box-shadow: 2px 5px 6px rgba(80, 79, 79);}
      .name_works{
        background: #0f1522;
      }
    }
  }
  #Skills{
    .flex-container > div{
    background: #0f1522;
  }
  }
}

/*Компонент - "Главный"*/
#Home{
  background: url("../static/background.jpg") no-repeat;
  background-size: 100% 100%;
  /*фраза-Junior Frontend-разработчик*/
  .front{
    text-align: center;
  }
  span{
    font-size: 2rem;
  }
}
/*Компонент - "Об мне"*/
#About{
  .flex-container {
    margin: 1% 18% 0;
  }
  /*блоки под svg и название*/
  .projects{
    width: 60%;
    margin: 12% auto 2%;
    cursor: default;
    background-color: #f9f9f9;
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
   margin: 0 5% 0 8%!important;
 }
  img{
    width: 75%;
    margin: 0 15% 0;
    border-radius: 50%;
  }
  /*имя*/
  .name{
    font-size: 1.5rem;
    padding-top: 6%;
    color: #5584bf;
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
    padding: 5px 0 15px 40px;
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
  img{ width: 70%}
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
    margin: 0 auto;
    backdrop-filter: blur(5px);
    background: hsla(0,0%,100%,.2);
    border-radius: 50%;
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
    padding: 10%;
  }
  .flex-container{
    margin: 0 5%;
  }
  /*блоки под svg и название*/
  .flex-container  > div {
    width: 12%;
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
/*Компонент - "Мои работы"*/
#Works{
  .flex-container{
    margin: 1% 0;
  }
  /*блоки с работами*/
  .flex-container  > div {
    box-shadow: 0 4px 12px rgb(0 0 0 / 12%);
    width: 31%;
    margin: 0 1% 2%;
    padding: 1%;
    position: relative;
    /*при наведении*/
    &:hover{
      .name_works{
        bottom: 4%;
        .text_works{
          display: block;
        }
      }
      .name{
        text-overflow: inherit;
        white-space: normal;
      }
    }
    .text_works{
      color: black;
      font-weight: 400;
        font-size: 1rem;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 2% 5%;
        position: absolute;
        top: 157px;
    }
    .name{
      background-color: #ffffff;
      text-align: center;
      color: #5584bf;
      font-weight: 500;
      width: 100%;
      padding: 5% 0 1%;
    }
    /*картинки*/
    img {
      width: 100%;filter: brightness(94%);
      border-radius: 5px;
      cursor: pointer;
    }
    .text_about{
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      text-align: center;
    }
    .name_works{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center
    }
    /*абзац*/
    p{
      margin-bottom: 0 !important;
    }
  }
}
#Contact{
  .flex-container{
    margin: 0 10% 0;
  }
  /*блоки с контактной информацией*/
  .flex-container > div {
    text-align: center;
    width: 46%;
    box-shadow: 0 4px 12px rgb(0 0 0 / 12%);
    margin: 2% 1% 0;
    padding: 1% 4%;
    /*svg*/
    svg {
      display: block;
      float: left;
      margin: 0 auto;
      width: 50px;
      height: 50px;
      border: 2.5px solid #5584bf;
      border-radius: 50%;
    }
    .name{
      font-weight: 500;
      float: left;
      padding-right: 2%;
    }
    .col{
      display: flex;
      align-items: center
    }
    .inf{
      margin: 0 ;
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      text-align: center;
    }
  }
  /*цвет svg*/
  .svg_color{fill: #5584bf;}
  .svg_color1{fill: #1a4376;}
}
#Myfooter{
  .svgFooter{
    margin: 0 0 0 auto;
    width: 30%;
  }
  /*блоки с контактной информацией*/
  .flex-container > div {
    text-align: center;
    width: 25%;
    /*svg*/
    svg{
      display: block;
      margin: 0 auto;
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
    .text{
      margin-bottom: 2%;
      color: #dedede;
    }
  }
  .svg_color{fill: #ffffff;}
  .svg_color1{fill: #868080;}

}

 /***********************АДАПТИВНОСТЬ******************/
@media screen and (max-width: 350px) {
  /*Компонент - "Главный"*/
  #Home{
    /*имя*/
    .name{font-size: 1.3rem !important;}
    /*фраза-Junior Frontend-разработчик*/
    .front{ font-size: 1.4rem !important;}
  }
  /*заголовки, текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works,.text,.nav-link,.navbar-brand{
    font-size: 1rem !important;
    line-height: 1rem !important;
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills {
    /*блоки под svg и название*/
    .flex-container > div {width: 30% !important;}
  }
}
@media screen and (max-width: 500px) {
  /*Компоненты - "Об мне", "Ключевые навыки","Мои работы","Отзывы","Контакты"*/
  #About, #Skills, #Works{padding: 1rem 0;}
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works, .text, .nav-link, .navbar-brand {
    font-size: 1.1rem;
    line-height: 1.15rem;
  }
  /*Компонент - "Главный"*/
  #Home {
    /*картинка*/
    img {
      width: 100px;
      height: 100px;
    }
    /*имя*/
    .name {font-size: 1.5rem;}
    /*фраза-Junior Frontend-разработчик*/
    .front {font-size: 1.7rem;}
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills {
    /*блоки под svg и название*/
    .flex-container > div {width: 23%;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg {
      width: 45px;
      height: 45px;
    }
  }
  /*Компонент - "Мои работы"*/
  #Works {
    /*пункты меню в tabs*/
    .nav-tabs .nav-item {width: 100%;}
    /*блоки с работами*/
    .flex-container > div {
      width: 100%;
      margin: 0 5% 4% !important;
    }
  }
}
@media screen and (min-width: 500px)and (max-width: 768px) {
  /*Компонент - "Главный"*/
  #Home{
    /*картинка*/
    img{
      width: 100px;
      height: 100px;
    }
    /*фраза-Junior Frontend-разработчик*/
    .front{ font-size: 2rem;}
  }
  /*заголовок*/
  h1{font-size: 1.4rem !important;}
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works, .text,.nav-link,.navbar-brand{
    font-size: 1.1rem;
    line-height: 1.15rem;
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*блоки под svg и название*/
    .flex-container  > div {width: 23%;}
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
      margin: 0 5% 4% !important;
    }
    /*svg*/
    svg{ width: 70%}
  }
}
@media screen and (min-width: 768px)and (max-width: 992px) {
  /*Компонент - "Главный"*/
  #Home{
    /*картинка*/
    img{
      width: 130px;
      height: 130px;
    }
  }
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works,.text,.nav-link,.navbar-brand{line-height: 1.4rem;}
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*блоки под svg и название*/
    .flex-container  > div {width: 18%;}
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
      width: 46%;
      margin: 0 1.2% 2.3%;
    }
  }
}
@media screen and (min-width: 992px)and (max-width: 1200px) {
  /*текст, пункты меню, фраза в логотипе по всей странице*/
  .text,.nav-link,.navbar-brand{line-height: 1.5rem;}
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 70px;
      height: 70px;
    }
  }
}
</style>
