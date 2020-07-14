<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="text-h6 roboto-mono px-3 blue-text-must-click mobile-hide">SECCOM</div>
      <v-spacer></v-spacer>
      <v-tabs v-model="activeTab" right slider-color="#2D78BA" slider-size="4" color="#2D78BA">
        <v-tab @click="changeTab(index)" v-for="(tab, index) in tabs" :key="tab.id" :id="tab.id" class="roboto-mono">
          {{tab.titulo}}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <StartPage/>
      <ProgramacaoPage/>
      <PalestrantesPage/>
      <ContatoPage/>
      <InscricoesPage/>
      <FourierBackground/>
    </v-main>
  </v-app>
</template>

<script>
import StartPage from './components/StartPage'
import ProgramacaoPage from './components/ProgramacaoPage'
import PalestrantesPage from './components/PalestrantesPage'
import ContatoPage from './components/ContatoPage'
import InscricoesPage from './components/InscricoesPage'
import FourierBackground from './components/FourierBackground'

export default {
  name: 'App',
  components: {
    StartPage,
    ProgramacaoPage,
    PalestrantesPage,
    ContatoPage,
    InscricoesPage,
    FourierBackground
  },
  data: () => ({
    marks: {
      home: null,
      programacao: null,
      palestrantes: null,
      contato: null,
      inscricoes: null
    },
    tabs: [
      { id: 'start-page-tab', titulo: 'INÍCIO', container: 'start-page' },
      { id: 'programacao-page-tab', titulo: 'PROGRAMAÇÃO', container: 'programacao-page' },
      { id: 'palestrantes-page-tab', titulo: 'PALESTRANTES', container: 'palestrantes-page' },
      { id: 'contato-page-tab', titulo: 'CONTATO', container: 'contato-page' },
      { id: 'inscricoes-page-tab', titulo: 'INSCRIÇÕES', container: 'inscricoes-page' },
    ],
    activeTab: 0,
  }),
  mounted () {
    this.marks.home = document.querySelector('#start-page')
    this.marks.programacao = document.querySelector('#programacao-page')
    this.marks.palestrantes = document.querySelector('#palestrantes-page')
    this.marks.contato = document.querySelector('#contato-page')
    this.marks.inscricoes = document.querySelector('#inscricoes-page')
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY >= (this.marks.inscricoes.offsetTop - 80)) {
        this.activeTab = 4
      } else if (window.scrollY >= (this.marks.contato.offsetTop - 80)) {
        this.activeTab = 3
      } else if (window.scrollY >= (this.marks.palestrantes.offsetTop - 80)) {
        this.activeTab = 2
      } else if (window.scrollY >= (this.marks.programacao.offsetTop - 80)) {
        this.activeTab = 1
      } else {
        this.activeTab = 0
      }
    },
    changeTab (index) {
      this.activeTab = index
      console.log(document.getElementById(this.tabs[index].container).offsetTop)
      window.scrollTo({
        top: document.getElementById(this.tabs[index].container).offsetTop,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
  .v-toolbar__content .roboto-mono {
    font-family: 'Roboto Mono', monospace !important;
  }

  .v-toolbar__content .blue-text-must-click {
    color: #2D78BA;
  }

  @media (max-aspect-ratio: 1/1) {
    .mobile-hide {
      display: none;
    }
  }
</style>
