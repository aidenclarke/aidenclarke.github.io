//Dodge Play State

'use strict';

var Dodge = {};

Dodge.Play = function () {};

Dodge.Play.prototype = {
  
  init: function () {
    console.log("onion-san");
  },

  
  preload: function () {
    //Load the sprites
    this.load.image('background','assets/background.png');
    this.load.spritesheet('player','assets/player_animation.png',32,32,4);
    this.load.image('falling','assets/falling.png',32,32);
    this.load.spritesheet('beam','assets/beam_power.png',32,32);

    //load audio
    this.load.audio('music', 'assets/music.mp3');

  },


  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //background scrolling
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(0,50);
    this.background.scale.set(1);

    //player thingy
    this.player = this.add.sprite(160,510,'player');
    this.player.anchor.setTo(0.5, 0.5);
    //this.play er.smoothed = false;
    this.player.animations.add('turn');
    this.player.animations.play('turn',10,true);
    //this.player.scale.set(2);
    game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;
    this.player.body.bounce.setTo(0.3);
    this.player.body.drag.setTo(3000);


    //falling thingy
    this.falling = this.add.sprite(90,200,'falling');
    //this.falling.smoothed = false;
    //this.falling.scale.set(2.5);
    this.falling.anchor.set(0.5,0.5);
    game.physics.arcade.enable(this.falling);
    this.falling.body.gravity.y = 8000;



    //movey key
    this.cursors = game.input.keyboard.createCursorKeys();
    
     /*
    //Music 
    this.music = game.add.audio('music');
  
    this.music.play();  
    */

  },

  update: function () {
  

    //moving! yipppeeeee
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -800
    }
    if (this.cursors.right.isDown) {
      this.player.body.velocity.x = 800
    }

    



    if (this.falling.y >= 568) {
      this.falling.y = -32;
      this.falling.body.velocity.y = 0;
      this.falling.x = game.rnd.integerInRange(0,320);
    }



  }


};

//----------------------------------------------------------------------------------------------------------------------

var game = new Phaser.Game(320,568);
game.state.add('play',Dodge.Play);
game.state.start('play');
