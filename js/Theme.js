var light = new Theme("Light");
light.add("--bodyColor", "black");
light.add("--bodyBackgroundColor", "white");
light.add("--panelColor", "black");
light.add("--panelBackgroundColor", "#ffffffcc");
light.add("--barColor", "black");
light.add("--barBackgroundColor", "#00000000");
light.add("--barIconColor", "black");
light.add("--barIconBackgroundColor", "#efefef");

var dimmed = new Theme("Dimmed");
dimmed.add("--bodyColor", "white");
dimmed.add("--bodyBackgroundColor", "#212121");
dimmed.add("--panelColor", "white");
dimmed.add("--panelBackgroundColor", "#212121cc");
dimmed.add("--barColor", "black");
dimmed.add("--barBackgroundColor", "#00000000");
dimmed.add("--barIconColor", "black");
dimmed.add("--barIconBackgroundColor", "#efefef");

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
themeController.addTheme(light);
themeController.addTheme(dimmed);
themeController.addTheme(dark);

themeController.addButton("themebutton");
themeController.addButton("themebutton2");
themeController.addStatus("themebutton");

document.getElementById("defaultThemeSetter2").addEventListener('click',function () {themeController.synchronizeLocalTheme()});

themeController.run();


var defoultBubbleTheme = new Theme("defoultBubbleTheme");
defoultBubbleTheme.add("--bubbleTopColor1", "#00000000");
defoultBubbleTheme.add("--bubbleTopColor2", "#00000000");
defoultBubbleTheme.add("--bubbleTopColor3", "#00000000");
defoultBubbleTheme.add("--bubbleBootomColor1", "#d14f4f");
defoultBubbleTheme.add("--bubbleBootomColor2", "#e91e63");
defoultBubbleTheme.add("--bubbleBootomColor3", "#3f51b5");

var personalizedBubbleTheme = new Theme("bubbleTheme");

var defoultBubbleController = new ThemeController("bubbleController");
defoultBubbleController.addTheme(defoultBubbleTheme);
defoultBubbleController.addTheme(personalizedBubbleTheme);

defoultBubbleController.run();


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

  defoultBubbleController.toogleSessionTheme(1);
});
