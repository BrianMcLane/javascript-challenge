// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// data.forEach(
//     function(sighting) {
//         console.log(sighting);
//         var row = tbody.append("tr");
//         var values = Object.values(sighting);
//         values.forEach(
//             function(val) {
//                 row.append('td').text(val);
//             }
//         );

//     }
// );

function buildTable(data) {
    tbody.html("") // Clear out existing data
    // loop through the data and create a table from it

    data.forEach((rowData) =>{
        // add a row to the table body
        var row = tbody.append("tr");

        // add each value as  a table cell when we loop the rowData
        Object.values(rowData).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        }
        )

    });

}




function handlechange() {
// Get the value from the datetime input box
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // we filter the data if a date is entered
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);

}

// Event listener for the filter button
d3.selectAll("#filter-btn").on("click", handlechange);

buildTable(tableData);