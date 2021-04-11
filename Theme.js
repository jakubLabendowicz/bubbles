var light = new Theme("Jasny");
light.add("--bodyColor", "black");
light.add("--bodyBackgroundColor", "white");
light.add("--panelColor", "black");
light.add("--panelBackgroundColor", "white");
light.add("--barColor", "black");
light.add("--barBackgroundColor", "white");

var dark = new Theme("Ciemny");
dark.add("--bodyColor", "white");
dark.add("--bodyBackgroundColor", "black");
dark.add("--panelColor", "white");
dark.add("--panelBackgroundColor", "black");
dark.add("--barColor", "white");
dark.add("--barBackgroundColor", "black");

var themeSwitch = new ThemeSwitch("Switch");
themeSwitch.add(light);
themeSwitch.add(dark);

themeSwitch.addStatus("themeStatus");

themeSwitch.addSchedule(0, 8.00, 19.59);
themeSwitch.addSchedule(1, 20.00, 7.59);


$(document).ready(function(){
  $("#themeStatus").on("click", function(){
    themeSwitch.show();
  });
});
