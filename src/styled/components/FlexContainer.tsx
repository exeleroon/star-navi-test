import styled from "styled-components";

interface Props {
    gap?: string;
    justify?: string;
    mb?: string | number;
    direction?: string;
    alignItems?: string;
    max_height?: string;
    max_width?: string;
    min_width?: string;
    width?: string;
    min_height?: string;
    padding?: string;
}

const FlexContainer = styled.div<Props>`
  display: flex;
  align-items: ${props => props.alignItems ? props.alignItems : 'baseline'};
  gap: ${(props) => props.gap ? props.gap : '0'};
  justify-content: ${props => props.justify ? props.justify : 'inherit'};
  margin-bottom: ${props => props.mb ? props.mb : '0'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  max-height: ${props => props.max_height ? props.max_height : 'inherit'};
  overflow: auto;
  max-width: ${props => props.max_width ? props.max_width : 'inherit'};
  min-width: ${props => props.min_width ? props.min_width : 'inherit'};
  width: ${props => props.width ? props.width : 'auto'};
  min-height: ${props => props.min_height ? props.min_height : 'fit-content'};
  padding: ${props => props.padding ? props.padding : ''};
`

export default FlexContainer;