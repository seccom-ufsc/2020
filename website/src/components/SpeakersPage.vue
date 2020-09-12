<template>
  <v-container id="speakers-page">
    <v-row class="d-flex justify-space-between">
      <SpeakerCard class="ma-4" v-for="(speaker, index) in speakers" :key="index" :speaker="speaker"/>
    </v-row>
  </v-container>
</template>

<script>
import SpeakerCard from './SpeakerCard'

export default {
  name: 'SpeakersPage',
  components: {
    SpeakerCard
  },
  data: () => ({
    container: document.querySelector('#speakers-page'),
    speakers: [
      { name: 'Velho do Shutterstock', title: 'Analista de Dados', text: 'Cillum dolor ipsum sit laborum elit do ut labore. Esse officia velit quis quis in culpa quis dolore sunt velit. Aute cupidatat officia occaecat sint minim aliqua incididunt aliqua.', photo: 'https://image.shutterstock.com/z/stock-photo-portrait-of-happy-old-man-smiling-looking-at-camera-75633424.jpg' },
      { name: 'Velho do Shutterstock', title: 'Analista de Dados', text: 'Reprehenderit nisi aliquip laborum ullamco aute irure aliqua incididunt officia est laboris. Commodo culpa duis proident aliquip et non. Officia velit veniam nisi mollit velit commodo consectetur veniam ex proident eiusmod aliquip.', photo: 'https://image.shutterstock.com/z/stock-photo-portrait-of-happy-old-man-smiling-looking-at-camera-75633424.jpg' },
      { name: 'Velho do Shutterstock', title: 'Analista de Dados', text: 'Sit deserunt irure labore ea et aliqua anim id. Adipisicing officia consectetur ullamco id minim sunt aliquip incididunt pariatur sunt enim veniam sint. Dolore adipisicing ipsum ut amet deserunt.', photo: 'https://image.shutterstock.com/z/stock-photo-portrait-of-happy-old-man-smiling-looking-at-camera-75633424.jpg' },
      { name: 'Velho do Shutterstock', title: 'Analista de Dados', text: 'Ullamco id cillum proident Lorem mollit. Dolore cupidatat adipisicing incididunt ex duis. Officia id irure ad cupidatat elit.', photo: 'https://image.shutterstock.com/z/stock-photo-portrait-of-happy-old-man-smiling-looking-at-camera-75633424.jpg' },
      { name: 'Velho do Shutterstock', title: 'Analista de Dados', text: 'Ipsum amet consectetur ex velit anim ipsum aute tempor dolore. Incididunt aliqua sit consectetur ut mollit et consectetur occaecat sunt aliqua mollit pariatur anim. Eiusmod duis velit laboris ullamco adipisicing deserunt ad mollit proident ullamco nulla quis consectetur labore.', photo: 'https://image.shutterstock.com/z/stock-photo-portrait-of-happy-old-man-smiling-looking-at-camera-75633424.jpg' },
    ]
  }),
  mounted () {
    this.container = document.querySelector('#speakers-page')
  }
}
</script>

<style lang='scss'>
  .blue-text-must-click {
    color: #474793;
  }
  
  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
