var light = new Theme("Light");
light.add("--bodyColor", "black");
light.add("--bodyBackgroundColor", "white");
light.add("--panelColor", "black");
light.add("--panelBackgroundColor", "white");
light.add("--barColor", "black");
light.add("--barBackgroundColor", "white");
light.add("--barIconColor", "black");
light.add("--barIconBackgroundColor", "#efefef");


var dark = new Theme("Dark");
dark.add("--bodyColor", "white");
dark.add("--bodyBackgroundColor", "black");
dark.add("--panelColor", "white");
dark.add("--panelBackgroundColor", "black");
dark.add("--barColor", "white");
dark.add("--barBackgroundColor", "black");
dark.add("--barIconColor", "white");
dark.add("--barIconBackgroundColor", "#212121");

var themeSwitch = new ThemeSwitch("Switch");
themeSwitch.add(light);
themeSwitch.add(dark);

themeSwitch.addStatus("themeStatus");

themeSwitch.addSchedule(0, 8.00, 19.59);
themeSwitch.addSchedule(1, 20.00, 7.59);


document.getElementById("themeStatus").addEventListener('click',function () {themeSwitch.show()});






var defoultBubbleTheme = new Theme("defoultBubbleTheme");
defoultBubbleTheme.add("--bubbleTopColor1", "#00000000");
defoultBubbleTheme.add("--bubbleTopColor2", "#00000000");
defoultBubbleTheme.add("--bubbleTopColor3", "#00000000");
defoultBubbleTheme.add("--bubbleBootomColor1", "#d14f4f");
defoultBubbleTheme.add("--bubbleBootomColor2", "#e91e63");
defoultBubbleTheme.add("--bubbleBootomColor3", "#3f51b5");

var defoultBubbleSwitch = new ThemeSwitch("Switch");
defoultBubbleSwitch.add(defoultBubbleTheme);
defoultBubbleSwitch.addSchedule(0, 0.00, 23.59);




function bubbles() {
  var bubbleTopColor = document.getElementById('bubbleTopColor').value;
  var bubbleBootomColor = document.getElementById('bubbleBootomColor').value;

  var bubbleTopColor1 = bubbleTopColor;
  var bubbleTopColor2 = bubbleTopColor;
  var bubbleTopColor3 = bubbleTopColor;
  var bubbleBootomColor1 = bubbleBootomColor;
  var bubbleBootomColor2 = bubbleBootomColor;
  var bubbleBootomColor3 = bubbleBootomColor;

  if (bubbleTopColor == "mix") {
    bubbleTopColor1 = "#D14F4F";
    bubbleTopColor2 = "#CDD14F";
    bubbleTopColor3 = "#4FD153";
  }

  if (bubbleBootomColor == "mix") {
    bubbleBootomColor1 = "#D14F4F";
    bubbleBootomColor2 = "#CDD14F";
    bubbleBootomColor3 = "#4FD153";
  }

  var bubbleTheme = new Theme("bubbleTheme");
  bubbleTheme.add("--bubbleTopColor1", bubbleTopColor1);
  bubbleTheme.add("--bubbleTopColor2", bubbleTopColor2);
  bubbleTheme.add("--bubbleTopColor3", bubbleTopColor3);
  bubbleTheme.add("--bubbleBootomColor1", bubbleBootomColor1);
  bubbleTheme.add("--bubbleBootomColor2", bubbleBootomColor2);
  bubbleTheme.add("--bubbleBootomColor3", bubbleBootomColor3);

  var bubbleSwitch = new ThemeSwitch("bubbleSwitch");
  bubbleSwitch.add(bubbleTheme);
  bubbleSwitch.show()
}
