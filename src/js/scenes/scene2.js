export default class Scene2 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene2' });
  }

  preload() { 
  }

  create() {
    // Create a black background
    this.cameras.main.setBackgroundColor('#333652');

    // Create a yellow circle at position (400, 300) with a radius of 50 pixels
    var back = this.add.rectangle(40, 35, 50, 50, 0xffff00);

    // Set interactive property to true to enable input events
    back.setInteractive();

    // Define behavior when the circle is clicked
    back.on('pointerdown', function () {
      // Transition back to Scene1
      this.scene.start('Scene1');
    }, this);

    var startX = 100;
    var startY = 200;
    // Create a rectangle at initial coordinates (startX, startY)
    var rectangle = this.add.rectangle(startX, startY, 50, 50, 0Xffff00);

    // Define the destination coordinates (endX, endY)
    var endX = 300;
    var endY = 200;

    const move = (start, end) => {
      const Start = start
      const End = end
      var tween = this.tweens.add({
        targets: rectangle,
        x: start.x,
        y: end.y,
        duration: 500,
        ease: 'Linear',
        onComplete: function () {
          move(End, Start)
        },
        onCompleteScope: this
      });
    }
    move({x: startX, y: startY}, {x: endX, y: endY})
  }
}

