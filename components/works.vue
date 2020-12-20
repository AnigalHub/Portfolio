<template>
    <div id="Works">
      <b-container>
        <h2>Мои работы</h2>
        <div class="grid-container">
          <div class="grid-item">
            <img src="../static/home_prom.jpg">
          </div>
          <div class="grid-item">
            <img src="../static/home_prom2.png">
          </div>
          <div class="grid-item">
            <img src="../static/home_gts.png">
          </div>
          <div class="grid-item">
            <img src="../static/home_priamyeruki.jpg">
          </div>
          <div class="grid-item">
            <img src="../static/home_avacont.jpg">
          </div>
        </div>
      </b-container>
    </div>
</template>

<script>
    export default {
        name: "works"
    }
</script>

<style scoped>
  .grid-container {
    margin-top: 2%;
    display: grid;
    grid-gap: 25px 25px;
    grid-template-columns: auto auto auto;
    padding: 10px;
  }
  img{
    width: 100%;
    height: 28vh;
  }

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 5px 5px 5px rgb(24, 31, 49);
    text-align: center;
  }
  .grid-item:hover {
    box-shadow: 8px 10px 10px rgb(24, 31, 49);
  }
</style>
