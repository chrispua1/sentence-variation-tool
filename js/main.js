google.charts.load('current', {
  packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawGraph);

let globalData;

function drawGraph() {

  var data = new google.visualization.DataTable();

  data.addColumn('number', 'X');
  data.addColumn('number', 'Words');

  data.addRows([
    [0, 0],
    [1, 1]
  ]);

  globalData = data;

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

function checkText() {
  alert(document.getElementById('textinput').value);
}