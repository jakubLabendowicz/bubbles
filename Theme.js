var light = new Theme("Jasny");
light.add("--bodyColor", "black");
light.add("--bodyBackgroundColor", "white");
light.add("--panelColor", "black");
light.add("--panelBackgroundColor", "white");
light.add("--barColor", "black");
light.add("--barBackgroundColor", "white");
light.add("--barIconColor", "black");
light.add("--barIconBackgroundColor", "#efefef");
light.add("--bubbleTopColor1", "white");
light.add("--bubbleTopColor2", "white");
light.add("--bubbleTopColor3", "white");


var dark = new Theme("Ciemny");
dark.add("--bodyColor", "white");
dark.add("--bodyBackgroundColor", "black");
dark.add("--panelColor", "white");
dark.add("--panelBackgroundColor", "black");
dark.add("--barColor", "white");
dark.add("--barBackgroundColor", "black");
dark.add("--barIconColor", "white");
dark.add("--barIconBackgroundColor", "#212121");
dark.add("--bubbleTopColor1", "black");
dark.add("--bubbleTopColor2", "black");
dark.add("--bubbleTopColor3", "black");

var themeSwitch = new ThemeSwitch("Switch");
themeSwitch.add(light);
themeSwitch.add(dark);

themeSwitch.addStatus("themeStatus");

themeSwitch.addSchedule(0, 8.00, 19.59);
themeSwitch.addSchedule(1, 20.00, 7.59);


document.getElementById("themeStatus").addEventListener('click',function () {themeSwitch.show()});
