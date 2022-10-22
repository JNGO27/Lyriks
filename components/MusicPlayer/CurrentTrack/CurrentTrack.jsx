import Image from 'next/image'; 

import { TrackWrapper, CoverArtContainer, CoverArtImage, TitleContainer, Title, Subtitle } from './styles';

const CurrentTrack = ({ artistImage, artistTitle, artistSubtitle }) => {
  return (
    <TrackWrapper>
      <CoverArtContainer>
        <Image src={artistImage} width={65} height={65} objectFit="cover" />
      </CoverArtContainer>
      <TitleContainer>
        <Title>{artistTitle}</Title>        
        <Subtitle>{artistSubtitle}</Subtitle>
      </TitleContainer>
    </TrackWrapper>
  )
}

export default CurrentTrack
