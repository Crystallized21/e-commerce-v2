import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from "@/components/shad/Navbar.tsx";

const Products = () => {
    return (
        <div>
            <Navbar/>
            <h1>sorry we are broke. we have no products in stock.</h1>
        </div>
    );
}

export const Route = createLazyFileRoute('/products')({
    component: Products,
})