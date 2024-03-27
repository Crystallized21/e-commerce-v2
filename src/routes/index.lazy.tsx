import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import CardThing from '@/components/CardThing.tsx'

export const Route = createLazyFileRoute('/')({
    component: () => (
        <>
            <Navbar />
            <CardThing />
        </>
    )
})