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
              <li>
                <div class="text">
                  <p><b>{{Education.name}}<span>  ({{Education.year}})</span></b></p>
                  <p>Направление: {{Education.direction}}</p>
                  <p>Кафедра: {{Education.department}}</p>
                </div>
              </li>
              <li>
                <div class="text">
                  <p><b>Самообразование<span> (2015-2022)</span></b></p>

                  <p>Изучаю новые технологии по книгам и статьям в интернете.</p>
                  <p>Практикую веб-разработку на своих собственных проектах.</p>
                </div>
              </li>
              <li>
                <div class="text">
                  <p><b>Работа<span> (2020-2022) </span></b></p>
                  <p>Обучаюсь на работе у тимлидов чистому и правильному коду.</p>
                  <p>Занимаюсь созданием и разработкой сайтов на заказ.</p>
                </div>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import Education_svg from "~/components/svg_education/laptop";
    export default {
      name: "about",
      components: {Education_svg},
      data() {
        return {
          AboutMeRow:[
            {description:"C 2019 года училась создавать макеты и и занималась версткой простых адаптивных сайтов.",},
            {description: "C 2020 года начала изучать Vue.js и делать сайты с обратной связью для клиентов.",},
            {description:"C 2021 года улучшила свои знания в Vue.js и начала изучать Node.js, Express.js для серверного взаимодействия с клиентами, используя Postgresql.",},
            {description: "Сейчас начала изучать TypeScript пишу телеграм-бота - напоминальщик событий.",},
          ],
          Education_svg:Education_svg,
          Education: {
            svg: Education_svg,
            name: "Московский Авиационный Институт (МАИ)",
            year: "2015-2019",
            direction:"Информатика и вычислительная техника",
            department:"Информационные сети и технологии"
          }
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
