<template>
  <v-container id="start-page" style="height: 100vh">
    <v-col class="d-flex align-center flex-column" style="height: 90vh">
      <v-row class="d-flex align-center mobile-flex-column">
        <div class="text-h1 roboto-mono" v-text="'SECCOM'"></div>
        <div class="text-h1 blue-text-must-click roboto-mono" v-text="2020"></div>
      </v-row>
      <v-col class="d-flex flex-column justify-center">
        <v-row class="flex-grow-0 text-h5 roboto-mono">Semana Acadêmica da Computação e Sistemas</v-row>
        <v-row class="flex-grow-0 text-h5 roboto-mono">De 5 a 10 de outubro</v-row>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'StartPage',

  data: () => ({
  })
}
</script>

<style lang="scss">
  .blue-text-must-click {
    color: #2D78BA;
  }

  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }

  @media (max-aspect-ratio: 1/1) {
    .mobile-flex-column {
      flex-direction: column;
    }

    .mobile-hide {
      display: none;
    }
  }
</style>
