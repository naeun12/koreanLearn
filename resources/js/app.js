import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import homepage from '../js/components/users/homepage.vue'
import koreanletters from '../js/components/users/koreanletters.vue'
import vocabulary from '../js/components/users/vocabulary.vue'
import noun from '../js/components/users/partofspeech/noun.vue'
import verb from '../js/components/users/partofspeech/verb.vue'
import adjective from '../js/components/users/partofspeech/adjectives.vue'
import adverb from '../js/components/users/partofspeech/adverbs.vue'
import particles from '../js/components/users/partofspeech/particle.vue'
import pronouns from '../js/components/users/partofspeech/pronoun.vue'
import quiz from '../js/components/users/partofspeech/quizmode.vue'
import lesson from './components/users/lessonOne/lesson1/lessonOneIndex.vue'

const homepageContainer = document.querySelector('#homepage')
if (homepageContainer) {
    createApp(homepage).mount('#homepage')
}
const koreanlettersContainer = document.querySelector('#koreanletters')
if (koreanlettersContainer) {
    createApp(koreanletters).mount('#koreanletters')
}
const vocabularyContainer = document.querySelector('#vocabulary')
if (vocabularyContainer) {
    createApp(vocabulary).mount('#vocabulary')
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
