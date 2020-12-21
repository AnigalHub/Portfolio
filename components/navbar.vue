<template>
  <b-navbar id="Nav" class="navbar-expand-xl sticky-top ">
    <b-container>
      <b-navbar-brand>
       Игнатова Анна
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#Home">Главная</b-nav-item>
          <b-nav-item href="#About">О себе</b-nav-item>
          <b-nav-item href="#Skills">Ключевые навыки</b-nav-item>
          <b-nav-item href="#Works">Мои работы</b-nav-item>
          <b-nav-item href="#Reviews">Отзывы</b-nav-item>
          <b-nav-item href="#Contacts">Контакты</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  export default {
    name: "navbar",
  }

</script>

<style scoped>
  .container {
    padding: 5px !important;
  }
  .navbar{
    padding: 0 !important;
  }
  .nav-link{
    padding: 0.5rem 1.5rem !important;
  }
</style>
