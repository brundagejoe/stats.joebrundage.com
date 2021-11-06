<template>
  <div class="wrapper">
    <div class="per-season-table">
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>PER</th>
            <th>USG</th>
            <th>PTS</th>
            <th>REB</th>
            <th>AST</th>
            <th>ORAT</th>
            <th>DRAT</th>
            <th>NET</th>
            <th>FGM</th>
            <th>FGA</th>
            <th>PA</th>
            <th>eFG%</th>
            <th>BLK</th>
            <th>STL</th>
            <th>TO</th>
            <th>W</th>
            <th>L</th>
            <th>W%</th>
          </tr>
        </thead>
          <tbody class="person" v-for="person in stats" :key="person.player">
            <tr>
              <td>{{person.player}}</td>
              <td>{{person.per}}</td>
              <td>{{person.usg}}</td>
              <td>{{person.pts}}</td>
              <td>{{person.reb}}</td>
              <td>{{person.ast}}</td>
              <td>{{person.orat}}</td>
              <td>{{person.drat}}</td>
              <td>{{person.net}}</td>
              <td>{{person.fgm}}</td>
              <td>{{person.fga}}</td>
              <td>{{person.pa}}</td>
              <td>{{person.efg}}</td>
              <td>{{person.blk}}</td>
              <td>{{person.stl}}</td>
              <td>{{person.to}}</td>
              <td>{{person.w}}</td>
              <td>{{person.l}}</td>
              <td>{{person.undefined}}</td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatList',
  props: {
    stats: Array
  }
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: white;
  font-weight: bold;
  font-variant: small-caps;
}

td {
  background: #FCFCFC;
}

td, th {
  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;
}

.per-season-table {
  padding: 0 40px;
}

@media
only screen and (max-width: 48em;),
(min-device-width: 0em) and (max-device-width: 48em)  {

  .per-season-table {
    padding: 0;
  }
	.per-season-table table, .per-season-table thead, .per-season-table tbody, .per-season-table th, .per-season-table td, .per-season-table tr {
		display: block;
	}

	/* Hide table headers (but not display: none;, for accessibility) */
	.per-season-table thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

	.per-season-table tr { border: 1px solid #023E73;}

	.per-season-table td {
		/* Behave  like a "row" */
		border: none;
		border-bottom: 0.5px solid #72b8e3;
		position: relative;
		padding-left: 50%;
	}

	.per-season-table td:before {
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
		white-space: nowrap;
	}

	/*
	Label the data
	*/
	.per-season-table td:nth-of-type(1):before { content: "Player";}
  .per-season-table td:nth-of-type(2):before { content: "PER";}
  .per-season-table td:nth-of-type(3):before { content: "USG";}
  .per-season-table td:nth-of-type(4):before { content: "PTS";}
  .per-season-table td:nth-of-type(5):before { content: "REB";}
  .per-season-table td:nth-of-type(6):before { content: "AST";}
  .per-season-table td:nth-of-type(7):before { content: "ORAT";}
  .per-season-table td:nth-of-type(8):before { content: "DRAT";}
  .per-season-table td:nth-of-type(9):before { content: "NET";}
  .per-season-table td:nth-of-type(10):before { content: "FGM";}
  .per-season-table td:nth-of-type(11):before { content: "FGA";}
  .per-season-table td:nth-of-type(12):before { content: "PA";}
  .per-season-table td:nth-of-type(13):before { content: "eFG%";}
  .per-season-table td:nth-of-type(14):before { content: "BLK";}
  .per-season-table td:nth-of-type(15):before { content: "STL";}
  .per-season-table td:nth-of-type(16):before { content: "TO";}
  .per-season-table td:nth-of-type(17):before { content: "W";}
  .per-season-table td:nth-of-type(18):before { content: "L";}
  .per-season-table td:nth-of-type(19):before { content: "W%";}

}
</style>
