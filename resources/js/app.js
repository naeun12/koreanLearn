import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import homepage from './components/homepage.vue'
import koreanletters from './components/koreanletters.vue'
import volcabulary from './components/volcabulary.vue'
import noun from './components/partofspeech/noun.vue'
import verb from './components/partofspeech/verb.vue'
import adjective from './components/partofspeech/adjectives.vue'
import adverb from './components/partofspeech/adverbs.vue'
import particles from './components/partofspeech/particle.vue'
import pronouns from './components/partofspeech/pronoun.vue'
import quiz from './components/partofspeech/quizmode.vue'
import lesson from './components/lesson.vue'

const homepageContainer = document.querySelector('#homepage')
if (homepageContainer) {
    createApp(homepage).mount('#homepage')
}
const koreanlettersContainer = document.querySelector('#koreanletters')
if (koreanlettersContainer) {
    createApp(koreanletters).mount('#koreanletters')
}
const volcabularyContainer = document.querySelector('#volcabulary')
if (volcabularyContainer) {
    createApp(volcabulary).mount('#volcabulary')
}
const nounContainer = document.querySelector('#noun')
if (nounContainer) {
    createApp(noun).mount('#noun')
}
const verbContainer = document.querySelector('#verb')
if (verbContainer) {
    createApp(verb).mount('#verb')
}
const adjectiveContainer = document.querySelector('#adjective')
if (adjectiveContainer) {
    createApp(adjective).mount('#adjective')
}
const adverbContainer = document.querySelector('#adverb')
if (adverbContainer) {
    createApp(adverb).mount('#adverb')
}
const pronounsContainer = document.querySelector('#pronouns')
if (pronounsContainer) {
    createApp(pronouns).mount('#pronouns')
}
const particlesContainer = document.querySelector('#particles')
if (particlesContainer) {
    createApp(particles).mount('#particles')
}
const quizContainer = document.querySelector('#quiz')
if (quizContainer) {
    createApp(quiz).mount('#quiz')
}
const lessonContainer = document.querySelector('#lesson')
if (lessonContainer) {
    createApp(lesson).mount('#lesson')
}
