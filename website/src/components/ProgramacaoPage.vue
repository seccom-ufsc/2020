<template>
  <v-container id="programacao-page" style="height: 100vh">
    <v-sheet :max-width="window.innerWidth" color="rgba(0,0,0,0)">
      <v-carousel :height="800" hide-delimiters :show-arrows="true" :show-arrows-on-hover="true">
        <v-carousel-item v-for="item in dias" :key="item.data">
          <v-card class="fill-height flex-grow-1 px-sm-6 px-md-8 px-lg-12 px-xl-16 py-5">
            <v-card-title>{{item.data}}</v-card-title>
            <v-card-subtitle>{{item.weekday}}</v-card-subtitle>
            <v-card-text>
              <div v-for="(palestra, index) in item.palestras" :key="index">
                <ItemPalestra :palestra="palestra"/>
              </div>
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-container>
</template>

<script>
import ItemPalestra from './ItemPalestra'

export default {
  name: 'ProgramacaoPage',
  components: {
    ItemPalestra
  },
  data: () => ({
    container: document.querySelector('#programacao-page'),
    window: window, 
    dias: [
      { 
        data: '05/10',
        weekday: 'Segunda-feira',
        palestras: [
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00'
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00'
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00'
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00'
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00'
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00'
          }
        ] 
      },
      { 
        data: '06/10',
        weekday: 'Terça-feira',
        palestras: [
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
        ] 
      },
      { 
        data: '07/10',
        weekday: 'Quarta-feira',
        palestras: [
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
        ] 
      },
      { 
        data: '08/10',
        weekday: 'Quinta-feira',
        palestras: [
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
        ] 
      },
      { 
        data: '09/10',
        weekday: 'Sexta-feira',
        palestras: [
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
          {
            titulo: 'Palestrinha',
            subtitulo: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            inicio: '15:00',
            fim: '16:00',
          },
        ] 
      },
    ]
  }),
  mounted () {
    this.container = document.querySelector('#programacao-page')
    console.log(this)
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

  .v-window__prev, .v-window__next {
    background: rgba(0, 0, 0, 0) !important;    
  }
</style>
