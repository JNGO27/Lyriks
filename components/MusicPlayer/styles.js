import styled from 'styled-components';

export const MusicPlayerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.gradients.goldTransparent};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: fit-content;
  max-height: fit-content;
  padding: 20px 0;

  border-radius: 20px 20px 0 0;
`;

export const MusicPlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding-left: 3rem;
  padding-right: 3rem;

  @media (${(props) => props.theme.queries.smallAndDown}) {
    padding: 0 20px;
  }
`;

export const ControlSeekbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  max-width: 500px;

  @media (${(props) => props.theme.queries.smallAndDown}) {
    flex: 1;
  }
`;

export const AudioPlayerVolumeBarWrapper = styled.div`
 display: flex;
 flex: 1;

 @media (${(props) => props.theme.queries.mediumAndDown}) {
    display: none;
  }
`;