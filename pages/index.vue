<template>
    <div>
      <Home/>
      <Navbar/>
      <About/>
      <Skills/>
      <Works/>
      <Reviews/>
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
export default {
  components: {Myfooter, Contacts, Reviews, Works, Skills, About, Navbar, Home}
}
</script>

<style>
  .navbar-light .navbar-toggler {
    border-color: white !important;
  }
</style>
<style lang="scss">
.container {
  padding: 15px !important;
}
a{
  color: #2868ad !important;
}
#About, #Works,#Contacts,#Skills,#Reviews{
  padding: 3rem 0 !important;
}
#Nav,#Myfooter{
  background: #030407;
  box-shadow: 0 6px 6px -6px rgba(255, 255, 255, 0.63);
  color: white;
}
#Myfooter{
  padding: 0.5rem 0 !important;
  text-align: center;
}
h2,h3,.text,.text_works,.author,.nav-link,.navbar-brand{
  font-family: 'Piazzolla', serif;
}
h2{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: 800;
  padding-bottom: 2% !important;
}
h3{
  padding-bottom: 2.5% !important;
  text-align: center;
  font-weight: 800;
}
h4{
  font-weight: 500;
  padding-bottom: 1% !important;
  font-family: 'Playfair Display', serif;
  text-align: center;
  text-decoration: underline;
}
.text,.nav-link,.navbar-brand{
  font-size: 1.2rem;
  line-height: 1.8rem;
}
.text_works{
  font-size: 1.18rem;
  line-height: 1.2rem;
}
.author{
  font-size: 1.2rem !important;
}
#logo{
  width: 60px;
  height: 50px;
}
.nav-link,.navbar-brand{
  color: white !important;
}
.nav-link{
  padding: 0.5rem 1.5rem !important;
}
#About h2, #Contacts h2{
  width: 6em;
}
#Skills h2{
  width: 10em;
}
#Works h2{
  width: 8em;
}
#Reviews h2{
  width: 4em;
}
@media screen and (prefers-color-scheme: light){
  #Contacts a{
    color: #090c13 !important;
  }
  #About, #Works,#Contacts{
    background: rgba(255, 255, 255, 0.38);
    color: #090c13 !important;
  }
  #Works .col{
    background: rgba(208, 204, 203, 0.21);
  }
  #Skills,#Reviews{
    background: rgba(208, 204, 203, 0.61);
    color: #090c13 !important;
  }
  .carousel-caption{
    color: #090c13 !important;
  }
  h2 {
    border-bottom: 2px solid  #090c13 ;
    box-shadow: 0 8px 8px -8px  #090c13 ;
  }
  .svg_color{
    fill: #090c13;
  }
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e") !important;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e") !important;
  }
  .svg_name{
    fill: #090c13;
  }
}
@media screen and (prefers-color-scheme: dark){
  #Contacts a{
    color: white !important;
  }
  #Works .col {
    background: #090c13;
  }
  #About, #Works,#Contacts{
    background: #0b0e17;
    color: white !important;
  }
  #Skills,#Reviews{
    background: #090c13;
    color: white !important;
  }
  h2{
    border-bottom: 2px solid white;
    box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.63);
  }
  .svg_color{
    fill:#ffffff;
  }
  .svg_name{
    fill: #ffffff;
  }
}
#Home{
  .row{
    padding-top: 15%;
  }
  button{
    margin-top: 15%;
  }
  height: 100%;
  .name{
    font-size: 60px;
  }
  .front{
    font-size: 45px;
  }
}
#About{
  svg{
    width: 100px;
    height: 100px;
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
#Skills{
  svg{
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 95px;
    height: 95px;
  }
  .svg_3{
    float: left;
    padding-right: 0.2rem;
    width: 33% !important;
  }
  .last_skills{
    width: 50% !important;
    margin-right: auto;
    margin-left: auto;
  }
}
#Contacts{
  .flex-container > div {
    width: 25%;
  }
  svg{
    width: 75px;
    height: 75px;
  }
}
@media screen and (max-width: 300px) {
  .text_works,.text,.nav-link,.navbar-brand{
    font-size: 0.9rem !important;
    line-height: 1.1rem !important;
  }
  #Home{
    .row{
      .col-7{
        width: 70% !important;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  #Home{
    height: 100%;
    .row{
      padding-top: 0;
      flex-direction: column-reverse;
      .col-7{
        max-width: 100%;
        padding-top: 0 !important;
        margin-left: auto;
        margin-right: auto;
        width: 55%
      }
    }
    img{
      width: 45%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border: 2px solid white;
    }
    .name{
      font-size: 20px;
      padding-top: 2%;
    }
    .front{
      font-size: 16px;
    }
    button{
      display: none;
    }
  }
  #About, #Works,#Contacts,#Skills,#Reviews{
    padding: 1rem 0 !important;
  }
  .text_works,.text,.nav-link,.navbar-brand{
    font-size: 1.1rem;
    line-height: 1.15rem;
  }

  h2{
    font-size: 1.3rem !important;
  }
  h3{
    font-size: 1.15rem !important;
    padding-bottom: 0 !important;
    margin: 0 !important;
  }
  h4{
    font-size: 1.15rem !important;
  }
  #About{
    svg{
      width: 75px;
      height: 75px;
    }
    .row{
      flex-direction: column;
      .col{
        margin-top: 5%;
      }
    }
    .text{
      width: 65%;
      display: block;
      margin-right: auto;
      margin-left: auto;
    }
  }
  #Skills{
    .col{
      padding: 0 15px !important;
      margin-left: -2.5%;
    }
     .col:first-child{
      padding: 0 8px !important;
    }
    .col-3{
      margin-left: 2%;
    }
    .important_row{
      flex-direction: column;
      .row{
        margin-top: -1% !important;
      }
    }
    svg{
      width: 65px;
      height: 75px;
      margin-left: 18% !important;
    }
    .last_skills{
      width: 100% !important;
      margin-left: -2% !important;
    }
  }
  #Works{
    .col-3{
      display: none;
    }
  }
  #Contacts{
    svg{
      width: 40px;
      height: 50px;
      float: left;
    }
    p{
      display: flex;
      align-items: center;
      height: 3rem;
      padding: 2%;
      margin-bottom: 0 !important;
    }
    .flex-container > div {
      width:100% !important;
      margin-left: 20%;
      margin-top: -2.5%;
    }
  }
}
@media screen and (min-width: 500px)and (max-width: 768px) {
  #Home{
    height: 100%;
    .row{
      padding-top: 0;
      flex-direction: column-reverse;
      .col-7{
        max-width: 100%;
        padding-top: 0 !important;
        margin-left: auto;
        margin-right: auto;
        width: 50%
      }
    }
    img{
      width: 40%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border: 3px solid white;
    }
    .name{
      font-size: 25px;
      padding-top: 2%;
    }
    .front{
      font-size: 20px;
    }
    button{
      display: none;
    }
  }
  #About, #Works,#Contacts,#Skills,#Reviews{
    padding: 1rem 0 !important;
  }
  #About h2, #Contacts h2{
    width: 4em;
  }
  #About{
    svg{
      width: 80px;
      height: 80px;
    }
    .col{
      padding: 0 5px !important;
    }
  }
  h2{
    font-size: 1.3rem !important;
  }
  h3{
    font-size: 1.2rem !important;
  }
  h4{
    font-size: 1.15rem !important;
    font-weight: 600;
  }
  .text_works,
  .text,.nav-link,.navbar-brand{
    font-size: 1rem;
    line-height: 1.15rem;
  }
  #Skills{
   .important_row .col .col:first-child{
      padding: 0 10px !important;
    }
    .col{
      padding: 0 15px !important;
      margin-left: -2%;
    }
    .important_row{
      flex-direction: column;
      .row{
        margin-top: -1% !important;
      }
    }
    svg{
      width: 65px;
      height: 75px;
    }
    .last_skills{
      width: 100% !important;
      margin-top: -1% !important;
      margin-left: -3% !important;
    }
  }
  #Works{
    .col-3{
      display: none;
    }
  }
    #Contacts{
      .flex-container > div {
        width:50% !important;
      }
      svg{
        width: 50px;
        height: 50px;
        float: left;
      }
      p{
        display: flex;
        align-items: center;
        height: 5rem;
        padding: 5%;
      }
    }

}
@media screen and (min-width: 768px)and (max-width: 992px) {
  #Home{
    height: 100%;
    .row{
      padding-top: 0;
      flex-direction: column-reverse;
      .col-7{
        max-width: 100%;
        padding-top: 0 !important;
        margin-left: auto;
        margin-right: auto;
        width: 45%
      }
    }
    img{
      width: 40%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .name{
      font-size: 30px;
      padding-top: 2%;
    }
    .front{
      font-size: 25px;
    }
    button{
      display: none;
    }
  }
  #About, #Works,#Contacts,#Skills,#Reviews{
    padding: 1.5rem 0 !important;
  }
  #About h2, #Contacts h2{
    width: 4em;
  }
  h2{
    font-size: 1.5rem !important;
  }
  h3{
    font-size: 1.3rem !important;
  }
  h4{
    font-size: 1.2rem !important;
    font-weight: 600;
  }
  .text_works,.text,.nav-link,.navbar-brand{
    font-size: 1.1rem;
    line-height: 1.15rem;
  }
  #About{
    svg{
      width: 90px;
      height: 90px;
    }
  }
  #Skills{
    .col{
      padding: 0 10px !important;
    }
    svg{
      width: 85px;
      height: 85px;
    }
  }
  #Works{
    .col-3{
      flex: 0 0 30% !important;
      max-width: 30% !important;
    }
  }
  #Contacts{
    svg{
      width: 55px;
      height: 65px;
    }
    .col{
      padding: 0 5px !important;
    }
  }
}
@media screen and (min-width: 992px)and (max-width: 1200px) {
  #Home{
    height: 100%;
    .row{
      padding-top: 2%;
      padding-bottom: 2%;
    }
    .name{
      font-size: 50px;
      padding-top: 5%;
    }
    .front{
      font-size: 40px;
    }
    button{
      display: none;
    }
  }
  #About, #Works,#Contacts,#Skills,#Reviews{
    padding: 2rem 0 !important;
  }
  #About h2, #Contacts h2{
    width: 4em;
  }
  h2{
    font-size: 1.7rem !important;
  }
  h3{
    font-size: 1.5rem !important;
  }
  h4{
    font-size: 1.3rem !important;
  }
  .text,.nav-link,.navbar-brand{
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  .text_works{
    font-size: 1.15rem !important;
    line-height: 1.2rem;
  }
  #Skills{
    .col{
      padding: 0 15px !important;
    }
    svg{
      width: 85px;
      height: 85px;
    }
  }
}
@media screen and (min-width: 1200px)and (max-width: 1600px) {
  #Home{
    button{
      margin-top: 10%;
    }
  }
}


</style>
