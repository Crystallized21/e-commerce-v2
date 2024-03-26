import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router'

const About = () => {
    return (
        <div>
            <h1>about this company that has a decline in profits.</h1>
        </div>
    );
}


export const Route = createLazyFileRoute('/about')({
    component: About,
})