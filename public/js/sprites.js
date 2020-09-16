import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';

export function loadBackgroundSprites(){
    return loadImage('/images/SMBTileset.png')
     .then(image => {
         const sprites = new SpriteSheet(image);
          sprites.defineTile('ground', 0, 0);
          sprites.defineTile('sky', 3, 23);
          return sprites;
         }
     );
 }
 export function loadMarioSprite(){
     return loadImage('/images/SMBCharacters.gif')
      .then(image => {
          const sprites = new SpriteSheet(image);
           sprites.define('idle', 276, 44, 16, 16);
           return sprites;
          }
      );
  }