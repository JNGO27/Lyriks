import styled from 'styled-components';

export const MainContentWrapper = styled.main`
  grid-area: main-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 200px 1fr;
  grid-template-areas:
    'main-content-search'
    'main-content-heading'
    'main-content-inner';

  overflow: auto;

  padding: 20px;

  background: ${(props) => props.theme.colors.gradients.blackRight};
`;

export const Heading = styled.h1`
  grid-area: main-content-heading;
  justify-self: center;

  margin-top: 100px;

  font-size: 3rem;
  background-image: ${(props) => props.theme.colors.gradients.gold};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`