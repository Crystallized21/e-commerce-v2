import React from 'react';
import {Button} from "@/components/ui/button.tsx";
import {Link} from "@tanstack/react-router";

function HeroShad() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-blue-500 animate-gradient duration-5000">
            <div className="flex flex-col items-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    The most useless computer store.
                </h1>
                <div className="pt-10">
                    <Link to="/products">
                        <Button>View Products</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroShad;