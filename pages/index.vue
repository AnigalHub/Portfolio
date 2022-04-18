<template>
    <div>
      <Home/>
      <Navbar/>
      <About/>
      <Education/>
      <Skills/>
      <Works/>
     <!-- <Reviews/> -->
      <Contacts/>
      <Myfooter/>
    </div>
</template>

<script>
import Home from "~/components/home";
import Navbar from "~/components/navbar";
import About from "~/components/about";
import Skills from "~/components/skills";
import Works from "~/components/works";
import Reviews from "~/components/reviews";
import Contacts from "~/components/contacts";
import Myfooter from "~/components/myfooter";
import Education from "~/components/education";
export default {
  components: {Education, Myfooter, Contacts, Reviews, Works, Skills, About, Navbar, Home}
}
</script>

<style>
  /*меню*/
  .navbar-light .navbar-toggler {border-color: white !important;}
  /*фраза в логотипе*/
  .navbar-brand{padding-bottom: 0 !important;}
  /*контент в карусели*/
  .carousel-caption {
    left: 0 !important;
    right: 0 !important;
    bottom: auto;
    top: 1% !important;
    text-align: inherit !important;
  }
  /*автор в карусели в компоненте "Отзывы"*/
  .carousel-caption.author {text-align: end !important;}
  /*контент в карусели*/
  .w-100 {
    width: 100% !important;
    height: 100% !important;
  }
</style>
<style lang="scss">
/*контейнер на блоки посередине экрана*/
.container {padding: 15px !important;}
/*ссылки*/
a{color: #2868ad !important;}
/*Компоненты меню и футера*/
#Nav,#Myfooter{
  background: #030407;
  box-shadow: 0 6px 6px -6px rgba(255, 255, 255, 0.63);
  color: white;
}
/*Компонент футера*/
#Myfooter{
  padding: 0.5rem 0 !important;
  text-align: center;
}
/*заголовки, текст, пункты меню, фраза в логотипе по всей странице*/
h2,h3,.text,.text_works,.author,.nav-link,.navbar-brand{font-family: 'Piazzolla', serif;}
/*заголовок (название работ)*/
h4{font-family: 'Playfair Display', serif;}
/*заголовки*/
h2{
  margin-left: auto;
  font-family: 'El Messiri', sans-serif;
  font-weight: 500 !important;
  color: #de6a13;
  font-size: 1.6rem !important;
  margin-right: auto;
  text-align: center;
  padding-bottom: 1% !important;
}
h3{
  padding-bottom: 2.5% !important;
  text-align: center;
  font-weight: 800;
}
h4{
  font-size: 1.2rem !important;
 //text-align: center;
  font-weight: 600;
}
/*текст, пункты меню, фраза в логотипе*/
.text,.nav-link,.navbar-brand{
  font-size: 1.2rem;
  line-height: 1.8rem;
}
/*текст для компонента "Мои работы"*/
.text_works{
  font-size: 1.18rem;
  line-height: 1.2rem;
}
/*текст для компонента - "Отзывы" (автор отзыва)*/
.author{font-size: 1.2rem !important;}
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
.navbar .nav-link,.navbar-brand{
  color: white !important;
}
/*все кнопки в меню*/
.nav-link{padding: 0.5rem 1.5rem !important;}

/*контейнер, который включает в себя повтор блоков*/
.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 3%;
}

/************ СВЕТЛАЯ ТЕМА ***********************/
@media screen and (prefers-color-scheme: light){
  /*заголовок*/
  h2 {
   // border-bottom: 2px solid  #090c13 ;
  //  box-shadow: 0 8px 8px -8px  #090c13 ;
  }
  /*Компоненты - "Об мне", "Мои работы", "Контакты"*/
  #About, #Skills,#Reviews,#Contacts{
     padding: 2% 0 3%;
    background: rgba(255, 255, 255, 0.38);
    color: #090c13 !important;
  }
  /*Компоненты - "Об мне", "Ключевые навыки", "Отзывы"*/

    #Works, #Education{
    background: rgba(220, 220, 220, 0.96);
    color: #090c13 !important;
  }
  /*Компоненты - "Об мне", "Ключевые навыки", "Отзывы"*/
  #About, #Skills,#Reviews{
    padding: 2% 0 2%;
  }
  #Contacts{
    padding:1% 0 2%;
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки под каждую работу*/
    .flex-container > div {
      background: #eef4f8;
      box-shadow: 2px 6px 15px rgba(0,0,0,.25);
    }
  }
  /*Компонент - "Отзывы"*/
  #Reviews{
    /*содержимое карусели*/
    .carousel-caption{color: #090c13 !important;}
    /*стрелки карусели*/
    .carousel-control-next-icon {background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e") !important;}
    .carousel-control-prev-icon {background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e") !important;}
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*ссылки (для данного компонента)*/
    a{color: #090c13 !important;}
  }
  /*названия svg*/
  .svg_name{fill: #090c13;}
  /*цвет svg*/
  .svg_color{fill: #090c13;}
}
/************ ТЕМНАЯ ТЕМА ***********************/
@media screen and (prefers-color-scheme: dark){
  /*заголовок*/
  h2{
    border-bottom: 2px solid white;
    box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.63);
  }
  /*Компоненты - "Об мне", "Мои работы", "Контакты"*/
  #About, #Works,#Contacts{
    background: #0b0e17;
    color: white !important;
  }
  /*Компоненты - "Об мне", "Ключевые навыки", "Отзывы"*/
  #Skills,#Reviews{
    background: #090c13;
    color: white !important;
  }
  /*контент модального окошка*/
  .modal-content{
    background: black !important;
    color: white;
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки под каждую работу*/
    .flex-container > div {
      background: #011624;
    }
    /*картинки*/
    img{border-bottom: medium ridge #1c2126;}
  }
  /*Компонент - "Контакты"*/
  #Contacts {
    /*ссылки (для данного компонента)*/
    a{color: white !important;}
  }
  /*названия svg*/
  .svg_color{fill:#ffffff;}
  /*цвет svg*/
  .svg_name{fill: #ffffff;}
}

/*Компонент - "Главный"*/
#Home{
  background: url("../static/background.jpg") 100% 100% no-repeat;
  background-size: 100% 100%;
  /*картинка*/
  img{
    border-radius: 100%;
    width: 100%;
    filter: contrast(110%);
    border: 5px solid white;
  }
  /*блок на информацию и картинку)*/
  #data_about_me{
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.99);
  }
  /*кнопка*/
  button{
    border: 2px solid white;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: block;
    margin: 15% auto 5% auto;
  }
  /*кнопка*/
  .btn {background: transparent !important;}
  /*параметры сетки бутстрап (блок на информацию)*/
  .col-7{padding: 8% 0 0 3% !important;}
  /*параметры сетки бутстрап (блок под картинку)*/
  .col{padding: 0 !important;}
  /*параметры сетки бутстрап (блок на информацию и картинку)*/
  .row{
    padding-top: 15%;
    margin-top: 0 !important;
  }
  /*имя*/
  .name{
    font-size: 60px;
    font-weight: 800 !important;
  }
  /*фраза-Junior Frontend-разработчик*/
  .front{font-size: 45px;}
}
/*Компонент - "Об мне"*/
#About{
  /*параметры сетки бутстрап (блоки на пункты)*/
  //.row{margin-top: 1% !important;}
  /*текст в компоненте "Об мне"*/
 // .text{text-align: center;}
  /*svg пунктов*/
  svg{
    width: 265px;
    height: 265px;
    margin-top: -40px;
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
/*Компонент - "Об мне"*/
#Education{
  /*svg пунктов*/
  svg{
    width: 300px;
    height: 265px;
    margin-top: -40px;
    margin-left: -50px;
    display: block !important;
  }
}
/*Компонент - "Ключевые навыки"*/
#Skills{
  /*параметры сетки бутстрап (ключевые навыки)*/
  .row{margin-top: 2% !important;}
  /*параметры сетки бутстрап (часть ключевых навыков, текст)*/
  .col{
    padding: 0 !important;
  }
  /*текст в компоненте "Ключевые навыки"*/
  .text{
    display: flex;
    align-items: center;
  }
  /*svg навыков (языков, фреймворков, ..)*/
  svg{
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 65px;
    height: 65px;
  }
}
/*Компонент - "Мои работы"*/
#Works{
  /*блоки с работами*/
  .flex-container  > div {
      width:  32.25%;

      margin: 0 0 2% 1% !important;
    /*картинки*/
      img {
        width: 100%;
        height: auto;
        cursor: pointer;
      }
    /*заголов, параграф*/
    h4,p{
      padding: 1% 2% !important;
      cursor: default;
    }
    /*при наведении*/
      &:hover {
        box-shadow: 2px 6px 15px rgba(0,0,0,.4);
      }
    }

  /*абзац*/
  p{
    margin-bottom: 0.4rem !important;
    padding: 1%;
  }
}
/*Компонент - "Отзывы"*/
#Reviews{
  /*левая стрелка карусели*/
  .carousel-control-prev {float: left !important;}
  /*стрелки карусели*/
  .carousel-control-prev, .carousel-control-next {
    position: relative !important;
    width: 5% !important;
    margin-left: 45%;
    margin-top: 2%;
  }
  /*текст в компоненте "Отзывы"*/
  .text{
    font-style: italic;
    display: block;
    margin: 2% 5% 0 5% ;
    height: 10vh;
  }
  /*текст для компонента - "Отзывы" (автор отзыва)*/
  .author{
    margin-top: 7%;
    margin-left: 50%;
    justify-content: end !important;
    font-weight: 800;
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
  }
  /*svg контактной информации*/
  svg{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 55px;
    height: 55px;
  }
}
 /***********************АДАПТИВНОСТЬ******************/

