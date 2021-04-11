class BubblesColor {
  static quantity = 0;

  constructor(name="defoult", bubbleColor1, bubbleColor2=bubbleColor1, bubbleColor3=bubbleColor1) {
    this.name = name;
    this.number = BubblesColor.quantity;
    BubblesColor.quantity++;
    this.bubbleColor1 = bubbleColor1;
    this.bubbleColor2 = bubbleColor2;
    this.bubbleColor3 = bubbleColor3;
  }

  showTop() {
    document.documentElement.style.setProperty('--bubbleTopColor1', this.bubbleColor1);
    document.documentElement.style.setProperty('--bubbleTopColor2', this.bubbleColor2);
    document.documentElement.style.setProperty('--bubbleTopColor3', this.bubbleColor3);
  }

  showBootom() {
    document.documentElement.style.setProperty('--bubbleBootomColor1', this.bubbleColor1);
    document.documentElement.style.setProperty('--bubbleBootomColor2', this.bubbleColor2);
    document.documentElement.style.setProperty('--bubbleBootomColor3', this.bubbleColor3);
  }

  static bubbleThemeMode = 0;

  static change() {
    if (BubblesColor.bubbleThemeMode==0) {
      bubblesThemes[0].showTop();
      bubblesThemes[4].showBootom();
      BubblesColor.bubbleThemeMode = 1;
    }
    else {
      bubblesThemes[1].showTop();
      bubblesThemes[4].showBootom();
      BubblesColor.bubbleThemeMode = 0;
    }
  }
}

class BubblesTheme {
  constructor(lightTop, lightBottom, darkTop, darkBottom) {
    this.lightTop = lightTop;
    this.lightBottom = lightBottom;
    this.darkTop = darkTop;
    this.darkBottom = darkBottom;
  }

  
}

bubblesThemes = new Array();
bubblesThemes[0] = new BubblesColor("white", "white");
bubblesThemes[1] = new BubblesColor("black", "black");
bubblesThemes[2] = new BubblesColor("red", "#D14F4F");
bubblesThemes[3] = new BubblesColor("green", "#4FD153");
bubblesThemes[4] = new BubblesColor("blue", "#4f7fd1");
bubblesThemes[5] = new BubblesColor("yellow", "#CDD14F");

BubblesColor.change();


function bubbles() {
  // var quantity = document.getElementById('quantity').value;
  var bubbleTopColor = document.getElementById('bubbleTopColor').value;
  var bubbleBootomColor = document.getElementById('bubbleBootomColor').value;

  var bubbleBootomColor1 = bubbleBootomColor;
  var bubbleBootomColor2 = bubbleBootomColor;
  var bubbleBootomColor3 = bubbleBootomColor;

  if (bubbleBootomColor == "mix") {
    bubbleBootomColor1 = "#D14F4F";
    bubbleBootomColor2 = "#CDD14F";
    bubbleBootomColor3 = "#4FD153";
  }

  var bubblesTopTheme = new BubblesColor("", bubbleTopColor, bubbleTopColor, bubbleTopColor);
  var bubblesBottomTheme = new BubblesColor("", bubbleBootomColor1, bubbleBootomColor2, bubbleBootomColor3);
  bubblesTopTheme.showTop();
  bubblesBottomTheme.showBootom();
}
