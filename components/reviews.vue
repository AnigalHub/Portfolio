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
            {id:2,review:'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.' +
                'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.' +
                'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.' +
                'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.' ,
              author:'Генеральный директор компании "Гостехносервис"<br>Поляков Н.Б.',style: false},
            {id:3,review:'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.' +
                'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.',
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
<style lang="scss">
  .carousel-caption{
    left: 0 !important;
    right: 0 !important;
    bottom: auto;
    top: 1% !important;
    text-align: inherit !important;
    .author {
      text-align: end !important;
    }
  }
  .w-100 {
    width: 100% !important;
    height: 100% !important;
  }

</style>
<style lang="scss" scoped>
  .carousel-control-prev {
    float: left !important;
  }
  .carousel-control-prev, .carousel-control-next {
    position: relative !important;
    width: 5% !important;
    margin-left: 45%;
    margin-top: 2%;
  }
  .text{
    font-style: italic;
    display: block;
    margin: 2% 5% 0 5% ;
    height: 10vh;
  }
  .author{
    margin-top: 7%;
    margin-left: 50%;
    justify-content: end !important;
    font-weight: 800;
  }
</style>
