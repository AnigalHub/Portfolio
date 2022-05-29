<template>
  <div id="Skills">
    <b-container>
      <h2>Ключевые навыки</h2>
      <div class="flex-container">
        <a v-for="(skill,index) in Skills" :key="index" :href="skill.link" target="_blank">
          <component :key="index" :is="skill.svg"/>
          <div class="text">{{skill.skills_name}}</div>
        </a>
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
    import Bootstrap_svg from "~/components/svg_skills/boostrap_svg";
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
              {svg:Vue_svg, skills_name: 'Vue.js',link:'https://vuejs.org/'},
              {svg:Javascript_svg, skills_name: 'Javascript',link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
              {svg:Typescript_svg, skills_name: 'Typescript',link:'https://www.typescriptlang.org/'},
              {svg:Bootstrap_svg, skills_name:'Boostrap',link:'https://getbootstrap.com/'},
              {svg:Html_svg, skills_name:'HTML',link:'https://www.w3.org/html/'},
              {svg:Css_svg, skills_name:'CSS',link:'https://www.w3schools.com/css/'},
              {svg:Nuxt_svg, skills_name: 'Nuxt.js',link:'https://nuxtjs.org/'},
              {svg:Sass_svg, skills_name:'SCSS',link:'https://sass-lang.com/'},
              {svg:Node_svg, skills_name: 'Node.js',link:'https://nodejs.org/en/'},
              {svg:Express_svg, skills_name: 'Express.js',link:'https://expressjs.com/'},
              {svg:PostgreSQL_svg, skills_name: 'PostgreSQL',link:'https://www.postgresql.org/'},
              {svg:Git_svg, skills_name: 'Git',link:'https://git-scm.com/'},
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>
