function addZero(dane) {
  if(dane<10) dane = "0" + dane;
  return dane;
}

function clock() {
  const date = new Date();
  var hour = addZero(date.getHours());
  var minute = addZero(date.getMinutes());
  var second = addZero(date.getSeconds());
  var day = addZero(date.getDate());
  var month = addZero(date.getMonth()+1);
  var year = addZero(date.getFullYear());
  document.getElementById('clock').innerHTML = hour + ":" + minute;
  document.getElementById('date').innerHTML = (day).toString() + "." + (month).toString() + "." + (year).toString();
  setTimeout("clock()", 10000);
}
