<template>
  <div id="Skills">
    <b-container>
      <h2>Ключевые навыки</h2>
      <div class="flex-container">
        <div v-for="(skill,index) in Skills" :key="index" :href="skill.link" target="_blank">
          <component :key="index" :is="skill.svg"/>
          <div class="text">{{skill.skills_name}}</div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import Vue_svg from "~/components/svg_skills/vue_svg";
  import Javascript_svg from "~/components/svg_skills/javascript_svg";
  import Typescript_svg from "~/components/svg_skills/typescript_svg";
  import Nuxt_svg from "~/components/svg_skills/nuxt_svg";
  import Html_svg from "~/components/svg_skills/html_svg";
  import Css_svg from "~/components/svg_skills/css_svg";
  import Bootstrap_svg from "~/components/svg_skills/bootstrap_svg";
  import Sass_svg from "~/components/svg_skills/sass_svg";
  import Node_svg from "~/components/svg_skills/node_svg";
  import Express_svg from "~/components/svg_skills/express_svg";
  import PostgreSQL_svg from "~/components/svg_skills/postgresql_svg";
  import Git_svg from "~/components/svg_skills/git_svg";
  export default {
    name: "skills",
    components: {Git_svg, Nuxt_svg, Sass_svg, Javascript_svg, Vue_svg, Html_svg, Node_svg, PostgreSQL_svg, Typescript_svg, Bootstrap_svg, Express_svg},
    data(){
      return{
        Skills:[
          {svg:Vue_svg, skills_name: 'Vue.js'},
          {svg:Javascript_svg, skills_name: 'Javascript'},
          {svg:Typescript_svg, skills_name: 'Typescript'},
          {svg:Bootstrap_svg, skills_name:'Boostrap'},
          {svg:Html_svg, skills_name:'HTML'},
          {svg:Css_svg, skills_name:'CSS'},
          {svg:Nuxt_svg, skills_name: 'Nuxt.js'},
          {svg:Sass_svg, skills_name:'SCSS'},
          {svg:Node_svg, skills_name: 'Node.js'},
          {svg:Express_svg, skills_name: 'Express.js'},
          {svg:PostgreSQL_svg, skills_name: 'PostgreSQL'},
          {svg:Git_svg, skills_name: 'Git'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
