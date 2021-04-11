class Element {
  constructor(id, background, text='') {
    this.id = id;
    this.background = background;
    this.text = text;
  }

  showBackgroundColor(color) {
    if(!color.background=="") {
      document.documentElement.style.setProperty(this.background, color.background);
    }
  }

  showTextColor(color) {
    if(!color.text=="") {
      document.documentElement.style.setProperty(this.text, color.text);
    }
  }

  showColor(color) {
    showBackgroundColor(color);
    showTextColor(color);
  }

  static read() {

  }
}

class Color {
  constructor(name, background="", text="") {
    this.name = name;
    this.background = background;
    this.text = text;
  }
}

class Theme {
  constructor(name) {
    this.name = name;
    this.elementsTable = Elements;
  }

  colorsTable;

  setElementsTable(elementsTable) {
    this.elementsTable = elementsTable;
  }



  showBackgroundColors() {
    this.elementsTable[0].showBackgroundColor(this.colorsTable[0]);
  }

  showTextColors() {
    this.elementsTable[0].showTextColor(this.colorsTable[0]);
  }

  showColors() {
    this.elementsTable[0].showColor(this.colorsTable[0]);
  }

  showName() {
    document.getElementById('themeStatus').innerHTML = this.name;
  }
}

Elements = new Array();
Elements[0] = new Element('body', '--bodyBackgroundColor', '--bodyColor');
Elements[1] = new Element('panel', '--panelBackgroundColor', '--panelColor');
Elements[2] = new Element('bar', '--barBackgroundColor', '--barColor');

Bubbles = new Array();
Bubbles[0] = new Element('top1', '--bubbleTopColor1');
Bubbles[1] = new Element('top2', '--bubbleTopColor2');
Bubbles[2] = new Element('top3', '--bubbleTopColor3');
Bubbles[3] = new Element('bottom1', '--bubbleBootomColor1');
Bubbles[4] = new Element('bottom2', '--bubbleBootomColor2');
Bubbles[5] = new Element('bottom3', '--bubbleBootomColor3');

Colors = new Array();
Colors[0] = new Colors('body', 'white', 'black');
Colors[1] = new Colors('panel', 'white', 'black');
Colors[2] = new Colors('bar', 'white', 'black');


Themes = new Array();
Themes[0]= new Theme('light');


class ThemeSchedule {
  constructor(name, theme, startTime, endTime) {
    this.name = name;
    this.theme = theme;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

//tworzyć nowe motywy
//
//usuwanie motywów

//motyw
//kolor
//element
