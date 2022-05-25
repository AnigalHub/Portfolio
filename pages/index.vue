<template>
  <div>
    <Home/>
    <Navbar/>
    <About/>
    <Skills/>
    <Works/>
    <Myfooter/>
  </div>
</template>

<script>
import Home from "~/components/home";
import Navbar from "~/components/navbar";
import About from "~/components/about";
import Skills from "~/components/skills";
import Works from "~/components/works";
import Contacts from "~/components/contacts";
import Myfooter from "~/components/myfooter";
import Education from "~/components/education";
export default {
  components: {Education, Myfooter, Contacts, Works, Skills, About, Navbar, Home}
}
</script>

<style>
  /*меню*/
  .navbar-light .navbar-toggler {border-color: white !important;}
  /*фраза в логотипе*/
  .navbar-brand{padding-bottom: 0 !important;}
</style>
<style lang="scss">
/*сетка бутстрап*/
.row{margin: 0 auto !important;}
/*контейнер на блоки посередине экрана*/
.container {padding: 10px !important;}
/*ссылки*/
a{color: #2868ad !important;}
/*Компоненты меню и футера*/
#Nav,#Myfooter{
  background: #030407;
  color: white;
}
/*Компонент меню*/
#Nav{box-shadow: 0 6px 6px -6px rgba(255, 255, 255, 0.63);}
/*Компонент футера*/
#Myfooter{
  padding: 0.5rem 0 !important;
  text-align: center;
}
/*заголовки, текст, пункты меню, фраза в логотипе по всей странице*/
.text,.text_works,.name,.nav-link,.navbar-brand{font-family: 'Roboto', sans-serif;}
/*заголовки*/
h1{
  margin: 0 auto;
  text-shadow: .45px .45px .45px #000;
  //font-weight: 500 !important;
  font-size: 1.6rem !important;
  text-align: center;
  padding-bottom: 2.5%;
}
h4{
  margin-bottom: 0 !important;
  font-size: 1.2rem !important;
  //font-weight: 700;
}
/*заголовок h4, имя, фраза "Junior Frontend-разработчик*/
h1, .name_works, #Home .name, #Home .front{font-family: 'Roboto', sans-serif;}
/*заголовок h4, фраза "Junior Frontend-разработчик*/
h1,.name, #Home .front{color: #ffc9a1;}
/*текст, пункты меню, фраза в логотипе*/
.text,.nav-link,.navbar-brand{line-height: 1.8rem;}
/*текст, пункты меню, фраза в логотипе,текст для компонента "Мои работы"*/
.text,.nav-link,.navbar-brand,.text_works,.name{font-size: 1.15rem;}
/*текст для компонента "Мои работы"*/
.text_works{line-height: 1.4rem;}
/*svg в логотипе*/
#logo{
  width: 60px;
  height: 50px;
}
/*контейнер на блоки посередине экрана (в меню)*/
#Nav .container {padding: 0 !important;}
/*меню*/
.navbar{padding: 0 !important;}
/*все кнопки в меню,блок под логотип*/
.navbar .nav-link,.navbar-brand{color: white !important;}
/*все кнопки в меню*/
.nav-link{padding: 0.5rem 2rem !important;}
/*контейнер, который включает в себя повтор блоков*/
.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin: 1% 12% 0 15%;
}
/*Компоненты - "Об мне","Образование", "Ключевые навыки", "Мои работы"*/
#About, #Education, #Skills, #Works, #Contacts{padding: 3% 0 2.5%;}
/*"Контакты"*/
#Contacts{padding:1% 0 2%;}

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
  #Skills,#Contacts{background: #ffffff;}
  /*Компоненты - "Об мне", "Образование"*/
   #About,#Works{background: #f4f4f4;}
  /*Компоненты - "Об мне","Ключевые навыки", "Контакты", "Об мне", "Образование"*/
  #About, #Skills, #Contacts, #Works, #Education{color: #090c13 !important;}
  /*Компонент - "Об мне"*/
  #About{
    /*список - черточки (полосочки)*/
    ul li:after {border-left: 1px dotted black;}
  }
  /*Компонент - "Мои работы"*/
  #Works{
    .flex-container{
      margin: 1% 0;
    }
    /*блоки под каждую работу*/
    .flex-container > div {
      //background: #eef4f8;
      box-shadow: 0 4px 24px rgba(0,0,0,.12);
      /*при наведении*/
      &:hover {box-shadow: 2px 6px 15px rgba(0,0,0,.4);}
      /*заголовок*/
      h4{
        background: rgba(193, 193, 191, 0.7);
        border-bottom: rgb(177, 177, 175);
      }
      /*ссылка на код - svg*/
      .reference{stroke:#000;}
    }
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*ссылки (для данного компонента)*/
    a{color: #090c13 !important;}
  }
  /*цвет svg*/
  .express_svg,.svg_color{fill: #000;}
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
  #Skills,#Contacts{background: #0c111c;}
  /*Компоненты -  "Мои работы","Образование"*/
  #Works, #About {background: #090c13;}
  /*Компоненты - "Об мне","Ключевые навыки", "Контакты", "Об мне", "Образование"*/
  #About, #Skills, #Contacts, #Works, #Education{color: #afadad !important;}
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
      background: #011624;
      box-shadow: 2px 5px 6px rgba(80, 79, 79, 0.4);
      /*при наведении*/
      &:hover {box-shadow: 2px 5px 6px rgba(80, 79, 79);}
      /*заголовок*/
      h4{
        background: #010f18;
        border-bottom: 1.5px solid black;
      }
      /*ссылка на код - svg*/
      .reference{stroke:#afadad;}
    }
  }
  /*Компонент - "Контакты"*/
  #Contacts {
    /*ссылки (для данного компонента)*/
    a{color: #afadad !important;}
  }
  /*цвет svg*/
  .express_svg,.svg_color{fill:  #afadad;}
}

/*Компонент - "Главный"*/
#Home{
  background: url("../static/background.jpg") no-repeat;
  background-size: 100% 100%;
  /*фраза-Junior Frontend-разработчик*/
  .front{
    //opacity: .98;
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;

    text-align: center;
  }
  span{
    font-family: 'Quicksand', sans-serif;
    font-size: 2rem;
  }
}
/*Компонент - "Об мне"*/
#About{
  .flex-container {
    margin: 1% 0 0 0;
  }
 .row{
   margin: 0 5% 0 8%!important;
 }
  img{
    width: 100%;
  }
  /*имя*/
  .name{
    font-size: 1.8rem;
    color: #000;
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
    padding: 15px 0 15px 40px;
    cursor: default;
    /*свой маркер - кружок*/
    &:before {
      position: absolute;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      background: #de6a13;
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
/*Компонент - "Образование"*/
#Education{
  /*сетка бутстрап*/
  .col{padding-left: 12%;}
  /*svg*/
  svg{
    width: auto;
    height: 90%;
    display: block;
    margin: 0 auto;
  }
}
/*Компонент - "Ключевые навыки"*/
#Skills{
  img{ width: 70%}
  /*текст в компоненте "Ключевые навыки"*/
  .text{
    text-align: center;
  }
  .svgd{
    //background:
    margin: 0 auto;
   // width: 65px;
   // height: 65px;
    border-radius: 50%;
    border: 2px solid rgba(255, 201, 161, 0.81);
  }
  /*svg навыков (языков, фреймворков, ..)*/
  svg{
    width: 64px;
    height: 64px;
    display: block;
    margin: 0 auto;
  }
  /*блоки под svg и название*/
  .flex-container  > div {
    width: 20%;
    margin: 0 2% 2%;
    cursor: default;
    border-radius: 15px;
    background: white;
    padding: 1%;
    box-shadow: 0 4px 12px rgba(0,0,0,.12);
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
    margin: 1% 10%;
  }
  /*блоки с работами*/
  .flex-container  > div {
    padding: 1%;
    background: white;
    width:  31%;
    margin: 0 1% 3%;
    position: relative;
    /*при наведении*/
    &:hover{
      .name_works{
        bottom: 4%;
        .text_works{
          display: block;
        }
      }
    }
    .text_works{
      display: none;
      color: #000;
    }
    .name{
      color: #ffc9a1;
      text-shadow: 0.4px 0.38px 0.4px #000;
    }
    /*при наведении*/
    /*картинки*/
    img {
      width: 100%;
      height: 170px;
      cursor: pointer;
    }
    /*заголовок, параграф*/
    h4,p{
      /*padding: 1.25% 2% !important;*/
      /*cursor: default;*/
    }
    .name_works{
      padding: 2%;
      width: 96%;
      background: white;
      position: absolute;
      bottom: .1%;
    }
    /*абзац*/
    p{
      margin-bottom: 0 !important;
    }
  }
}
/*Компонент - "Контакты"*/
#Contacts{
  /*текст в компоненте "Контакты"*/
  .text{text-align: center;}
  /*блоки с контактной информацией*/
  .flex-container > div {
    text-align: center;
    width: 25%;
    /*при наведении*/
    &:hover{
      transition: 1s;
      transform: scale(1.09);
    }
  }
  /*svg*/
  svg{
    display: block;
    margin: 0 auto;
    width: 55px;
    height: 55px;
  }
}
#Myfooter{
  .flex-container{
    margin: 0 37% 1%;
  }
  /*блоки с контактной информацией*/
  .flex-container > div {
    text-align: center;
    width: 25%;
    /*svg*/
    svg{
      display: block;
      margin: 0 auto;
      width: 36px;
      height: 36px;
    }
    /*при наведении*/
    &:hover{
      transition: 1s;
      transform: scale(1.09);
    }
    .text{
      margin-bottom: 2%;
    }
  }

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
  /*Компонент - "Образование"*/
  #Education {
      /*элемент сетки бутстрап*/
     .row .col {padding-left: 4% !important;}
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills {
    /*блоки под svg и название*/
    .flex-container > div {width: 30% !important;}
  }
  /*Компонент - "Контакты"*/
  #Contacts {
    /*блоки с контактной информацией*/
    .flex-container > div {width: 100% !important;}
  }
}
@media screen and (max-width: 500px) {
  /*Компоненты - "Об мне", "Ключевые навыки","Мои работы","Отзывы","Контакты"*/
  #About, #Skills, #Works, #Contacts {padding: 1rem 0;}
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works, .text, .nav-link, .navbar-brand {
    font-size: 1.1rem;
    line-height: 1.15rem;
  }
  /*заголовок*/
  h4 {font-size: 1.15rem !important;}
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
  /*Компонент - "Образование"*/
  #Education {
    /*сетка бутстрап*/
    .row {
      flex-direction: column-reverse;
      /*элемент сетки бутстрап*/
      .col {padding-left: 7%;}
      /*svg*/
      svg {display: none;}
    }
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
  /*Компонент - "Контакты"*/
  #Contacts {
    /*блоки с контактной информацией*/
    .flex-container > div {width: 50%;}
    /*svg контактной информации*/
    svg {
      width: 40px;
      height: 40px;
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
  /*Компонент - "Главный"*/
  #Education{
    /*сетка бутстрап*/
    .row {
      flex-direction: column-reverse;
      /*элемент сетки бутстрап*/
      .col{padding-left: 7%;}
      /*svg*/
      svg{display: none;}
    }
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
  /*Компонент - "Контакты"*/
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container > div {width:50%;}
    /*svg контактной информации*/
    svg{
      width: 45px;
      height: 45px;
    }
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
  /*Компонент - "Образование"*/
  #Education{
    /*svg*/
    svg{
      margin-left: -40%;
      height: 140px;
    }
  }
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
  /*Компонент - "Контакты"*/
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container > div {width:50%;}
    /*svg контактной информации*/
    svg{
      width: 50px;
      height: 50px;
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
