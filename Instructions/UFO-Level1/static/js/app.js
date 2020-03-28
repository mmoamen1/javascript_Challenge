// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
tableData.forEach((data) => {
    var row = tbody.append("tr")
    Object.entries(data).forEach(([key,value]) => {
        var cell = row.append("td")
        cell.text(value)
    }) 
})

//date_to_filter = []
var fb = d3.select("#filter-btn")
fb.on("click", function() {
    tbody.html("")
    var ft = d3.select(".form-control")
    var date = ft.property("value")
    var filteredData = tableData.filter(data => 
        data.datetime === date)      
    filteredData.forEach((data) => {
        var row = tbody.append("tr")
        Object.entries(info).forEach(([key,value]) => {
            var cell = row.append("td")
            cell.text(value)
        })
    })
    
})