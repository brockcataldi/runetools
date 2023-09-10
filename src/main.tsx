import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

import GlobalStyle from './components/GlobalStyle.tsx'

import RootRoute from './routes/RootRoute.tsx'
import IndexRoute from './routes/IndexRoute.tsx'
import AbilitiesRoute from './routes/AbilitiesRoute.tsx'
import ErrorRoute from './routes/ErrorRoute.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: '',
                element: <IndexRoute />,
            },
            {
                path: 'abilities',
                element: <AbilitiesRoute />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <GlobalStyle />
            <RouterProvider router={router} />
        </RecoilRoot>
    </React.StrictMode>,
)
