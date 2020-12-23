<template>
    <div id="Skills">
      <b-container>
      <h2>Ключевые навыки</h2>
        <b-row>
          <b-col v-for="(skill,index) in SkillsRow" :key="index">
            <b-row v-for="language in skill.programming_languages" :key="language.descr_skills">
              <b-col cols="3">
                <component v-for="(value, index) in language.svgs" :key="index" :is="value.svg"/>
              </b-col>
              <b-col class="text">
                {{language.descr_skills}}
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="last_skills">
          <b-col cols="3">
            <Git_svg/>
          </b-col>
          <b-col class="text">
            Навык работы с системой контроля версий Git (GitHub)
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
    import Html_svg from "~/components/svg_skills/html_svg";
    import Css_svg from "~/components/svg_skills/css_svg";
    import Bootstrap_svg from "~/components/svg_skills/bootstrap_svg";
    import Vue_svg from "~/components/svg_skills/vue_svg";
    import Javascript_svg from "~/components/svg_skills/javascript_svg";
    import Sass_svg from "~/components/svg_skills/sass_svg";
    import Nuxt_svg from "~/components/svg_skills/nuxt_svg";
    import Flexbox_svg from "~/components/svg_skills/flexbox_svg";
    import Git_svg from "~/components/svg_skills/git_svg";
    export default {
        name: "skills",
      components: {Git_svg, Flexbox_svg, Nuxt_svg, Sass_svg, Javascript_svg, Vue_svg, Bootstrap_svg, Css_svg, Html_svg},
      data(){
          return{
            SkillsRow:[
              {
                programming_languages:[
                  {
                    svgs:[{svg:Html_svg,}, {svg:Css_svg,}, {svg:Bootstrap_svg,}],
                    descr_skills:'Уверенные знания HTML5,CSS,BOOTSTRAP',
                  },
                  {
                    svgs: [{svg: Vue_svg,}],
                    descr_skills: 'Опыт работы с фреймворком VUE.JS',
                  },
                  {
                    svgs: [{svg: Javascript_svg,}],
                    descr_skills: 'Базовые знания JAVASCRIPT',
                  }
                ]
              },
              {
                programming_languages:[
                  {
                    svgs:[{svg:Sass_svg,},],
                    descr_skills:'Работа с препроцессором SASS/SCSS',
                  },
                  {
                    svgs: [{svg: Nuxt_svg,}],
                    descr_skills: 'Умение работать с фреймворком NUXT.JS',
                  },
                  {
                    svgs: [{svg: Flexbox_svg,}],
                    descr_skills: 'Практический опыт адаптивной кроссбраузерной верски (в том числе flexbox и grid)',
                  }
                ]
              },
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>
  .row{
    margin-top: 2% !important;
  }
  .col{
    padding: 0 !important;
  }
  .col-3:nth-child(1){
    padding: 0 !important;
  }
  .text{
    display: flex;
    align-items: center;
  }
</style>
