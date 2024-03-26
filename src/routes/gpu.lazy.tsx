import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router'

const GpuLazy = () => {
    return (
        <div>
            <h1>seriously? your broke asf, stop looking at this page.</h1>
        </div>
    );
}


export const Route = createLazyFileRoute('/gpu')({
    component: GpuLazy,
})