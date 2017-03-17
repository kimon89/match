class Preloader extends Phaser.State {

  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    //setup loading bar
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.setPreloadSprite(this.asset);

    //Setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  loadResources() {

    this.game.load.image('background', 'assets/bg_wood.png');

    for(var i=2; i<=56; i++) {
      this.game.load.image('item_'+i, 'assets/cake_64/'+i+'.png');
    }

  }

  onLoadComplete() {
    this.game.state.start('game');
  }
}

export default Preloader;
