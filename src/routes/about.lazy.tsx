import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from "@/components/Navbar.tsx";

const About = () => {
    return (
        <div>
            <Navbar/>
            <h1>about this company that has a decline in profits.</h1>
        </div>
    );
}


export const Route = createLazyFileRoute('/about')({
    component: About,
})