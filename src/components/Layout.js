import React, {useContext} from "react"
import {Global, css, useTheme} from "@emotion/react"
import Context from "../store/context"

const Layout = ({children}) => {
    const {state} = useContext(Context)

    const theme = useTheme()

    return (
        <div>
            <Global
                styles={css`
                    * {
                        box-sizing : border-box;
                        margin:0;
                        padding: 0;
                    }

                    body {
                        background-color: ${state.isDark ? theme.dark.background : theme.light.background}
                    }
            `}
            />
            {children}
        </div>
    )
}

export default Layout;
