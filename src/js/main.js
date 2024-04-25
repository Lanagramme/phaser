import Phaser from 'phaser';
import Scene1 from "./scenes/scene1.js"
import Scene2 from "./scenes/scene2.js"
import Intro from "./scenes/intro.js"



// Initialize Phaser game configuration
var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [Intro, Scene1, Scene2],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    antialias: true
};

// Create a new Phaser game instance
var game = new Phaser.Game(config);
