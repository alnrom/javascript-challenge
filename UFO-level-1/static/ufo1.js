let info = data;
let dates = info.map(x => x.datetime);
// console.log(dates);

let uniqueDates = [];
function dropDup(array){
    array.forEach((x) => {
        if (!(uniqueDates.includes(x))){
            uniqueDates.push(x);
        }
})
};

dropDup(dates);
selector = d3.select("#selector");
for (var i = 0; i < uniqueDates.length; i++) {
    selector.append("option").text(uniqueDates[i]);
};


button = d3.select("#button");

function Search() {

    d3.select("#summary-table tbody").remove();
    d3.select("#summary-table").append("tbody");
    inputValue = d3.select("#selector").property("value");
    let filtered = info.filter(fil => fil.datetime == inputValue);
    console.log(filtered)

    for (var i = 0; i < filtered.length; i++) {
        
        tableBody = d3.select("#summary-table").select("tbody").append("tr")
        tableBody.html("");
        tableBody.append("td").text(filtered[i].datetime);
        tableBody.append("td").text(filtered[i].city);
        tableBody.append("td").text(filtered[i].state);
        tableBody.append("td").text(filtered[i].country);
        tableBody.append("td").text(filtered[i].shape);
        tableBody.append("td").text(filtered[i].durationMinutes);
        tableBody.append("td").text(filtered[i].comments);
    
    }
}

button.on("click", Search);

