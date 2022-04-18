<template>
    <div id="About">
      <b-container>
        <h2>Обо мне</h2>
        <b-row>
          <b-col cols="3">
            <component :is="about_me_svg"/>
         <!--   <component :is="self_education_svg"/>
            -->
          </b-col>
          <b-col>
            <ul>
              <li v-for="paragraph in AboutMeRow"  class="text">{{paragraph.description}}</li>
            </ul>
          </b-col>
        </b-row>
     <!--   <b-row>
          <b-col v-for="paragraph in AboutMeRow" :key="paragraph.name">
            <h3>{{paragraph.name}}</h3>
            <component :is="paragraph.svg"/>
            <p class="text">{{paragraph.description}}</p>
          </b-col>
        </b-row>
        -->
      </b-container>
    </div>
</template>

<script>
    import Education_svg from "~/components/svg_about/education_svg";
    import Self_education_svg from "~/components/svg_about/self_education";
    import About_me_svg from "~/components/svg_about/about_me";
    export default {
      name: "about",
      components: {About_me_svg, Self_education_svg, Education_svg,},
      data() {
        return {
          about_me_svg:About_me_svg,
          self_education_svg:Self_education_svg,
          AboutMeRow:[
            {
              description:"C 2019 года училась создавать макеты и и занималась версткой простых адаптивных сайтов.",
            },
            {
              description: "C 2020 года начала изучать Vue.js и делать сайты с обратной связью для клиентов.",
            },
            {
              description:"C 2021 года улучшила свои знания в Vue.js и начала изучать Node.js, Express.js для серверного взаимодействия с клиентами, используя Postgresql. А также начала изучать TypeScript.",

            },
            {
             description: "Cейчас пишу телеграм-бота - напоминальщик событий.",
            },
          ]
          /*
            AboutMeRow:[
              {
                name:'Немного о себе', svg: About_me_svg,
                description:"Занимаюсь Web-разработкой с 2019 года: выполняю верстку и программирование уникальных сайтов.",
              },
              {
                name:'Образование', svg: Education_svg,
                description:"Закончила бакалавриат в Московском Авиационном Институте (МАИ) по направлению - Информатика и вычислительная техника.",
              },
              {
                name:'Самообразование', svg: Self_education_svg,
                description:"Постоянно развиваюсь в IT-сфере: изучаю новые технологии и современные фреймворки.",
              },
            ]
           */
        }
      }
    }
</script>

<style scoped>

</style>
