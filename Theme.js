var light = new Theme("Light");
light.add("--bodyColor", "black");
light.add("--bodyBackgroundColor", "white");
light.add("--panelColor", "black");
light.add("--panelBackgroundColor", "#ffffffcc");
light.add("--barColor", "black");
light.add("--barBackgroundColor", "#00000000");
light.add("--barIconColor", "black");
light.add("--barIconBackgroundColor", "#efefef");

var dark = new Theme("Dark");
dark.add("--bodyColor", "white");
dark.add("--bodyBackgroundColor", "black");
dark.add("--panelColor", "white");
dark.add("--panelBackgroundColor", "#000000cc");
dark.add("--barColor", "white");
dark.add("--barBackgroundColor", "#00000000");
dark.add("--barIconColor", "white");
dark.add("--barIconBackgroundColor", "#212121");

var themeController = new ThemeController("themeController");
themeController.add(light);
themeController.add(dark);

themeController.addButton("themebutton");
themeController.addStatus("themebutton");

themeController.addSchedule(0, 8.00, 19.59);
themeController.addSchedule(1, 20.00, 7.59);




var defoultBubbleTheme = new Theme("defoultBubbleTheme");
defoultBubbleTheme.add("--bubbleTopColor1", "#00000000");
defoultBubbleTheme.add("--bubbleTopColor2", "#00000000");
defoultBubbleTheme.add("--bubbleTopColor3", "#00000000");
defoultBubbleTheme.add("--bubbleBootomColor1", "#d14f4f");
defoultBubbleTheme.add("--bubbleBootomColor2", "#e91e63");
defoultBubbleTheme.add("--bubbleBootomColor3", "#3f51b5");

var personalizedBubbleTheme = new Theme("bubbleTheme");

var defoultBubbleController = new ThemeController("bubbleController");
defoultBubbleController.add(defoultBubbleTheme);
defoultBubbleController.add(personalizedBubbleTheme);

defoultBubbleController.addSchedule(0, 0.00, 23.59);

document.getElementById("bubbleThemeSetter").addEventListener('click',function () {
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

  personalizedBubbleTheme.add("--bubbleTopColor1", bubbleTopColor1);
  personalizedBubbleTheme.add("--bubbleTopColor2", bubbleTopColor2);
  personalizedBubbleTheme.add("--bubbleTopColor3", bubbleTopColor3);
  personalizedBubbleTheme.add("--bubbleBootomColor1", bubbleBootomColor1);
  personalizedBubbleTheme.add("--bubbleBootomColor2", bubbleBootomColor2);
  personalizedBubbleTheme.add("--bubbleBootomColor3", bubbleBootomColor3);

  defoultBubbleController.toogle(1);
});
