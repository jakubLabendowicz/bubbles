var mode = 0;

function openPanel() {
  if (mode == 0) {
    document.getElementById('panel').style.visibility = 'visible';
    document.getElementById('panel').style.animation = 'openPanel 1s 1';
    document.getElementById('bar').style.animation = 'openPanel 1.5s 1';
    Card.open('mainCard');
    mode = 1;
  }
  else {
    document.getElementById('panel').style.visibility = 'hidden';
    document.getElementById('panel').style.animation = 'closePanel 1s 1';
    document.getElementById('bar').style.animation = 'closePanel 1.5s 1';
    Card.close();
    mode = 0;
  }
}

openPanel();
