<template>
  <div class="stats">
    <h1>Madras Basketball</h1>
    <h2 id="stats-type">Per 75 Possesions</h2>
    <StatList :stats="stats" />
  </div>
</template>

<script>
import StatList from "../components/StatList.vue"
export default {
  name: 'Stats',
  components: {
    StatList
  },
  data() {
    return {
    }
  },
  computed: {
    stats() {
      return this.$root.$data.stats;
    }
  },
}
</script>

<style>
#stats-type {
  margin-top: -1em !important;
  font-size: 1.2em;
}

.stats {
  margin-bottom: 80px;
}
</style>
