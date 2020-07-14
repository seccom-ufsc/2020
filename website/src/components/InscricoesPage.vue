<template>
  <v-container id="inscricoes-page" style="height: 100vh"></v-container>
</template>

<script>
export default {
  name: 'InscricoesPage',
  components: {},
  data: () => ({
    container: document.querySelector('#inscricoes-page'),
    
  }),
  mounted () {
    this.container = document.querySelector('#inscricoes-page')
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
