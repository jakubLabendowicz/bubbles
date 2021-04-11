class Card {
  static previousCardId = '';

  constructor(cardId) {
    this.cardId = cardId;
  }

  open() {
    if (!Card.previousCardId=='') document.getElementById(Card.previousCardId).style.display = 'none';
    document.getElementById(this.cardId).style.display = 'block';
    Card.previousCardId = this.cardId;
  }

  static open(cardId) {
    if (!Card.previousCardId=='') document.getElementById(Card.previousCardId).style.display = 'none';
    document.getElementById(cardId).style.display = 'block';
    Card.previousCardId = cardId;
  }
  static close() {
    document.getElementById(Card.previousCardId).style.display = 'none';
  }
}

mainCard = new Card('mainCard');
settingsCard = new Card('settingsCard');
appsCard = new Card('appsCard');
