import React from 'react';
import { Navigation } from '@buildo/bento-design-system';
import { Home, LineChart, Ban } from 'lucide-react';

export default function TopNavbar() {
    return (
        <Navigation
            size="large"
            kind="icon"
            destinations={[
                {
                    label: "Home",
                    href: "/index",
                    icon: () => <Home />,
                },
                {
                    label: "D3 Graph",
                    href: "/graph",
                    icon: () => <LineChart />,
                },
                {
                    label: "Disabled",
                    href: "#",
                    disabled: true,
                    icon: () => <Ban />,
                },
            ]}
        />
    );
}