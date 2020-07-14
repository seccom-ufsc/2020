<template>
  <v-container id="contact-page" style="height: 100vh"></v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  components: {},
  data: () => ({
    container: document.querySelector('#contact-page'),
    
  }),
  mounted () {
    this.container = document.querySelector('#contact-page')
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
