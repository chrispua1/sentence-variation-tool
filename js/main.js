google.charts.load('current', {
  packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawGraph);

let dataArray = [[0, 0]];

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

  let temp = text.replaceAll(". ", "[[SeNtEnCe_!§§§§§!_bReAk]]");
  temp = temp.replaceAll("! ", "[[SeNtEnCe_!§§§§§!_bReAk]]");
  temp = temp.replaceAll("? ", "[[SeNtEnCe_!§§§§§!_bReAk]]");

  sentences = temp.split("[[SeNtEnCe_!§§§§§!_bReAk]]");
  alert(sentences.length + " sentences");

  /*for(let i = 1; i < sentences.length + 1; i++) {
    words = sentences[i].split();
    dataArray.push([i, words.length]);
  }*/

  dataArray.push([1, 9]);

  alert(dataArray.toString());

  drawGraph();
}