import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.palette.background.default}
    }
`
export default globalStyle
