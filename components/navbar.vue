<template>
  <b-navbar id="Nav" class="navbar-expand-xl sticky-top" toggleable>
    <b-container>
      <b-navbar-brand href="#Home">
        <Logo_svg/> Игнатова Анна
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M34.37313,44.72c-0.44681,0.00712 -0.87331,0.18785 -1.18922,0.50391l-13.76,13.76c-0.67143,0.67171 -0.67143,1.76048 0,2.43219l65.36,65.36c0.67171,0.67143 1.76048,0.67143 2.43219,0l65.36,-65.36c0.67143,-0.67171 0.67143,-1.76048 0,-2.43219l-13.76,-13.76c-0.67171,-0.67143 -1.76048,-0.67143 -2.43219,0l-50.38391,50.38391l-50.38391,-50.38391c-0.32908,-0.32923 -0.77753,-0.51103 -1.24297,-0.50391zM34.4,48.87219l50.38391,50.38391c0.67171,0.67143 1.76048,0.67143 2.43219,0l50.38391,-50.38391l11.32781,11.32781l-62.92781,62.92781l-62.92781,-62.92781zM35.24992,64.48992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l28.38,28.38c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-28.38,-28.38c-0.16204,-0.16747 -0.38509,-0.26203 -0.61812,-0.26203zM136.7232,64.49328c-0.22319,0.00621 -0.43521,0.09897 -0.59125,0.25867l-41.28,41.28c-0.22464,0.21571 -0.31512,0.536 -0.23655,0.83737c0.07857,0.30136 0.31392,0.53671 0.61528,0.61528c0.30136,0.07857 0.62166,-0.01191 0.83737,-0.23655l41.28,-41.28c0.25309,-0.24743 0.32875,-0.62464 0.19067,-0.95054c-0.13808,-0.3259 -0.46171,-0.53393 -0.81552,-0.52423zM73.08992,102.32992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l6.02,6.02c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-6.02,-6.02c-0.16204,-0.16747 -0.38509,-0.26203 -0.61812,-0.26203zM83.40992,112.64992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l2.58,2.58c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-2.58,-2.58c-0.16204,-0.16747 -0.38509,-0.26203 -0.61813,-0.26203z"></path></g></g></svg>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" class="justify-content-end" is-nav v-model="isExpanded">
        <b-navbar-nav>
          <b-nav-item @click="scrollToId" href="#Home">Главная</b-nav-item>
          <b-nav-item @click="scrollToId" href="#About">Об мне</b-nav-item>
          <b-nav-item @click="scrollToId" href="#Skills">Ключевые навыки</b-nav-item>
          <b-nav-item @click="scrollToId" href="#Works">Портфолио</b-nav-item>
          <b-nav-item @click="scrollToId" href="#Contacts">Контакты</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  import Logo_svg from "~/components/logo_svg";
  export default {
    name: "navbar",
    components: {Logo_svg},
    data(){
      return {
        isExpanded: false,
      }
    },
    methods:{
      scrollToTop(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      },
      scrollToId(event){
        let offsetY = 20;
        if(this.isExpanded){
          let nav = document.getElementById(("Nav"));
          let bounds =  nav.getBoundingClientRect();
          offsetY = bounds.height;
        }
        let element = document.getElementById(event.target.hash.replace("#", ""));
        window.scrollTo({top: element.offsetTop - offsetY, left: 0, behavior: 'smooth'});
        event.preventDefault();
      }
    }
  }

</script>
<style scoped lang="scss">

</style>
