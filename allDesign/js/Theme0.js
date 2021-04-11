class ThemeSetter {
  constructor(variable, value) {
    this.variable = variable;
    this.value = value;
  }

  show() {
    document.documentElement.style.setProperty(this.variable, color.value);
  }
}

class Theme {
  counter = 0;
  ThemeElements = new Array();

  constructor(name) {
    this.name = name;
    this.number = counter++;
  }

  add(variable, value) {
    ThemeElements.add(new ThemeSetter(variable, value));
  }

  show() {

  }

  showName() {
    document.getElementById('themeStatus').innerHTML = this.name;
  }
}

class ThemeSwitch {
  Themes = new Array();
  constructor() {}

  add(theme) {
    ThemeElements.add(theme);
  }

  show() {

  }
}

class ThemeSchedule {
  Themes = new Array();
  constructor() {}

  add(theme, start, end) {
    ThemeElements.add(theme);
  }

  show() {

  }
}

Theme light = new Theme("light");
light.add("--bodyColor", "black");
light.add("--bodyBackgroundColor", "white");
light.add("--panelColor", "black");
light.add("--panelBackgroundColor", "white");
light.add("--barColor", "black");
light.add("--barBackgroundColor", "white");

Theme dark = new Theme("dark");
dark.add("--bodyColor", "white");
dark.add("--bodyBackgroundColor", "black");
dark.add("--panelColor", "white");
dark.add("--panelBackgroundColor", "black");
dark.add("--barColor", "white");
dark.add("--barBackgroundColor", "black");

ThemeSwitch themeSwitch = new ThemeSwitch();
themeSwitch.add(light);
themeSwitch.add(dark);

ThemeSchedule themeSchedule = new ThemeSchedule();
themeSchedule.add(light, 6.00, 21.59);
themeSchedule.add(dark, 22.00, 5.59 );
