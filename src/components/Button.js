
import styled from '@emotion/styled'

const StyleButton = styled.button`
background-color:pink;
width: 15%;
height: 40px;
border-radius: 10px;
color:${(props) => {
        return props.primary ? "green" : "red"
    }
    }
`;

function Button(props) {
    return <StyleButton primary={props.primary} onClick={props.onClick}>
        {props.children}
    </StyleButton>
}
export default Button