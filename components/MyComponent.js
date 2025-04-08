// components/MyComponent.tsx
import * as React from 'react';
import { sprinkles } from '../styles/sprinkles.css';

export function MyComponent() {
    return <div className={sprinkles({ color: 'blue' })}>Hello with blue text!</div>;
}