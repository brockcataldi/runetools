import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

import RootRoute from './routes/RootRoute.tsx'
import IndexRoute from './routes/IndexRoute.tsx'
import ErrorRoute from './routes/ErrorRoute.tsx'

import OSRSRoute from './routes/OSRS/OSRSRoute.tsx'
import FlowRoute from './routes/OSRS/FlowRoute/FlowRoute.tsx'

import RS3Route from './routes/RS3/RS3Route.tsx'
import ActionBarRoute from './routes/RS3/ActionBarRoute/ActionBarRoute.tsx'

import GlobalStyle from './components/GlobalStyle.tsx'

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
                path: 'osrs',
                element: <OSRSRoute />,
            },
            {
                path: 'osrs/flow',
                element: <FlowRoute />
            },
            {
                path: 'rs3',
                element: <RS3Route />,
            },
            {
                path: 'rs3/action-bar',
                element: <ActionBarRoute />,
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
