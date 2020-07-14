<template>
  <v-container id="contato-page" style="height: 100vh"></v-container>
</template>

<script>
export default {
  name: 'ContatoPage',
  components: {},
  data: () => ({
    container: document.querySelector('#contato-page'),
    
  }),
  mounted () {
    this.container = document.querySelector('#contato-page')
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
