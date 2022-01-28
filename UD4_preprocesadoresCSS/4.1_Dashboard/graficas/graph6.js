google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		["RS", "Seguidores"],
		["Twitch", 90000],
		["Youtube", 351000],
		["Twitter", 60000],
		["Instagram", 30000],
	]);

	var options = {
		title: "Seguidores redes sociales",
	};

	var chart = new google.visualization.PieChart(
		document.getElementById("piechart")
	);

	chart.draw(data, options);
}
