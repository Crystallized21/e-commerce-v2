import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from "@/components/shad/Navbar.tsx";
import HeroShad from "@/components/shad/HeroShad.tsx";

export const Route = createLazyFileRoute('/')({
    component: () => (
        <>
                <Navbar/>
                <HeroShad/>
        </>
    )
})