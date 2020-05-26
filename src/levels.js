
import Burger from './burger'

export function buildLevel(game, level) {
    let burgers = [];

        for( let i = 0; i < level; i++) {
            burgers.push(new Burger(game))
        }


    return burgers
}



export const level1 = 5
