function addZero(variable) {
  if(variable<10) {
    return "0" + variable;
  }
  else {
    return variable;
  }
}

function setHistory(data) {
  var text = document.getElementById('textBar'+data).value;
  var search = document.getElementById('searchSelector'+data).value;

  const historyDate = new Date();
  var hours = historyDate.getHours();
  var minutes = historyDate.getMinutes();
  var secounds = historyDate.getSeconds();
  var days = historyDate.getDate();
  var month = historyDate.getMonth() + 1;
  var year = historyDate.getFullYear();

  hours = addZero(hours);
  minutes = addZero(minutes);
  secounds = addZero(secounds);
  days = addZero(days);
  month = addZero(month);

  var hour = hours + ":" + minutes + ":" + secounds;
  var date = days + "." + month + "." + year;

  var link = Search.getLink();

  var historyElement = {
    time: {
      hour: hour,
      date: date
    },
    text: text,
    search: search,
    link: link
  }

  if(localStorage.getItem("history") == null) {
    localStorage.setItem("history", "");
  }

  if(localStorage.getItem("searchCounter") == null) {
    localStorage.setItem("searchCounter", "");
  }

  if(text != "") {
    var preHistory = localStorage.getItem("history");

    if(preHistory == "") {
      localStorage.setItem("history", "[" + JSON.stringify(historyElement) + "]");
    }
    else {
      var cutPreHistory = preHistory.substring(0, preHistory.lastIndexOf("]"));
      localStorage.setItem("history", cutPreHistory + "," + JSON.stringify(historyElement) + "]");
    }

    var searchCounter = localStorage.getItem("searchCounter");

    if(searchCounter == "") {
      localStorage.setItem("searchCounter", 1);
    }
    else {
      localStorage.setItem("searchCounter", parseInt(searchCounter)+1)
    }
  }

  console.log(JSON.parse(localStorage.getItem("history")).reverse()[0]);
}
