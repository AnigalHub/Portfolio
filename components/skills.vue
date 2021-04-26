<template>
    <div id="Skills">
      <b-container>
      <h2>Ключевые навыки</h2>
        <b-row class="important_row">
          <b-col v-for="(skill,index) in SkillsRow" :key="index">
            <b-row v-for="language in skill.programming_languages" :key="language.descr_skills">
              <b-col cols="3">
                <component :key="index" :is="language.svg"/>
              </b-col>
              <b-col class="text">
                {{language.descr_skills}}
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
    import Vue_svg from "~/components/svg_skills/vue_svg";
    import Javascript_svg from "~/components/svg_skills/javascript_svg";
    import Sass_svg from "~/components/svg_skills/sass_svg";
    import Nuxt_svg from "~/components/svg_skills/nuxt_svg";
    import Flexbox_svg from "~/components/svg_skills/flexbox_svg";
    import Git_svg from "~/components/svg_skills/git_svg";
    import Html_css from "~/components/svg_skills/html_css_bootstrap";
    import NodeAndWebpack_svg from "~/components/svg_skills/node_and_webpack_svg";
    export default {
        name: "skills",
      components: {Git_svg, Flexbox_svg, Nuxt_svg, Sass_svg, Javascript_svg, Vue_svg, Html_css, NodeAndWebpack_svg},
      data(){
          return{
            SkillsRow:[
              {
                programming_languages:[
                  {svg:Html_css, descr_skills:'Отличные знания HTML5, CSS3, BOOTSTRAP',},
                  {svg:Javascript_svg, descr_skills: 'Уверенные знания JAVASCRIPT',},
                  {svg: Vue_svg, descr_skills: 'Опыт работы с фреймворком VUE.JS',},
                  {svg:Sass_svg, descr_skills:'Работа с препроцессором SASS/SCSS',}
                ]
              },
              {
                programming_languages:[
                  {svg:NodeAndWebpack_svg, descr_skills: 'Базовые знания NODE.JS, WEBPACK',},
                  {svg: Flexbox_svg, descr_skills: 'Практический опыт адаптивной кроссбраузерной верски (в том числе FLEXBOX и GRID)',},
                  {svg: Nuxt_svg, descr_skills: 'Умение работать с фреймворком NUXT.JS',},
                  {svg:Git_svg, descr_skills: 'Навык работы с системой контроля версий GIT',}
                ]
              },
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>
