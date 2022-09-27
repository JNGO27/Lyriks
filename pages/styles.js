import styled from 'styled-components';

export const HomeWrapper = styled.div`
  --column-1-length: 350px;
  --column-2-length: minmax(800px, 3fr);
  --column-3-length: minmax(600px, 1fr);

  height: 100%;

  display: grid;
  grid-template-columns:
    var(--column-1-length)
    var(--column-2-length)
    var(--column-3-length);
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar main-content right-sidebar';

  background-color: ${(props) => props.theme.colors.blacks[100]};
  color: ${(props) => props.theme.colors.white};
`;
