import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

import GlobalStyle from './GlobalStyle.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <GlobalStyle />
            <App />
        </RecoilRoot>
    </React.StrictMode>,
)
