<template>
  <v-container id="speakers-page" style="height: 100vh"></v-container>
</template>

<script>
export default {
  name: 'SpeakersPage',
  components: {},
  data: () => ({
    container: document.querySelector('#speakers-page'),
  }),
  mounted () {
    this.container = document.querySelector('#speakers-page')
  }
}
</script>

<style lang="scss">
  .blue-text-must-click {
    color: #2D78BA;
  }
  
  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
