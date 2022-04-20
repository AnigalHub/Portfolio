<template>
  <div id="Education">
    <b-container>
      <h2>Образование</h2>
      <b-row>
        <b-col cols="2">
          <component :is="Education_svg"></component>
        </b-col>
        <b-col class="text">
          <p><b>{{Education.name}}</b></p>
          <p>{{Education.year}}</p>
          <p>Направление: {{Education.direction}}</p>
          <p>Кафедра: {{Education.department}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import Education_svg from "~/components/svg_education/laptop";
    export default {
      name: "education",
      components: {Education_svg},
      data() {
        return {
          Education_svg:Education_svg,
          Education: {
            svg: Education_svg,
            name: "Московский Авиационный Институт (национальный исследовательский университет) (МАИ)",
            year: "2015-2019, Москва",
            direction:"Информатика и вычислительная техника",
            department:"Информационные сети и технологии"
          }
        }
      }
    }
</script>

<style scoped>

</style>
