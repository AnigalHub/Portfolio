<template>
    <div id="About">
      <b-container>
        <h2>Обо мне</h2>
        <b-row>
          <b-col>
            <ul>
              <li v-for="paragraph in AboutMeRow"  class="text">{{paragraph.description}}</li>
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
          AboutMeRow:[
            {description:"C 2019 года училась создавать макеты и и занималась версткой простых адаптивных сайтов.",},
            {description: "C 2020 года начала изучать Vue.js и делать сайты с обратной связью для клиентов.",},
            {description:"C 2021 года улучшила свои знания в Vue.js и начала изучать Node.js, Express.js для серверного взаимодействия с клиентами, используя Postgresql.",},
            {description: "Сейчас начала изучать TypeScript пишу телеграм-бота - напоминальщик событий.",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
