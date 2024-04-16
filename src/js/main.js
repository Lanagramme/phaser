import Phaser from 'phaser';
import Scene1 from "./scenes/scene1.js"
import Scene2 from "./scenes/scene2.js"
import Intro from "./scenes/intro.js"



// Initialize Phaser game configuration
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Intro, Scene1, Scene2]
};

// Create a new Phaser game instance
var game = new Phaser.Game(config);
