import styled from "styled-components";

interface ITd {
    key: any;
    hovered: string;
    started: string;
    size: number | string;
}

export const SquareT = styled.table`
  max-width: 1360px;
  overflow-y: auto;
  overflow-x: auto;
`

export const STd = styled.td<ITd>`
  cursor: ${props => props.started === '1' ? 'pointer' : 'not-allowed'};
  border: 1px solid grey;
  width: ${props => props.size !== 'large' ? '45px' : '15px'};
  height: ${props => props.size !== 'large' ? '45px' : '15px'};
  background-color: ${props => props.hovered === '1' ? '#03a8f4' : 'inherit'};
`

export const SLog = styled.div`
  width: 100%;
  padding: 10px 20px;
  color: #8d713f;
  background-color: #fbf8e3;
`