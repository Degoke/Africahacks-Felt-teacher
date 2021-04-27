import styled from 'styled-components'
import MUIButton from './index'

const MyButton = styled(MUIButton)`
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(33, 32, 156, 0.1);
  padding: auto ${(props) => props.theme.spacing(6)};
`
export default MyButton
