import Image from 'next/image'; 

import { TrackWrapper, CoverArtContainer, CoverArtImage, TitleContainer, Title, Subtitle } from './styles';

const CurrentTrack = ({ currentSongData }) => {
  const { images, title, subtitle } = currentSongData;

  return (
    <TrackWrapper>
      <CoverArtContainer>
        <Image src={images.coverart} width={65} height={65} objectFit="cover" />
      </CoverArtContainer>
      <TitleContainer>
        <Title>{title}</Title>        
        <Subtitle>{subtitle}</Subtitle>
      </TitleContainer>
    </TrackWrapper>
  )
}

export default CurrentTrack
