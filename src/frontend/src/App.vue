<script setup>
import { onMounted, onBeforeMount, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

let apiUrl = 'http://127.0.0.1:5500/api'
// const backendURL = await window.electronAPI.getBackendUrl()

const messageFromApi = ref('')
async function getMessage() {
  try {
    const response = await fetch(apiUrl + '/msg')
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    messageFromApi.value = await response.json()
    console.log(messageFromApi)
  } catch (error) {
    console.error(error.message)
  }
}

onBeforeMount(async () => {
  console.log(`onBeforeMount`)
  getMessage()
})
onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>

<template lang="pug">
header
  img(alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125")
  div.wrapper
    HelloWorld(:msg="messageFromApi")

    nav
      RouterLink(to="/") Home
      RouterLink(to="/about") About
RouterView
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
