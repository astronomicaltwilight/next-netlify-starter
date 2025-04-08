import React from 'react';
import { Navigation } from '@buildo/bento-design-system';
import { Home, LineChart, Ban } from 'lucide-react';

export default {
    title: 'Components/Navigation',
    component: Navigation,
    argTypes: {
        size: { control: 'text' },
        kind: { control: 'text' },
    },
};

const Template = (args) => <Navigation {...args} />;

export const Medium = Template.bind({});
Medium.args = {
    size: 'large',
    kind: 'icon',
    destinations: [
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
    ],
};