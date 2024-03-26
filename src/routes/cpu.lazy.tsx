import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router'

const CpuLazy = () => {
    return (
        <div>
            <h1>cpu. dhruv was here.</h1>
        </div>
    );
}


export const Route = createLazyFileRoute('/cpu')({
    component: CpuLazy,
})