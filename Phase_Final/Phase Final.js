<!DOCTYPE HTML>
<html>
<head>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script type="text/javascript">

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Efficiency of Warshall Algorithm on different sizes of 2D matrices "              
		},
		data: [              
		{
			
			type: "column",
			dataPoints: [
				{ label: "4 x 4",  y: 0.15 },
				{ label: "8 x 8", y: 0.25  },
				{ label: "20 x 20", y: 2  },
				{ label: "30 x 3x",  y: 4  },
				{ label: "50 x 50",  y: 4.5  },
				{ label: "80 x 80",  y: 8  },
				{ label: "100 x 100",  y: 10  },
			]
		}
		]
	});
	chart.render();
}
</script>
</head>
<body>
<div id="chartContainer" style="height: 300px; max-width: 920px; margin: 0px auto;"></div>

<h4><a href="https://github.com/hamzaa639/DM-109-Fall-2020/tree/main/Phase_Final" target="blank">GitHub</a></h4>
</body>
</html>
