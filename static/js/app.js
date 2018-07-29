// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


data.forEach(function(sighting) {
  // console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    var cell = tbody.append("td");
    cell.text(value);
  });
});


var submit = d3.select("#filter-btn");
submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(dt => dt.datetime === inputValue);

  d3.select("tbody").selectAll("*").remove();

  console.log(filteredData);

  filteredData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);

      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});
