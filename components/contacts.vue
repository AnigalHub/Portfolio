<template>
  <div id="Contacts">
    <b-container>
      <div class="flex-container text">
        <div v-for="information in ContactsRow" :key="information.text">
          <a :href="information.href" :target="information.target">
            <component :is="information.svg"/>
            <p class="text">{{information.text}}</p>
          </a>
        </div>
      </div>
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

</style>
