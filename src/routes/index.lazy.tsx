import { createLazyFileRoute } from '@tanstack/react-router'

import Hero from "@/components/Examples/Hero.tsx";

export const Route = createLazyFileRoute('/')({
    component: Hero,
})