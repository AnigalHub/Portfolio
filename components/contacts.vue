<template>
  <div id="Contacts">
    <b-container>
      <h2>Контакты</h2>
      <b-row class="flex-container text">
        <div v-for="information in ContactsRow" :key="information.text">
            <a :href="information.href" :target="information.target">
              <component :is="information.svg"/>
              <p class="text">{{information.text}}</p>
            </a>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import Telephone_svg from "~/components/svg_contacts/telephone_svg";
    import Email_svg from "~/components/svg_contacts/email_svg";
    import Github_svg from "~/components/svg_contacts/github_svg";
    import Telegram_svg from "~/components/svg_contacts/telegram_svg";
    export default {
        name: "contacts",
        components: {Github_svg, Telegram_svg, Telephone_svg, Email_svg},
        data(){
          return{
            ContactsRow:[
              {
                svg:Telephone_svg,
                href:'tel:' + '+7 (903) 151-39-31',
                text:'+7 (903) 151-39-31',
                target:'_self'
              },
              {
                svg:Email_svg,
                href:'mailto:' + 'rezvetz@gmail.com',
                text:'annaignatova97@bk.ru',
                target:'_self'
              },
              {
                svg:Github_svg,
                href:'https://github.com/AnigalHub',
                text:'github.com/AnigalHub',
                target:'_blank'
              },
              {
                svg:Telegram_svg,
                href:'https://t.me/annaignatova97',
                text:'@annaignatova97',
                target:'_blank'
              },
            ]
          }
        }
    }
</script>

<style scoped>
  .text{
    text-align: center;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3%;
  }
  .flex-container > div {
    text-align: center;
  }
  svg{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
