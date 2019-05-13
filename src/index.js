const MovingObject = require("./moving_object.js");

console.log("hello");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;
    
    const aster = new MovingObject({ pos: [40, 40], vel: [5, 5], radius: 100, color: 'red' });
    aster.draw(ctx);
});



