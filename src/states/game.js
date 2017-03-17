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

    //setup prefabs
    this.item = new Item(this.game, 0, 0, 'item_2');

    //this.item.inputEnabled = true;
    this.game.add.existing(this.item);
  }

  click() {
    console.log('clicked');
  }


  update() {
  //  this.game.debug.spriteBounds(this.item);
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
