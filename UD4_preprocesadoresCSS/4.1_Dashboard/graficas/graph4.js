google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		["Patrocinadores", "nº veces"],
		["Eneba", 12],
		["GVGmall", 5],
		["Letyshops", 8],
		["SurfsharkVPN", 3],
	]);

	var options = {
		title: "Patrocinadores",
		pieHole: 0.4,
	};

	var chart = new google.visualization.PieChart(
		document.getElementById("donutchart")
	);
	chart.draw(data, options);
}
