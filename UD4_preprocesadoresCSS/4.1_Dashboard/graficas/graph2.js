google.charts.load("current", {
	packages: ["geochart"],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
	var data = google.visualization.arrayToDataTable([
		["Country", "Popularity"],
		["France", 150],
		["spain", 800],
		["italy", 147],
		["spain", 700],
		["portugal", 500],
		["united kingdom", 300],
	]);

	var options = {
		region: 150,
	};

	var chart = new google.visualization.GeoChart(
		document.getElementById("regions_div")
	);

	chart.draw(data, options);
}
