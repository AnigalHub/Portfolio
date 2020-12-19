<template>
    <div>
      <Home/>
      <Navbar/>
      <About/>
      <Skills/>
    </div>
</template>

<script>
import Home from "~/components/home";
import Navbar from "~/components/navbar";
import About from "~/components/about";
import Skills from "~/components/skills";
export default {
  components: {Skills, About, Navbar, Home}
}
</script>

<style>
.container {
  padding: 15px !important;
}
h2{
  border-bottom: 2px solid white;
  box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.63);
  font-family: 'Piazzolla', serif;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: 800;
  padding-bottom: 1% !important;
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
#Nav{
  background: #252c3d;
  box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.63);
}
#About, #Skils{
  background: rgba(43, 52, 69, 0.9);
  color: white !important;
  padding: 3rem 0 !important;
}
#About h2{
  width: 6em;
}
#Skils h2{
  width: 10em;
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
