import Image from "next/image";
import { useSelector } from "react-redux";

import { Search, Loader, Error, ArtistSongPlayer } from '../../components';
import { ImageWrapper } from "../../styles/resusableStyles";
import { ArtistInformationWrapper, ArtistGradientWrapper, ArtistWrapper, ArtistTextInformation, RelatedSongsHeading,
  RelatedSongsList,RelatedSong, RelatedSongsTextContainer, Number, SongLyrics } from "./styles";
import { useGetArtistDetailsQuery } from '../../redux/services/shazamCoreApi';

const SongInformation = ({ songData }) => {
  const { isPlaying, activeSong } = useSelector((state) => state.musicPlayer);
  
  const artistCode = songData?.artists[0]?.adamid;
  const { data, isFetching, error } = useGetArtistDetailsQuery({ artistCode });
  
  if (isFetching) return <Loader />;
  
  if (error) return <Error />;
  
  const songs = data.data[0].views["top-songs"];
  const artistData = data.data[0];
  
  return (
    <>
      <ArtistInformationWrapper>
          <Search searchGridArea={'artist-content-search'}/>
        <ArtistWrapper>
          <ArtistGradientWrapper>
              <Image src={artistData?.attributes?.artwork?.url} width={450} height={450} priority />
          </ArtistGradientWrapper>
          <ArtistTextInformation>
              <h2>{artistData.attributes.name}</h2>
              <h3>{artistData.attributes.genreNames[0]}</h3>
          </ArtistTextInformation>
        </ArtistWrapper>
        <SongLyrics>
          <h2>Lyrics:</h2>
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1].text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`}>{line}</p>
            ))
            : (
              <p>Sorry, No lyrics found!</p>
            )}
        </SongLyrics>
          <RelatedSongsHeading>
            <h2>Related Songs:</h2>
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

export default SongInformation;
