google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
	// Some raw data (not necessarily accurate)
	var data = google.visualization.arrayToDataTable([
		["seguidores", "suscriptores", "seguidores", "tendencia"],
		["2016/17", 165, 938, 1101],
		["2017/18", 135, 1120, 627.5],
		["2018/19", 157, 1167, 662],
		["2019/20", 139, 1110, 624.5],
		["2020/21", 136, 691, 413.5],
	]);

	var options = {
		title: "Estadísticas Twitch",
		vAxis: { title: "" },
		hAxis: { title: "Month" },
		seriesType: "bars",
		series: { 2: { type: "line" } },
	};

	var chart = new google.visualization.ComboChart(
		document.getElementById("chart_div3")
	);
	chart.draw(data, options);
}
