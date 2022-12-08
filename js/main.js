google.charts.load('current', {
  packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawGraph);

var data = new google.visualization.DataTable();

function drawGraph() {

  data.addColumn('number', 'X');
  data.addColumn('number', 'Words');

  data.addRows([
    [0, 0],
    [1, 1]
  ]);

  var options = {
    hAxis: {
      title: 'Sentence'
    },
    vAxis: {
      title: 'Words'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('graph'));

  chart.draw(data, options);
}
