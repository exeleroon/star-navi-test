import styled from "styled-components";

interface Props {
    bgColor?: string;
}

const Button = styled.button<Props>`
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 12px;
  padding: 7px 24px;
  transition: 0.2s ease-in-out;
  background-color: ${props => props.bgColor ? props.bgColor : '#03a8f4'};
  
  &:hover {
    background-color: #0d6efd;
  }
`

export default Button;