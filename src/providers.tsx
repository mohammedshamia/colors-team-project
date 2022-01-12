
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AllRouter } from './AllRouter'
import Store from './Redux'
import GlobalStyle from './Theme/GloableStyle'
interface Props {
    
}

export const providers = (props: Props) => {
    return (
        <Provider store={Store}>
        <GlobalStyle/>
        <BrowserRouter>
        <AllRouter/>
        </BrowserRouter>
        </Provider>
    )
}
