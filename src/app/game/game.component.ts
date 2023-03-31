import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser'; //import Phaser

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  //declare phaserGame variable, the ! is needed for it to be valid code in Angular, we just have to make sure we initialize it in ngOnInit
  phaserGame!: Phaser.Game; 
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ MainScene ],
      parent: 'gameContainer',
      title: "Grim RPG",
      backgroundColor: "#18216D",
      physics: {
        default: 'matter',
        matter: {
           debug:true,
           gravity: { y: 0 }
        }
      },
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScenes' });
  }
  create() {
    console.log('create methods');
  }
  preload() {
    console.log('preload methods');
  }
  override update(){
    console.log('update methods');
  }
}
