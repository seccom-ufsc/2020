<template>
  <v-container id="schedule-page">
    <v-sheet :max-width="window.innerWidth">
      <v-carousel :height="600" hide-delimiters :show-arrows="true" :show-arrows-on-hover="true">
        <v-carousel-item v-for="item in days" :key="item.data">
          <v-card class="fill-height flex-grow-1 px-sm-6 px-md-8 px-lg-12 px-xl-16 py-5">
            <v-card-title>{{item.data}}</v-card-title>
            <v-card-subtitle>{{item.weekday}}</v-card-subtitle>
            <v-card-text>
              <div v-for="(speech, index) in item.speeches" :key="index">
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
  components: {
    ItemSpeech
  },
  data: () => ({
    container: document.querySelector('#schedule-page'),
    window: window,
    days: [
      { 
        date: '05/10',
        weekday: 'Segunda-feira',
        speeches: [
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
    color: #474793;
  }

  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }

  .v-window__prev, .v-window__next {
    background: rgba(0, 0, 0, 0) !important;    
  }
</style>
