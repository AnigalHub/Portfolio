<template>
    <div id="Myfooter">
      <b-container class="text">
        Copyright © 2021 <br>
        <Logo_svg/>
        Ignatova Anna
      </b-container>
    </div>
</template>

<script>
    import Logo_svg from "~/components/logo_svg";
    export default {
        name: "myfooter",
      components: {Logo_svg}
    }
</script>

<style scoped>

</style>
