"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = require("phaser");
var bitecs_1 = require("bitecs");
var matter_js_1 = require("matter-js");
var world = (0, bitecs_1.createWorld)();
var engine = matter_js_1.Engine.create();
var config = { type: Phaser.AUTO, width: 800, height: 600, physics: { default: "arcade", arcade: { gravity: { y: 200 } } }, scene: { preload: preload, create: create } };
var game = new Phaser.Game(config);
function preload() {
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
}
function create() {
    this.add.image(400, 300, 'sky');
    var particles = this.add.particles('red');
    var emitter = particles.createEmitter({ speed: 100, scale: { start: 1, end: 0 }, blendMode: 'ADD' });
    var logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    emitter.startFollow(logo);
    matter_js_1.Engine.update(engine, 16);
}
