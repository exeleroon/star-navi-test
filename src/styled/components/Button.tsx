import styled from "styled-components";

interface Props {
    bgColor?: string;
}

const Button = styled.button<Props>`
  border: none;
  border-radius: 12px;
  padding: 10px 24px;
  transition: 0.2s ease-in-out;
  background-color: ${props => props.bgColor ? props.bgColor : '#03a8f4'};
  
  &:hover {
    opacity: 0.7;
  }
`

export default Button;