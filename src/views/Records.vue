<template>
  <div class="record-div">
    <h1>All-Time PER 75 Possesion Leaders</h1>
    <RecordsList :stats="stats"/>
  </div>
</template>

<script>
import RecordsList from "../components/RecordsList.vue"
export default {
  name: 'Records',
  components: {
    RecordsList
  },
  data() {
    return {
    }
  },
  computed: {
    stats() {
      return this.$root.$data.stats;
    },
  },
}
</script>

<style>
  .record-div {
    margin-bottom: 80px;
  }
</style>
