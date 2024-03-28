import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from "@/components/shad/Navbar.tsx";

const GpuLazy = () => {
    return (
        <div>
            <Navbar/>
            <h1>seriously? your broke asf, stop looking at this page.</h1>
        </div>
    );
}


export const Route = createLazyFileRoute('/gpu')({
    component: GpuLazy,
})