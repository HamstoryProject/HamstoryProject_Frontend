import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme {
        color : {
            blue : string
            white : string
            black : string
            red : string
            gray100 : string
            gray300 : string
            gray400 : string
            gray500 : string
            gray800 : string
            gray900 : string
        }
        shadow : {
            postShadow1 : string
            postShadow2 : string
        }
        shadowHover : {
            postShadowHover1 : string
            postShadowHover2 : string
        }
    }
}