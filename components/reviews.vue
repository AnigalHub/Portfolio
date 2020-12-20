<template>
    <div id="Reviews">
      <b-container>
      <h2>Отзывы</h2>
        <b-carousel v-model="slide" ref="myCarousel" :interval="4000" background="transparent" img-width="400" img-height="90">
          <b-carousel-slide  v-for="item in myArray" :key="item.id"  img-blank>
            <div class="text">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   width="24" height="24"
                   viewBox="0 0 172 172"
                   style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M154.05108,32.71942v0c0,1.64475 -1.00333,3.1605 -2.55133,3.71233c-13.115,4.67625 -33.24975,21.87267 -33.24975,49.56825c0,4.75867 0.81342,7.16667 2.65167,7.16667c2.15358,0 5.5685,-3.58333 15.265,-3.58333c11.78558,0 25.08333,9.3955 25.08333,25.29475c0,13.91408 -10.43467,28.45525 -28.66667,28.45525c-14.81708,0 -35.83333,-11.04742 -35.83333,-43.33325c0,-44.71283 33.67258,-63.69017 51.71467,-70.98942c2.66242,-1.075 5.58642,0.83492 5.58642,3.70875z"></path><path d="M68.05108,32.71942v0c0,1.64475 -1.00333,3.1605 -2.55133,3.71233c-13.115,4.67625 -33.24975,21.87267 -33.24975,49.56825c0,4.75867 0.81342,7.16667 2.65167,7.16667c2.15358,0 5.5685,-3.58333 15.265,-3.58333c11.78558,0 25.08333,9.3955 25.08333,25.29475c0,13.91408 -10.43467,28.45525 -28.66667,28.45525c-14.81708,0 -35.83333,-11.04742 -35.83333,-43.33325c0,-44.71283 33.67258,-63.69017 51.71467,-70.98942c2.66242,-1.075 5.58642,0.83492 5.58642,3.70875z"></path></g></g></svg>

              {{item.review}}
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   width="24" height="24"
                   viewBox="0 0 172 172"
                   style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M17.94892,139.32v0c0,-1.64475 1.00333,-3.1605 2.55133,-3.71233c13.115,-4.67625 33.24975,-21.87267 33.24975,-49.56825c0,-4.75867 -0.81342,-7.16667 -2.65167,-7.16667c-2.15358,0 -5.5685,3.58333 -15.265,3.58333c-11.78558,0 -25.08333,-9.3955 -25.08333,-25.29475c0,-13.91408 10.43467,-28.45525 28.66667,-28.45525c14.81708,0 35.83333,11.04742 35.83333,43.33325c0,44.71283 -33.67258,63.69017 -51.71467,70.98942c-2.66242,1.075 -5.58642,-0.83492 -5.58642,-3.70875z"></path><path d="M103.94892,139.32v0c0,-1.64475 1.00333,-3.1605 2.55133,-3.71233c13.115,-4.67625 33.24975,-21.87267 33.24975,-49.56825c0,-4.75867 -0.81342,-7.16667 -2.65167,-7.16667c-2.15358,0 -5.5685,3.58333 -15.265,3.58333c-11.78558,0 -25.08333,-9.3955 -25.08333,-25.29475c0,-13.91408 10.43467,-28.45525 28.66667,-28.45525c14.81708,0 35.83333,11.04742 35.83333,43.33325c0,44.71283 -33.67258,63.69017 -51.71467,70.98942c-2.66242,1.075 -5.58642,-0.83492 -5.58642,-3.70875z"></path></g></g></svg>
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
    export default {
        name: "reviews",
      data(){
        return {
          slide: 0,
          myArray: [
            {id:1,review:'Был написан новый современныйт сайт для компании, все требования по специфике компании были учтены, работа выполнена в срок.',
              author:'Генеральный директор компании "Промэлектронсервис" <br>  Альпов А.В.',style: false},
            {id:2,review:'',
              author:'Генеральный директор компании "Гостехносервис"  <br> Поляков Н.Б.',style: false},
            {id:3,review:'',
              author:'Генеральный директор компании "Аваконт"  <br> Поляков Н.Б.',style: true},
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
    border-radius: 0.313rem;
    padding: 0.313rem;
  }
  .text{
    font-size: 1.3rem !important;
    font-family: 'Piazzolla', serif;
    font-style: italic;
    display: block;
    margin: 2% 5% 0 5% ;
    height: 8vh;
  }
  .author{
    font-size: 1.2rem !important;
    font-family: 'Piazzolla', serif;
    margin-top: 5%;
    margin-left: 50%;
    justify-content: end !important;
    font-weight: 800;
  }
</style>
