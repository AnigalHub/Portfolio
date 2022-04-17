<template>
    <div id="Skills">
      <b-container>
      <h2>Ключевые навыки</h2>
        <b-row class="important_row">
          <b-col v-for="(skill,index) in SkillsRow" :key="index">
            <b-row v-for="language in skill.programming_languages" :key="language.descr_skills">
              <b-col cols="4">
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
    import Git_svg from "~/components/svg_skills/git_svg";
    import Html_svg from "~/components/svg_skills/html_svg";
    import Css_svg from "~/components/svg_skills/css_svg";
    import Bootstrap_svg from "~/components/svg_skills/boostrap_svg";
    import Node_svg from "~/components/svg_skills/node_svg";
    import PostgreSQL_svg from "~/components/svg_skills/postgre_sql";
    import Typescript_svg from "~/components/svg_skills/typescript_svg";
    import Express_svg from "~/components/svg_skills/express_svg";
    export default {
        name: "skills",
      components: {Git_svg, Nuxt_svg, Sass_svg, Javascript_svg, Vue_svg, Html_svg, Node_svg, PostgreSQL_svg,
        Typescript_svg, Bootstrap_svg, Express_svg},
      data(){
          return{
            SkillsRow:[

              {
                programming_languages:[
                  {svg: Vue_svg, descr_skills: 'Vue.js (options API)',},
                  {svg:Javascript_svg, descr_skills: 'Javascript',},
                  {svg:Typescript_svg, descr_skills: 'Typescript',},

                ]
              },
              {
                programming_languages:[
                  {svg: Nuxt_svg, descr_skills: 'Nuxt.js',},
                  {svg:Html_svg, descr_skills:'HTML',},
                  {svg:Css_svg, descr_skills:'CSS',},

                ]
              },
              {
                programming_languages:[
                  {svg:Bootstrap_svg, descr_skills:'Boostrap',},
                  {svg:Sass_svg, descr_skills:'SASS/SCSS',},
                  {svg:NodeAndWebpack_svg, descr_skills: 'Node.js',},

                ]
              },
              {
                programming_languages:[
                  {svg:Express_svg, descr_skills: 'Express.js',},
                  {svg:PostgreSQL_svg, descr_skills: 'PostgreSQL',},
                  {svg:Git_svg, descr_skills: 'Git',}
                ]
              },
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>
