var C = {
  "game": {
    "width": 320,
    "height": 568
  },
  "bg": {
    "width": 320,
    "height": 568,
    "xspeed": 0,
    "yspeed": 0,
    "file": "assets/background.jpg"
  },
  "p": {
    "file": "assets/doger.png",
    "width": 46,
    "height": 64,
    "frames": 4,
    "fps": 6,
    "startx": 160,
    "starty": 500
  },
  "doge": {
    "file": "assets/dogething.png",
    "width": 46,
    "height": 64,
    "frames": 3,
    "fps": 6,
    "startx": 160,
    "starty": 300
  }
}

//-------------------------------------------------------------------------------------------------------

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
    this.load.image('bg',C.bg.file);
    this.load.spritesheet("player",C.p.file,C.p.width,C.p.height,C.p.frames)
    this.load.spritesheet("doge",C.doge.file,C.doge.width,C.doge.height,C.doge.frames)
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
    
    this.player = this.add.sprite(C.p.startx,C.p.starty,"player");
    this.player.anchor.set(0.5,0.5);
    this.player.smoothed = false;
    this.player.scale.set(1.5);
    this.player.animations.add("anim");
    this.player.animations.play("anim",C.p.fps,true);
    this.physics.enable(player, Phaser.Physics.ARCADE);
    
    this.doge = this.add.sprite(C.doge.startx,C.doge.starty,"doge");
    this.doge.anchor.set(0.5,0.5);
    this.doge.smoothed = false;
    this.doge.scale.set(1.5);
    this.doge.animations.add("anim");
    this.doge.animations.play("anim",C.doge.fps,true);
    
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    this.player.body.velocity.x = 0;
    
    if(this.cursors.left.isDown)
    {
      player.body.velocity.x = 0;
    }
  }
}

//--------------------------------------------------------------------------------------------------

function restart() {
  game.state.start("Boot");
}

var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.add("Play",PlayState);
game.state.start("Boot");
