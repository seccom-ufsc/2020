<template>
  <v-container id="palestrantes-page" style="height: 100vh"></v-container>
</template>

<script>
export default {
  name: 'PalestrantesPage',
  components: {},
  data: () => ({
    container: document.querySelector('#palestrantes-page'),
    
  }),
  mounted () {
    this.container = document.querySelector('#palestrantes-page')
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
