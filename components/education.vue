<template>
  <div id="Education">
    <b-container>
      <h2>Образование</h2>
      <b-row v-for="paragraph in AboutMeRow" :key="paragraph.name">


        <b-col cols="2">
          <component :is="Education_svg"></component>
          <!-- <component :is="paragraph.svg"/> -->
        </b-col>
        <b-col>
          <p class="text"><b>{{paragraph.name}}</b></p>
          <p class="text">{{paragraph.year}}</p>
          <p class="text">Направление: {{paragraph.direction}}</p>
          <p class="text">Кафедра: {{paragraph.department}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

    import Education_svg from "~/components/svg_about/about_me";
    export default {
      name: "education",
      components: {Education_svg},
      data() {
        return {
          Education_svg:Education_svg,
          AboutMeRow: [
            {
              svg: Education_svg,
              name: "Московский Авиационный Институт (национальный исследовательский университет) (МАИ)",
              year: "2015-2019, Москва",
              direction:"Информатика и вычислительная техника",
              department:"Информационные сети и технологии"
            },
          ]
        }
      }
    }
</script>

<style scoped>
svg{
  width: 300px;
}
</style>
