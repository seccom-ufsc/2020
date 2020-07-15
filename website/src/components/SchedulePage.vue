<template>
  <v-container id="schedule-page" style="min-height: 100vh">
    <v-sheet :max-width="window.innerWidth" color="rgba(0,0,0,0)">
      <v-carousel height="auto" :value="step" hide-delimiters :show-arrows="true" :show-arrows-on-hover="true">
        <v-carousel-item v-for="(item, step) in days" :key="item.date">
          <v-card class="fill-height flex-grow-1 px-sm-6 px-md-8 px-lg-12 px-xl-16 py-5">
            <v-row class="d-flex flex-column align-center">
              <v-card-title class="text-h4">{{step + 1}}º DIA</v-card-title>
              <v-card-subtitle class="blue-text-must-click">{{item.date}} - {{item.weekday}}</v-card-subtitle>
            </v-row>
            <v-card-text class="d-flex flex-column align-center">
              <div v-for="(speech, index) in item.speeches" :key="index" style="width: 70%">
                <ItemSpeech :speech="speech"/>
              </div>
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-container>
</template>

<script>
import ItemSpeech from './ItemSpeech'

export default {
  name: 'SchedulePage',
  components: { ItemSpeech },
  data: () => ({
    container: document.querySelector('#schedule-page'),
    window: window,
    step: 0,
    days: [
      { 
        date: '05/10',
        weekday: 'Segunda-feira',
        speeches: [
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidasdfaatat nisi fugiat cupidatatst qui cillum cupidatat nisi fugiat cupidatatst qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00'
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidasdfaatat nisi fugiat cupidatatst qui cillum cupidatat nisi fugiat cupidatatst qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00'
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidasdfaatat nisi fugiat cupidatatst qui cillum cupidatat nisi fugiat cupidatatst qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00'
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidasdfaatat nisi fugiat cupidatatst qui cillum cupidatat nisi fugiat cupidatatst qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00'
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00'
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00'
          }
        ] 
      },
      { 
        date: '06/10',
        weekday: 'Terça-feira',
        speeches: [
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
        ] 
      },
      { 
        date: '07/10',
        weekday: 'Quarta-feira',
        speeches: [
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
        ] 
      },
      { 
        date: '08/10',
        weekday: 'Quinta-feira',
        speeches: [
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
        ] 
      },
      { 
        date: '09/10',
        weekday: 'Sexta-feira',
        speeches: [
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
          {
            title: 'Palestrinha',
            subtitle: 'Commodo quis est qui cillum cupidatat nisi fugiat cupidatat aliquip ut occaecat.',
            start: '15:00',
            end: '16:00',
          },
        ] 
      },
    ]
  }),
  mounted () {
    this.container = document.querySelector('#schedule-page')
  }
}
</script>

<style lang="scss">
  .blue-text-must-click {
    color: #2D78BA !important;
  }

  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }

  .v-window__prev, .v-window__next {
    background: rgba(0, 0, 0, 0) !important;    
  }
</style>