@media screen and (max-width: 300px) {
  /*заголовки, текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works,.text,.nav-link,.navbar-brand{
    font-size: 0.9rem !important;
    line-height: 1.1rem !important;
  }
  /*Компонент - "Главный"*/
  #Home{
    /*параметры сетки бутстрап (блок на информацию и картинку)*/
    .row{
      /*параметры сетки бутстрап (блок на информацию)*/
      .col-7{width: 70% !important;}
    }
  }
}
@media screen and (max-width: 500px) {
  /*Компоненты - "Об мне", "Ключевые навыки","Мои работы","Отзывы","Контакты"*/
  #About, #Skills, #Works, #Reviews, #Contacts{padding: 1rem 0 !important;}
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works,.text,.nav-link,.navbar-brand{
    font-size: 1.1rem;
    line-height: 1.15rem;
  }
  /*заголовки*/
  h2{font-size: 1.3rem !important;}
  h3{
    font-size: 1.15rem !important;
    padding-bottom: 0 !important;
    margin: 0 !important;
  }
  h4{font-size: 1.15rem !important;}
  /*Компонент - "Главный"*/
  #Home{
    height: 100%;
    /*параметры сетки бутстрап (блок на информацию и картинку)*/
    .row{
      padding-top: 0;
      flex-direction: column-reverse;
      /*параметры сетки бутстрап (блок на информацию)*/
      .col-7{
        max-width: 100%;
        padding-top: 0 !important;
        margin-left: auto;
        margin-right: auto;
        width: 55%
      }
    }
    /*картинка*/
    img{
      width: 45%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border: 2px solid white;
    }
    /*имя*/
    .name{
      font-size: 20px;
      padding-top: 2%;
    }
    /*фраза-Junior Frontend-разработчик*/
    .front{font-size: 16px;}
    /*кнопка*/
    button{display: none;}
  }
  /*Компонент - "Об мне"*/
  #About{
    /*svg пунктов*/
    svg{
      width: 75px;
      height: 75px;
    }
    /*параметры сетки бутстрап (блоки на пункты)*/
    .row{
      flex-direction: column;
      /*параметры сетки бутстрап (блок с пунктом)*/
      .col{margin-top: 5%;}
    }
    /*текст в компоненте "Об мне"*/
    .text{
      width: 65%;
      display: block;
      margin-right: auto;
      margin-left: auto;
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*параметры сетки бутстрап (часть ключевых навыков, текст)*/
    .col {
      padding: 0 15px !important;
      margin-left: -2.5%;
    }
    /*параметры сетки бутстрап (блок под svg)*/
    .col-3{margin-left: 2%;}
    /*параметры сетки бутстрап (блок с ключевыми навыками)*/
    .important_row{
      flex-direction: column;
      /*параметры сетки бутстрап (ключевые навыки)*/
      .row{margin-top: -1% !important;}
    }
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 65px;
      height: 75px;
      margin-left: 18% !important;
    }
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*контейнер, который включает в себя повтор блоков*/
    .flex-container {
      margin: 0 5%;
      /*блоки с работами*/
      & > div {
        width: 100%;
        margin: 0 0 8% 0 !important;
      }
    }
  }
  /*Компонент - "Отзывы"*/
  #Reviews{
    /*место под текст и автора*/
    .carousel-item{height: 270px;}
    /*автор*/
    .author{display: none;}
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*svg контактной информации*/
    svg{
      width: 40px;
      height: 50px;
      float: left;
    }
    /*абзац*/
    p{
      display: flex;
      align-items: center;
      height: 3rem;
      padding: 2%;
      margin-bottom: 0 !important;
    }
    /*блоки с контактной информацией*/
    .flex-container > div {
      width:100% !important;
      margin-left: 20%;
      margin-top: -2.5%;
    }
  }
}
@media screen and (min-width: 500px)and (max-width: 768px) {
  /*Компонент - "Главный"*/
  #Home{
    height: 100%;
    /*параметры сетки бутстрап (блок на информацию и картинку)*/
    .row{
      padding-top: 0;
      flex-direction: column-reverse;
      /*параметры сетки бутстрап (блок на информацию)*/
      .col-7{
        max-width: 100%;
        padding-top: 0 !important;
        margin-left: auto;
        margin-right: auto;
        width: 50%
      }
    }
    /*картинка*/
    img{
      width: 40%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border: 3px solid white;
    }
    /*имя*/
    .name{
      font-size: 25px;
      padding-top: 2%;
    }
    /*фраза-Junior Frontend-разработчик*/
    .front{font-size: 20px;}
    /*кнопка*/
    button{display: none;}
  }
  /*Компоненты - "Об мне", "Ключевые навыки","Мои работы","Отзывы","Контакты"*/
  #About, #Skills, #Works, #Reviews, #Contacts{padding: 1rem 0 !important;}
  /*заголовки для компонентов "Об мне", "Контакты"*/
  #About h2, #Contacts h2{width: 4em;}
  /*заголовки*/
  h2{font-size: 1.3rem !important;}
  h3{font-size: 1.2rem !important;}
  h4{
    font-size: 1.15rem !important;
    font-weight: 600;
  }
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works, .text,.nav-link,.navbar-brand{
    font-size: 1rem;
    line-height: 1.15rem;
  }
  /*Компонент - "Об мне"*/
  #About{
    /*svg пунктов*/
    svg{
      width: 80px;
      height: 80px;
    }
    /*параметры сетки бутстрап (блоки на пункты)*/
    .col{padding: 0 5px !important;}
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*параметры сетки бутстрап (часть ключевых навыков, текст)*/
    .col{
      padding: 0 15px !important;
      margin-left: -2%;
    }
    /*параметры сетки бутстрап (блок с ключевыми навыками)*/
    .important_row{
      flex-direction: column;
      /*параметры сетки бутстрап (ключевые навыки)*/
      .row{margin-top: -1% !important;}
    }
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 65px;
      height: 75px;
    }
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки с работами*/
    .flex-container > div {
      width: 46%;
      margin: 0 1.25% 2.3% 1.25% !important;
    }
  }
  /*Компонент - "Отзывы"*/
  #Reviews{
    /*место под текст и автора*/
    .carousel-item{height: 180px;}
    /*автор*/
    .author{display: none;}
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*блоки с контактной информацией*/
    .flex-container > div {
      width:50% !important;
    }
    /*svg контактной информации*/
    svg{
      width: 50px;
      height: 50px;
      float: left;
    }
    /*абзац*/
    p{
      display: flex;
      align-items: center;
      height: 5rem;
      padding: 5%;
    }
  }
}
@media screen and (min-width: 768px)and (max-width: 992px) {
  /*Компонент - "Главный"*/
  #Home{
    height: 100%;
    /*параметры сетки бутстрап (блок на информацию и картинку)*/
    .row{
      padding-top: 0;
      flex-direction: column-reverse;
      /*параметры сетки бутстрап (блок на информацию)*/
      .col-7{
        max-width: 100%;
        padding-top: 0 !important;
        margin-left: auto;
        margin-right: auto;
        width: 45%
      }
    }
    /*картинка*/
    img{
      width: 40%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    /*имя*/
    .name{
      font-size: 30px;
      padding-top: 2%;
    }
    /*фраза-Junior Frontend-разработчик*/
    .front{font-size: 25px;}
    /*кнопка*/
    button{display: none;}
  }
  /*Компоненты - "Об мне", "Ключевые навыки","Мои работы","Отзывы","Контакты"*/
  #About, #Skills, #Works, #Reviews, #Contacts{padding: 1.5rem 0 !important;}
  /*заголовки для компонентов "Об мне", "Контакты"*/
  #About h2, #Contacts h2{width: 4em;}
  /*заголовки*/
  h2{font-size: 1.5rem !important;}
  h3{font-size: 1.3rem !important;}
  h4{
    font-size: 1.2rem !important;
    font-weight: 600;
  }
  /*текст для компонента "Мои работы", текст, пункты меню, фраза в логотипе по всей странице*/
  .text_works,.text,.nav-link,.navbar-brand{
    font-size: 1.1rem;
    line-height: 1.15rem;
  }
  /*Компонент - "Об мне"*/
  #About{
    /*svg пунктов*/
    svg{
      width: 90px;
      height: 90px;
    }
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*параметры сетки бутстрап (часть ключевых навыков, текст)*/
    .col{padding: 0 10px !important;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 85px;
      height: 85px;
    }
  }
  /*Компонент - "Мои работы"*/
  #Works{
    /*блоки с работами*/
    .flex-container > div {
      width: 46%;
      margin: 0 1.25% 2.3% 1.25% !important;
    }
  }
  /*Компонент - "Контакты"*/
  #Contacts{
    /*svg контактной информации*/
    svg{
      width: 55px;
      height: 65px;
    }
  }
}
@media screen and (min-width: 992px)and (max-width: 1200px) {
  /*Компонент - "Главный"*/
  #Home{
    height: 100%;
    /*параметры сетки бутстрап (блок на информацию и картинку)*/
    .row{
      padding-top: 2%;
      padding-bottom: 2%;
    }
    /*имя*/
    .name{
      font-size: 50px;
      padding-top: 5%;
    }
    /*фраза-Junior Frontend-разработчик*/
    .front{font-size: 40px;}
    /*кнопка*/
    button{display: none;}
  }
  /*Компоненты - "Об мне", "Ключевые навыки","Мои работы","Отзывы","Контакты"*/
  #About, #Skills, #Works, #Reviews, #Contacts{padding: 2rem 0 !important;}
  /*заголовки для компонентов "Об мне", "Контакты"*/
  #About h2, #Contacts h2{width: 4em;}
  /*заголовки*/
  h2{font-size: 1.7rem !important;}
  h3{font-size: 1.5rem !important;}
  h4{font-size: 1.3rem !important;}
  /*текст, пункты меню, фраза в логотипе по всей странице*/
  .text,.nav-link,.navbar-brand{
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  /*текст для компонента "Мои работы"*/
  .text_works{
    font-size: 1.15rem !important;
    line-height: 1.2rem;
  }
  /*Компонент - "Ключевые навыки"*/
  #Skills{
    /*параметры сетки бутстрап (часть ключевых навыков, текст)*/
    .col{padding: 0 15px !important;}
    /*svg навыков (языков, фреймворков, ..)*/
    svg{
      width: 85px;
      height: 85px;
    }
  }
}
@media screen and (min-width: 1200px)and (max-width: 1600px) {
  /*Компонент - "Главный"*/
  #Home{
    /*кнопка*/
    button{margin-top: 10%;}
  }
}
</style>
