<template>
  <v-container id="contact-page">
    <v-row class="d-flex justify-center my-15 roboto-mono">
      <div class="text-h2" v-text="'Quer falar com a gente?'"></div>
    </v-row>
    <v-row class="d-flex justify-center">
      <ContactCard class="ma-5" :contact="item" v-for="(item, index) in contacts" :key="index"/>
    </v-row>
  </v-container>
</template>

<script>
import ContactCard from './ContactCard'

export default {
  name: 'ContactPage',
  components: {
    ContactCard
  },
  data: () => ({
    container: document.querySelector('#contact-page'),
    contacts: [
      { icon: 'mdi-twitter', name: '@seccom-ufsc' },
      { icon: 'mdi-instagram', name: '@seccom-ufsc' },
      { icon: 'mdi-email', name: 'seccom.ufsc@gmail.com' },
      { icon: 'mdi-github', name: 'seccom.ufsc@gmail.com' },
      { icon: 'mdi-discord', name: 'seccom.ufsc@gmail.com' },
      { icon: 'mdi-telegram', name: 'seccom.ufsc@gmail.com' },
    ]
  }),
  mounted () {
    this.container = document.querySelector('#contact-page')
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
