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
                <p>{{education.item1}}</p>
                <p>{{education.item2}}</p>
                <p>{{education.item3}}</p>
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
            item1:"Обучаюсь у менторов чистому и правильному коду.",
            item2:"Занимаюсь разработкой сайтов и приложений."
          },
          {
            name: "Самообразование",
            item1:"Изучаю новые технологии по книгам и статьям в интернете.",
            item2:"Практикую веб-разработку на своих собственных проектах."
          },
          {
            name: "Образование",
            item1:"Московский Авиационный Институт (МАИ)",
            item2:"Направление: Информатика и вычислительная техника.",
            item3:"Кафедра: Информационные сети и технологии."
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
