google.charts.load('current', {
  packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawGraph);

let dataArray = [];

function drawGraph() {

  var data = new google.visualization.DataTable();

  data.addColumn('number', 'X');
  data.addColumn('number', 'Words');

  data.addRows(dataArray);

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

let text = "";
let sentences = [];
function checkText() {
  text = document.getElementById('textinput').value
  alert(text);

  let temp = text.replaceAll(". ", "[[SeNtEnCe_!§§§§§!_bReAk]]");
  temp = temp.replaceAll("! ", "[[SeNtEnCe_!§§§§§!_bReAk]]");
  temp = temp.replaceAll("? ", "[[SeNtEnCe_!§§§§§!_bReAk]]");

  sentences = temp.split("[[SeNtEnCe_!§§§§§!_bReAk]]");
  alert(sentences.length + " sentences");

  dataArray = [
    [0, 0],
    [1, 1],
    [31, 30]
  ];
  drawGraph();
}