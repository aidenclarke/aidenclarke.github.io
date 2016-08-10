class BootState {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    game.state.start("Load");
  }
}

class LoadState {
  preload() {
    console.log("loading");
    game.load.image('background', 'assets/background.jpg');
  }
  create() {
    console.log("loaded");
    this.state.start("Play");
  }
}

class PlayState {
  create() {
    console.log("play state");
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(70000,70000);
  }
}

var game = new Phaser.Game(320,568);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.add("Play",PlayState);
game.state.start("Boot");
