google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		["Year", "Libro", "Camiseta"],
		["2018", 1000, 400],
		["2019", 1170, 460],
		["2020", 660, 1120],
		["2021", 1030, 540],
	]);

	var options = {
		title: "ventas",
		hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
		vAxis: { minValue: 0 },
		height: 200,
		width: 200,
	};

	var chart = new google.visualization.AreaChart(
		document.getElementById("chart_div1")
	);
	chart.draw(data, options);
}
