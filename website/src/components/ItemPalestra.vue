<template>
  <v-row>
    <v-col class="flex-grow-0">
      <div class="text-subtitle-1 blue-text-must-click">{{palestra.inicio}}</div>
      <div class="text-subtitle-1 blue-text-must-click">{{palestra.fim}}</div>
    </v-col>
    <v-col class="flex-grow-1">
      <div class="text-h5">{{palestra.titulo}}</div>
      <div class="text-body-2">{{palestra.subtitulo}}</div>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ItemPalestra',
  data () {
    return {}
  },
  props: ['palestra']
})
</script>

<style lang="scss">
  .blue-text-must-click {
    color: #2D78BA;
  }

  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
