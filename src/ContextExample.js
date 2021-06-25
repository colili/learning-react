import React, { useContext, useState } from 'react'

import {ThemeContext, themes} from './ThemeContext'

export default function ContextExample() {
    const [theme, setTheme] = useState(themes.light)
    return (
        <ThemeContext.Provider value={{
            theme,
            toggle: () => setTheme(theme === themes.light? themes.dark: themes.light)
        }}>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

const Toolbar = () => {
    return <ThemedButton/>
}

const ThemedButton = () => {
    const context = useContext(ThemeContext)
    return <button style={{background: context.theme.background, color: context.theme.foreground}}
    onClick={()=>{context.toggle()}}>Click me!</button>
}