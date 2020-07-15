<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-row><img :src="'../speakers/' + speaker.photo"/></v-row>
    <v-row class="text-body-1">{{speaker.name}}</v-row>
    <v-row class="font-italic blue-text-must-click">{{speaker.role}}</v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ItemSpeaker',
  data () {
    return {}
  },
  props: ['speaker']
})
</script>

<style lang="scss" scoped>
  img {
      width: 110px;
      height: 110px;
      border-radius: 99999px;
      margin-bottom: 8px;
  }
</style>
