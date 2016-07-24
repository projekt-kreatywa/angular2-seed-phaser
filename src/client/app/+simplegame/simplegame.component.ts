import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded SimpleGameComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-simplegame',
  templateUrl: 'simplegame.component.html',
})
export class SimpleGameComponent {

  game: Phaser.Game;

  constructor() {
    this.game = new Phaser.Game(
      800,
      600,
      Phaser.AUTO,
      'simplegame-content',
      {
        preload: this.preload,
        create: this.create
      }
    );
  }

  preload(): void {
    this.game.load.image('logo', './assets/phaser/phaser2.png');
  }

  create(): void {
    var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }
}
