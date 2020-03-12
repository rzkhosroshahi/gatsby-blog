import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../style/globalStyle"
import { useLineHelper } from "../../style/useLineHelper"
import { useThemeSelector } from "../../style/useThemeSelector"
import { Header } from "../Header"

export const ToggleThemeProvider = React.createContext({
  toggleTheme: () => null,
})

export const BlogLayout = ({ children }) => {
  const [theme, toggleTheme] = useThemeSelector()
  useLineHelper()

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeProvider.Provider value={{ toggleTheme }}>
        <Header />
        <div className="children main_width">{children}</div>
        <GlobalStyle />
      </ToggleThemeProvider.Provider>
    </ThemeProvider>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
