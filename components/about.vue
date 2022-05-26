<template>
  <div id="About">
    <b-container>
      <h1>Об мне</h1>
      <b-row>
        <b-col cols="4">
          <img src="../static/me.jpg">
          <p class="name">Игнатова Анна</p>
        </b-col>
        <b-col>
          <div class="ed">
            <ul>
              <li class="text" v-for="(education,index) in About" :key="index">
                <p><b>{{education.name}}<span> {{education.year}}</span></b></p>
                <p>{{education.direction}}</p>
                <p>{{education.department}}</p>
              </li>
            </ul>
          </div>
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
              name: "Московский Авиационный Институт (МАИ)",
              year: "(2015-2019)",
              direction:"Направление: Информатика и вычислительная техника",
              department:"Кафедра: Информационные сети и технологии"
            },
            {
              name: "Самообразование",
              year: "(2015-2022)",
              direction:"Изучаю новые технологии по книгам и статьям в интернете.",
              department:"Практикую веб-разработку на своих собственных проектах."
            },
            {
              name: "Работа",
              year: "(2020-2022)",
              direction:"Обучаюсь на работе у тимлидов чистому и правильному коду.",
              department:"Занимаюсь созданием и разработкой сайтов на заказ."
            },
          ]
        }
      }
    }
</script>

<style scoped>
  span{
  color: #ffc9a1;
    text-shadow: 0.4px 0.38px 0.4px #000;
  }
</style>
