google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
	// Some raw data (not necessarily accurate)
	var data = google.visualization.arrayToDataTable([
		[
			"Month",
			"dislikes",
			"visitas",
			"likes",
			"anuncios",
			"comentarios",
			"Average",
		],
		["2016/17", 165, 938, 522, 998, 450, 614.6],
		["2017/18", 135, 1120, 599, 1268, 288, 682],
		["2018/19", 157, 1167, 587, 807, 397, 623],
		["2019/20", 139, 1110, 615, 968, 215, 609.4],
		["2020/21", 136, 691, 629, 1026, 366, 569.6],
	]);

	var options = {
		title: "Estadísticas Youtube",
		vAxis: { title: "Cups" },
		hAxis: { title: "Month" },
		seriesType: "bars",
		series: { 5: { type: "line" } },
	};

	var chart = new google.visualization.ComboChart(
		document.getElementById("chart_div5")
	);
	chart.draw(data, options);
}
