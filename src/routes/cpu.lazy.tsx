import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from "@/components/shad/Navbar.tsx";

const CpuLazy = () => {
    return (
        <div>
            <Navbar/>
            <h1>cpu. dhruv was here.</h1>
        </div>
    );
}


export const Route = createLazyFileRoute('/cpu')({
    component: CpuLazy,
})