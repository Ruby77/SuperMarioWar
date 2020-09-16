import Compositor from './compositor.js';
import Entity from './Entity.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, CreateSpriteLayer} from './layers.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

Promise.all([
    loadBackgroundSprites(),
    createMario(),
    loadLevel('1-1')
])
.then(([backgroundSprites, mario, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    // comp.layers.push(backgroundLayer);

    const gravity = 0.5;
  
    const spriteLayer = CreateSpriteLayer(mario);
    comp.layers.push(spriteLayer);

    let deltaTime = 0;
    let lastTime =0;
    function update(time){
        deltaTime = time - lastTime;
        console.log(deltaTime);
        comp.draw(context);
        mario.update(deltaTime);
        mario.vel.y += gravity;
        requestAnimationFrame(update);

        lastTime = time;
    }
    update();
})


