<template>
  <div id="Contact">
    <b-container>
      <h2>Контакты</h2>
    <p class="text">
      Если у вас есть вопросы, я с радостью отвечу на них!
      Для этого свяжитесь со мной удобным для вас способом и я отвечу Вам в ближайшее время!
    </p>
    <div class="flex-container">
      <div v-for="information in ContactsRow" :key="information.text">
        <a :href="information.href" :target="information.target">
          <b-row>
            <b-col cols="2">
              <component :is="information.svg"/>
            </b-col>
            <b-col>
              <div class="text name">{{information.name}}</div>
              <p class="text inf">{{information.http}}</p>
            </b-col>
          </b-row>
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
      name: "contact",
      data(){
          return{
            ContactsRow:[
              {
                svg:Telephone_svg,
                href:'tel:' + '+7 (903) 151-39-31',
                target:'_self',
                name:'Телефон:',
                http:'+7 (903) 151-39-31'
              },
              {
                svg:Email_svg,
                href:'mailto:' + 'annaignatova97@bk.ru',
                target:'_self',
                name:'Email:',
                http:'annaignatova97@bk.ru'
              },
              {
                svg:Github_svg,
                href:'https://github.com/AnigalHub',
                target:'_blank',
                name:'Github:',
                http:'github.com/AnigalHub'
              },
              {
                svg:Telegram_svg,
                href:'https://t.me/annaignatova97',
                target:'_blank',
                name:'Telegram:',
                http:'@annaignatova97',
              },
              // {
              //   svg:Skype_svg,
              //   href:'https://t.me/annaignatova97',
              //   target:'_blank',
              //   name:'Skype:',
              // },
              // {
              //   svg:Web_svg,
              //   href:'https://anigalhub.github.io/',
              //   target:'_blank',
              //   name:'Сайт:',
              //   http:'anigalhub.github.io',
              // },
            ]
          }
      }
    }
</script>

<style scoped>

</style>
