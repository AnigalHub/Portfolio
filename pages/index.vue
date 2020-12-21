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
.container {
  padding: 15px !important;
}
@media screen and (prefers-color-scheme: light){

  #About, #Works,#Contacts{
    background: white;
    color: #090c13 !important;
    padding: 3rem 0 !important;

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
}
@media screen and (prefers-color-scheme: dark){

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
  h2 {
    border-bottom: 2px solid white;
    box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.63);
  }
  .svg_color{
    fill:#ffffff;
  }
}
#Nav,#Myfooter{
  background: #030407;
  box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.63);
}
h2{
  font-family: 'Piazzolla', serif;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: 800;
  padding-bottom: 2% !important;
}
h3{
  font-family: 'Piazzolla', serif;
  padding-bottom: 2.5% !important;
}
.nav-link,.navbar-brand{
  color: white !important;
  font-family: 'Piazzolla', serif;
  font-size: 1.3rem !important;
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
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
