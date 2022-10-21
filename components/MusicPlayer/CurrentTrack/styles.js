import styled from 'styled-components';

export const TrackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const CoverArtContainer = styled.div`
  width: max-content;
  height: max-content;
  padding-right: 20px;

  img, span, path {
    border-radius: 50%;
  }


  @media (${(props) => props.theme.queries.smallAndDown}) {
    img, span, path {
      max-width: 50px;
      max-height: 50px;
    }

    padding-right: 8px;
  }

  @media (${(props) => props.theme.queries.verySmallAndDown}) {
      display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  height: 100%;
  width: max-content;
  line-height: 2;
  padding-right: 40px;

  @media (${(props) => props.theme.queries.smallAndDown}) {
    padding-right: 20px;
  }
`;

export const Title = styled.h4`
  width: 170px;
  height: fit-content;
  text-overflow: ellipsis;  
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (${(props) => props.theme.queries.smallAndDown}) {
    max-width: 120px;
  }

  @media (${(props) => props.theme.queries.smallMediumAndDown}) {
    max-width: 80px;
  }
`;

export const Subtitle = styled.h5`
  width: 170px;
  height: fit-content;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.grays[200]};

  @media (${(props) => props.theme.queries.smallAndDown}) {
    max-width: 120px;
  }

  @media (${(props) => props.theme.queries.smallMediumAndDown}) {
    max-width: 80px;
  }
`;
