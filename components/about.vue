<template>
  <div id="About">
    <b-container>
      <h2>Об мне</h2>
      <b-row>
        <b-col cols="4">
          <img src="../static/me.jpg">
          <p class="name">Игнатова Анна</p>
        </b-col>
        <b-col>
          <ul>
            <li class="text" v-for="(education,index) in About" :key="index">
              <div class="block_li">
                <p><b>{{education.name}}</b></p>
                <p>{{education.direction}}</p>
                <p>{{education.department}}</p>
                <p>{{education.department2}}</p>
              </div>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        About:[
          {
            name: "Работа",
            direction:"Обучаюсь у менторов чистому и правильному коду.",
            department:"Занимаюсь разработкой сайтов и приложений."
          },
          {
            name: "Самообразование",
            direction:"Изучаю новые технологии по книгам и статьям в интернете.",
            department:"Практикую веб-разработку на своих собственных проектах."
          },
          {
            name: "Образование",
            direction:"Московский Авиационный Институт (МАИ)",
            department:"Направление: Информатика и вычислительная техника.",
            department2:"Кафедра: Информационные сети и технологии."
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
