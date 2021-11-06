<template>
  <div class="wrapper" id="records-list">
    <div class="records">
      <div class="leader">
        <h2>Points</h2>
        <div class="leader-table">
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>PPG</th>
              </tr>
            </thead>
            <tbody class="person" v-for="person in pts_leaders" :key="person.player">
              <tr>
                <td>{{person.player}}</td>
                <td>{{person.pts}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="records">
      <div class="leader">
        <h2>Assists</h2>
        <div class="leader-table">
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>APG</th>
              </tr>
            </thead>
            <tbody class="person" v-for="person in ast_leaders" :key="person.player">
              <tr>
                <td>{{person.player}}</td>
                <td>{{person.ast}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="records">
      <div class="leader">
        <h2>Rebounds</h2>
        <div class="leader-table">
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>RPG</th>
              </tr>
            </thead>
            <tbody class="person" v-for="person in reb_leaders" :key="person.player">
              <tr>
                <td>{{person.player}}</td>
                <td>{{person.reb}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordsList',
  props: {
    stats: Array,
  },
  computed: {
    pts_leaders() {
      let pts_array = [...this.$root.$data.stats];
      return pts_array.sort((a,b)=>b.pts-a.pts).slice(0,5);
    },
    ast_leaders() {
      let ast_array = [...this.$root.$data.stats];
      return ast_array.sort((a,b)=>b.ast-a.ast).slice(0,5);
    },
    reb_leaders() {
      let reb_array = [...this.$root.$data.stats];
      return reb_array.sort((a,b)=>b.reb-a.reb).slice(0,5);
    }
  }
}
</script>

<style>
.leader {
  text-align: center;
  width: 20em;
  margin: auto;
}

#records-list {
  display: flex;
  justify-content: space-around;
}

.leader-table {
  padding-bottom: 15px;
}

@media
only screen and (max-width: 48em;),
(min-device-width: 0em) and (max-device-width: 48em)  {
  #records-list {
    display: block;
  }
}
</style>
