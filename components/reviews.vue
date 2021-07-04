<template>
    <div id="Reviews">
      <b-container>
      <h2>Отзывы</h2>
        <b-carousel v-model="slide" ref="myCarousel" :interval="4000" background="transparent" img-width="400" img-height="100">
          <b-carousel-slide  v-for="item in myArray" :key="item.id"  img-blank>
            <div class="text">
              <Left_quotes_svg/>
              {{item.review}}
              <Right_quotes_svg/>
            </div>
            <div class="author" v-html="item.author"></div>
          </b-carousel-slide>
        </b-carousel>
        <a class="carousel-control-prev" @click="prevSlide()" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" @click="nextSlide()" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </b-container>
    </div>
</template>

<script>
    import Left_quotes_svg from "~/components/svg_reviews/left_quotes_svg";
    import Right_quotes_svg from "~/components/svg_reviews/right_quotes_svg";
    export default {
        name: "reviews",
      components: {Right_quotes_svg, Left_quotes_svg},
      data(){
        return {
          slide: 0,
          myArray: [
            {id:1,review:'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.' +
                'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.' +
                'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.',
              author:'Генеральный директор компании "Промэлектронсервис"<br> Альпов А.В.',style: false},
            {id:2,review:'Был написан новый современныйт сайт для компании Гостехносервис. Единственное требование было - в фиолетовом цвете и отличающийся от других похожих компаний. ' +
                'Сайт полностью оправдал мои ожидания, в особенности как красиво визуализировано то, чем занимается наша компания. Все поддерживается на всех девайсах и браузерах.' ,
              author:'Генеральный директор компании "Гостехносервис"<br>Поляков Н.Б.',style: false},
            {id:3,review:'Заказал два сайта для компаний Аваконт: сайт по изготовлению накладок на дерево и сайт по услугам. Без ТЗ мне предоставили макеты, внесли все правки. ' +
                'Сайты идентичны предоставленным макетам. Все сделано в срок. Работой полностью доволен.',
              author:'Генеральный директор компании "Аваконт"<br>Поляков Н.Б.',style: true},
          ]
        }
      },
      methods: {
        prevSlide(){
          this.$refs.myCarousel.prev();
        },
        nextSlide(){
          this.$refs.myCarousel.next();
        },
      }
    }
</script>

<style lang="scss" scoped>

</style>
