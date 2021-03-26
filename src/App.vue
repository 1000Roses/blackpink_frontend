<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './core/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

