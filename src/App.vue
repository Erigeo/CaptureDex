<script lang="ts">
import Banner from './components/Banner.vue'
import NationalDex from './components/NationalDex.vue'

export default {
  components: { Banner, NationalDex}
}
</script>

<template>
  <Banner />
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');


body {
  font-family: "Roboto", sans-serif;
  background-color: rgb(158, 199, 191);

}

</style>
