const url = "https://www.balldontlie.io/api/v1/teams";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    if (json.cod == '404') {
      alert("ERROR: teams not found");
    }
    else {
      let results = "<table><thead><tr>";
      results += "<th>ID</th>";
      results += "<th>Name</th>";
      let keys = Object.keys(json.data[0])
      results += "<tbody>"
      for (let i = 0; i < json.data.length; ++i) {
        results += "<tr>"
        results += "<td>" + json.data[i].id + "</td>";
        results += "<td>" + json.data[i].full_name + "</td>";
      }

      document.getElementById("teams-table").innerHTML = results;
    }
  });


document.getElementById('teamSubmit').addEventListener('click', function(event) {
  event.preventDefault();
  const value = document.getElementById('teamInput').value;
  if (value === "") {
    return
  }
  const url2 = "https://www.balldontlie.io/api/v1/teams/" + value;

  fetch(url2)
    .then(function(response) {
      if (response.status === 404) {
        alert("Team ID not found, please try again");
        return;
      }
      return response.json();
    }).then(function(json) {
      console.log(json)
      results = "<p>The " + json.full_name + " (" + json.abbreviation +
         ") are in the " + json.division +
      " division of the " + json.conference + "ern conference. </p>";

      document.getElementById("api-results").innerHTML = results;
    });
})
