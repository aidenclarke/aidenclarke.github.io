var C = {
  "game": {
    "width": 320,
    "height": 568
  },
  "bg": {
    "width": 320,
    "height": 568,
    "xspeed": 0,
    "yspeed": 500,
    "file": "assets/background.jpg"
  }
}

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
    game.load.image('bg',C.bg.file);
  }
  create() {
    console.log("loaded");
    this.state.start("Play");
  }
}

class PlayState {
  create() {
    console.log("play state");
    this.bg = this.add.tileSprite(0,0,C.bg.width,C.bg.height,"bg");
    this.bg.autoScroll(C.bg.xspeed,C.bg.yspeed);
  }
}

function restart() {
  game.state.start("Boot");
}

var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.add("Play",PlayState);
game.state.start("Boot");
