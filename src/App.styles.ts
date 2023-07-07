import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    margin:50px;
    position:relative;
    top:20px;
`; 

export const StyledButton = styled(IconButton)`
    position:fixed;
    z-index:100;
    right:40px;
    top:20px; 

    // @media (hover: none){
    //     .MuiIconButton-root:hover {
    //         background-color: red;
    //     }
    // }
 `