import React from 'react';
import { Navigation } from '@buildo/bento-design-system';

export default function TopNavbar() {
    return (
        <Navigation
            size="medium"
            kind="none"
            destinations={[
                {
                    label: "Home",
                    href: "/index",
                },


            ]}
        />
    );
}