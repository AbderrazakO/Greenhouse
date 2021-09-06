google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Products", "%"],
    ["Beef", 28],
    ["Carrot", 22],
    ["Potato", 16],
    ["Apple", 16],
    ["Milk", 10],
    ["Tomato", 6],
    ["Orange", 2],
  ]);

  var options = {
    title: "Farm Products",
    is3D: true,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart_3d")
  );
  chart.draw(data, options);
}
