import Item from '../prefabs/item';

class Game extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    //add background image
    this.background = this.game.add.sprite(0,0,'background');
    this.background.height = this.game.world.height;
    this.background.width = this.game.world.width;


    //setup UI
    this.countdownText = this.add.text(this.game.world.centerX, 0, '', {
      font: '40px Arial', fill: '#ffffff', align: 'center'
    });
    this.countdownText.anchor.set(0.5,0);

    //set up click listeners
    this.game.input.onDown.add(this.click, this);

    //setup prefabs
    this.item = new Item(this.game, 10, 10, 'item_2');

    //this.item.inputEnabled = true;
    this.game.add.existing(this.item);
  }

  click() {
    console.log('clicked');
  }


  update() {

  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
