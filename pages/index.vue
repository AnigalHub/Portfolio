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
@media screen and (prefers-color-scheme: light){
  a{
    color: #090c13 !important;
  }
  #About, #Works,#Contacts{
    background: white;
    color: #090c13 !important;
    padding: 3rem 0 !important;
  }
  #Works .col{
    background: rgba(208, 204, 203, 0.31);
  }
  #Skills,#Reviews{
    background: rgba(208, 204, 203, 0.61);
    color: #090c13 !important;
    padding: 3rem 0 !important;
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
  a{
    color: white !important;
  }
  #Works .col{
    background: rgba(208, 204, 203, 0.61);
  }
  #About, #Works,#Contacts{
    background: #090c13;
    color: white !important;
    padding: 3rem 0 !important;
  }
  #Skills,#Reviews{
    background: #0c0f17;
    color: white !important;
    padding: 3rem 0 !important;
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
#Nav,#Myfooter{
  background: #030407;
  box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.63);
  color: white;
}
#Myfooter{
  padding: 0.5rem 0 !important;
  text-align: center;
}
h2,h3,.text,.author,.nav-link,.navbar-brand{
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
}
.text,.nav-link,.navbar-brand{
  font-size: 1.3rem !important;
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
      width: 50px !important;
    }
    .last_skills{
      width: 50% !important;
      margin-right: auto;
      margin-left: auto;
    }
  }
  #Works{
    .flex-container > div {
      width: 47%;
      margin: 0 1.2% 2.5% 1.2% !important;
      text-align: center;
    }
    img{
      width: 100%;
      height: 20vh;
    }
  }

</style>
