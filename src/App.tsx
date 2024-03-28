import {createRouter, RouterProvider} from "@tanstack/react-router";
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from "@/components/shad/theme-provider.tsx"
import './App.css'

const router = createRouter({routeTree});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RouterProvider router={router}/>
            </ThemeProvider>
        </>
    )
}

export default App