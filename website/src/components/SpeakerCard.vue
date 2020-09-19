<template>
  <v-card class="speaker-card" style="max-width: 400px">
    <v-row class="d-flex justify-center pa-8">
      <v-avatar size="150" rounded="circle">
        <img :src="speaker.photo" style="object-fit: cover">
      </v-avatar>
    </v-row>
    <v-card-title>{{speaker.name}}</v-card-title>
    <v-card-subtitle>{{speaker.title}}</v-card-subtitle>
    <v-card-text style="text-align: justify">{{speaker.text}}</v-card-text>
  </v-card>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {}
  },
  props: ['speaker'],
})

</script>

<style>
  .speaker-card {
    max-width: 300px;
  }
  
  @media (max-aspect-ratio: 1/1) {
    .speaker-card {
      max-width: 100%;
    }
  }
</style>
