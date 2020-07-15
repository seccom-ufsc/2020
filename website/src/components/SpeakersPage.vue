<template>
  <v-container id="speakers-page" class="d-flex flex-wrap justify-space-around" style="margin-top: 50px">
    <ItemSpeaker class="speaker-card" v-for="(speaker, index) in speakers" :speaker="speaker" :key="index"/>
  </v-container>
</template>

<script>
import ItemSpeaker from './ItemSpeaker'

export default {
  name: 'SpeakersPage',
  components: { ItemSpeaker },
  data: () => ({
    container: document.querySelector('#speakers-page'),
    speakers: [
      { id: 0, name: 'aaaaaaaa', role: 'AAAAAAAA', photo: 'default.png' },
      { id: 1, name: 'bbbbbbbb', role: 'BBBBBBBB', photo: 'default.png' },
      { id: 2, name: 'cccccccc', role: 'CCCCCCCC', photo: 'default.png' },
      { id: 3, name: 'dddddddd', role: 'DDDDDDDD', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
      { id: 4, name: 'eeeeeeee', role: 'EEEEEEEE', photo: 'default.png' },
    ]
  }),
  mounted () {
    this.container = document.querySelector('#speakers-page')
  }
}
</script>

<style lang="scss">
  .speaker-card {
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    margin-bottom: 20px;
  }
</style>
