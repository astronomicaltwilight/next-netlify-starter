import React from 'react';
import {Stack, Body,Title} from '@buildo/bento-design-system';

export default function UnderConstruction() {
    return (
        <Stack
            space={40}
            align="center">
            <Title size="large">Under Construction</Title>
            <Body size="large" align = "center">
                <img src="/elganzo.svg"
                     alt="El Ganzo Goose"/>
            </Body>

        </Stack>

    )
}