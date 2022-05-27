<template>
  <div id="Myfooter">
    <b-container>
      <b-row>
        <b-col>
          <div class="text">
            CopyRight© 2022  Junior Frontend Developer
          </div>
        </b-col>
        <b-col cols="6">
          <div class="flex-container svgFooter">
            <div v-for="information in ContactsRow" :key="information.text">
              <a :href="information.href" :target="information.target">
                <component :is="information.svg"/>
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import Github_svg from "~/components/svg_contacts/github_svg";
    import Telegram_svg from "~/components/svg_contacts/telegram_svg";
    import Telephone_svg from "~/components/svg_contacts/telephone_svg";
    import Email_svg from "~/components/svg_contacts/email_svg";
    export default {
      name: "myfooter",
      components: {Github_svg, Telegram_svg, Telephone_svg, Email_svg},
      data(){
        return{
          ContactsRow:[
            {
              svg:Telephone_svg,
              href:'tel:' + '+7 (903) 151-39-31',
              target:'_self'
            },
            {
              svg:Email_svg,
              href:'mailto:' + 'annaignatova97@bk.ru',
              target:'_self'
            },
            {
              svg:Github_svg,
              href:'https://github.com/AnigalHub',
              target:'_blank'
            },
            {
              svg:Telegram_svg,
              href:'https://t.me/annaignatova97',
              target:'_blank'
            },
          ]
        }
      }
    }
</script>

<style scoped>

</style>
