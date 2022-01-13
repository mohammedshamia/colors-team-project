
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AllRouter } from './AllRouter'
import { useTheme } from './Hook/useTheme'
import Store from './Redux'
import GlobalStyle from './Theme/GloableStyle'
interface Props {
    
}

const ThemeProviderWrapper = (props) => {
    const [theme] = useTheme()
    return <ThemeProvider theme={theme==="Dark" ? dark : light} {...props} />
  }

export const Providers = (props: Props) => {
    return (
        <Provider store={Store}>
        <GlobalStyle/>
        <ThemeProviderWrapper>
        <BrowserRouter>
        <AllRouter/>
        </BrowserRouter>

        </ThemeProviderWrapper>
        </Provider>
    )
}
