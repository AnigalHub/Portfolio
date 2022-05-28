<template>
  <div id="About">
    <b-container>
      <h2>Об мне</h2>
      <b-row>
        <b-col cols="4">
          <img src="../static/me.jpg">
          <p class="name">Игнатова Анна</p>
          <div class="flex-container">
            <div v-for="(skill,index) in Skills" :key="index">
              <div class="text number">{{skill.svg}}</div>
              <div class="text">{{skill.skills_name}}</div>
            </div>
          </div>
        </b-col>
        <b-col>

            <ul>
              <li class="text" v-for="(education,index) in About" :key="index">
                <p><b>{{education.name}}<span> {{education.year}}</span></b></p>
                <p>{{education.direction}}</p>
                <p>{{education.department}}</p>
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
          Skills:[
            // {svg:'5+', skills_name: 'Лет изучения Web-разработки',},
            {svg:'20+', skills_name: 'Завершенных проектов',},
          ],
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

</style>
