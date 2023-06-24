import Inventory from 'pages/Game/Inventory/inventory';
import Paper from 'pages/Game/Paper/Paper';
import Scene from 'pages/Game/Scene';
import Phaser from 'phaser';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#262626',
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [Scene, Inventory, Paper],
};
