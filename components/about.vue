<template>
    <div id="About">
      <b-container>
        <h2>Обо мне</h2>
        <b-row>
          <b-col v-for="paragraph in AboutMeRow" :key="paragraph.name">
            <h3>{{paragraph.name}}</h3>
            <component :is="paragraph.svg"/>
            <p class="text">{{paragraph.description}}</p>
          </b-col>
        </b-row>
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
            AboutMeRow:[
              {
                name:'Немного о себе', svg: About_me_svg,
                description:"Занимаюсь Web-разработкой с 2019 года: выполняю верстку и программирование уникальных сайтов.",
              },
              {
                name:'Образование', svg: Education_svg,
                description:"Закончила бакалавриат в Москвском Авиационном Институте (МАИ) по направлению - Информатика и вычислительная техника.",
              },
              {
                name:'Самообразование', svg: Self_education_svg,
                description:"Постоянно развиваюсь в IT-сфере: изучаю новые технологии и современные фреймворки.",
              },
            ]
        }
      }
    }
</script>

<style scoped>

</style>
