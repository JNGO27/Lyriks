import Image from "next/image";
import { useSelector } from "react-redux";

import { Search, ArtistSongPlayer } from '../../components';
import { ImageWrapper } from "../../styles/resusableStyles";
import { ArtistInformationWrapper, ArtistGradientWrapper, ArtistWrapper, ArtistTextInformation,
 RelatedSongsHeading, RelatedSongsList,RelatedSong, RelatedSongsTextContainer, Number } from "./styles";

const ArtistInformation = ({ artistData, songs }) => {
  const { isPlaying, activeSong } = useSelector((state) => state.musicPlayer);
  
  console.log(songs)

  return (
    <>
      <ArtistInformationWrapper>
          <Search searchGridArea={'artist-content-search'}/>
        <ArtistWrapper>
          <ArtistGradientWrapper>
            <Image src={artistData?.attributes?.artwork?.url} width={450} height={450} />
          </ArtistGradientWrapper>
          <ArtistTextInformation>
              <h2>{artistData.attributes.name}</h2>
              <h3>{artistData.attributes.genreNames[0]}</h3>
          </ArtistTextInformation>
        </ArtistWrapper>
          <RelatedSongsHeading>
            <h2>{songs.attributes.title}:</h2>
          </RelatedSongsHeading>
          <RelatedSongsList>
            {songs.data.map(({id, attributes}, idx)=> (
              <RelatedSong key={id}>
                <Number>{idx + 1}</Number>
                <ImageWrapper>
                  <Image src={attributes?.artwork?.url} width={125} height={125} objectFit="cover" />
                  <ArtistSongPlayer song={attributes?.previews[0]?.url} data={songs.data[idx]} i={idx} isPlaying={isPlaying} activeSong={activeSong} songList={songs.data}/>
                </ImageWrapper>
                <RelatedSongsTextContainer>
                  <h3>{attributes?.name}</h3>
                  <h4>{attributes?.albumName}</h4>
                </RelatedSongsTextContainer>
              </RelatedSong>
            ))}
          </RelatedSongsList>
      </ArtistInformationWrapper>
    </>
  );
};

export default ArtistInformation;
