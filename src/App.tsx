import {createRouter, RouterProvider} from "@tanstack/react-router";
import { routeTree } from './routeTree.gen'
import './App.css'
import Banner from "@/components/Banner.tsx";
import { ThemeProvider } from "@/components/theme-provider"

const router = createRouter({routeTree});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <>
            <ThemeProvider defaultTheme={"dark"} storageKey={"vite-ui-theme"}>
                <Banner/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </>
    )
}

export default App