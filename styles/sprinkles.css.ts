// styles/sprinkles.css.ts
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const foregroundColors = {
    blue: '#0096FF',
    black: '#000000',
};

const myProperties = defineProperties({
    properties: {
        color: foregroundColors,
    },
});

export const sprinkles = createSprinkles(myProperties);