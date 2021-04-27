import styled from 'styled-components'
import MuiInput from './index'

const MyInput = styled(MuiInput)`
  .border {
    border-radius: 25px;
  }

  .label {
    color: ${(props) => props.theme.palette.secondary.main};
    font-weight: bold;
  }
`
export default MyInput
