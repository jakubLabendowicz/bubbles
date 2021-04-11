class Search {
  constructor(name = "", source = "") {
    this.name = name;
    this.source = source;
  }

  setName(name) {
    this.name = name;
  }
  setSource(source) {
    this.source = source;
  }
  getName() {
    return this.name;
  }
  getSource() {
    return this.source;
  }

  static text = "";
  static search = "";
  static link = "";

  static setText(text) {
    Search.text = text;
  }
  static setSearch(search) {
    Search.search = search;
  }

  static setLink(link = "") {
    if (link == "") {
      switch (Search.getSearch()) {
        case Google.getName():
        Search.link = Google.getSource() + Search.getText();
          break;
        case Youtube.getName():
        Search.link = Youtube.getSource() + Search.getText();
          break;
        case Facebook.getName():
        Search.link = Facebook.getSource() + Search.getText();
          break;
        case Netflix.getName():
        Search.link = Netflix.getSource() + Search.getText();
          break;
        case Wikipedia.getName():
        Search.link = Wikipedia.getSource() + Search.getText();
          break;
      }
    }
    else {
      Search.link = link;
    }
  }

  static getText() {
    return Search.text;
  }
  static getSearch() {
    return Search.search;
  }
  static getLink() {
    return Search.link;
  }

  static openLink() {
    window.open(Search.link);
  }

  static autoSearch(data) {
    Search.setText(document.getElementById('textBar'+data).value);
    Search.setSearch(document.getElementById('searchSelector'+data).value);
    Search.setLink();
    Search.openLink();
  }
}

let Google = new Search("Google", "https://www.google.com/search?q=");
let Youtube = new Search("Youtube", "https://www.youtube.com/results?search_query=");
let Facebook = new Search("Facebook", "https://www.facebook.com/search/top/?q=");
let Netflix = new Search("Netflix", "https://www.netflix.com/search?q=");
let Wikipedia = new Search("Wikipedia", "https://pl.wikipedia.org/w/index.php?search=");

document.querySelector("#textBar").addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    Search.autoSearch();
    setHistory();
  }
});

document.querySelector("#searchSelector").addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    Search.autoSearch();
    setHistory();
  }
});
