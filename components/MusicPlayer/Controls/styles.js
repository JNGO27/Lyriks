import styled from 'styled-components';

export const ControlWrapper = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 height: fit-content;
 width: 100%;
 margin-bottom: 5px;

  svg {
    cursor: pointer;

    :nth-child(1) {
      @media (${(props) => props.theme.queries.smallAndDown}) {
        display: none;
      }
    }

    :nth-child(5) {
      @media (${(props) => props.theme.queries.smallAndDown}) {
        display: none;
      }
    }
  }
`;