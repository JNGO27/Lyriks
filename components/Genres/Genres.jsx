import Image from 'next/image';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import {
  GenresWrapper,
  GenreHeading,
  GenresList,
  GradientBackground,
  ArrowsWrapper,
  GenreCard,
  ImageWrapper,
  CurrentGenreContainer,
  GenreOverlay,
} from './styles';
import { genreImages } from '../../utils/constants';
import { allGenresWithColors } from '../../utils/constants';
import {
  selectGenre,
  setDiscoverGenre,
} from '../../redux/features/currentSongArtistList';

const Genres = () => {
  const dispatch = useDispatch();
  const currentDiscoverGenre =
    useSelector((state) => state.currentSongArtistList.discoverGenre) || 'Pop';

  const scrollRef = useRef(null);
  const uiGenres = Object.values(allGenresWithColors);
  const apiGenresNames = Object.keys(allGenresWithColors);

  const handleGenreChange = (idx) => {
    const genre = apiGenresNames[idx];
    const discoverGenre = uiGenres[idx][0];

    return function () {
      dispatch(selectGenre(genre));
      dispatch(setDiscoverGenre(discoverGenre));
    };
  };

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 750;
    } else {
      current.scrollLeft += 750;
    }
  };

  const handleScroll = (scrollDirection) => {
    return function () {
      scroll(scrollDirection);
    };
  };

  return (
    <>
      <GenresWrapper ref={scrollRef}>
        <GenreHeading>
          <h2>Genres</h2>
          <ArrowsWrapper>
            <ImArrowLeft onClick={handleScroll('left')} />
            <ImArrowRight onClick={handleScroll('right')} />
          </ArrowsWrapper>
        </GenreHeading>

        <GenresList>
          {uiGenres.map((genreArr, idx) => {
            return (
              <GradientBackground key={idx}>
                <GenreCard
                  genreColor={genreArr[1]}
                  onClick={handleGenreChange(idx)}
                >
                  <h5>{genreArr[0]}</h5>
                  <ImageWrapper>
                    <Image src={genreImages[idx]} width={80} height={80} />
                  </ImageWrapper>
                </GenreCard>
              </GradientBackground>
            );
          })}
        </GenresList>
      </GenresWrapper>
      <CurrentGenreContainer>
        <h1>Discover:</h1>
        <h2>{currentDiscoverGenre}</h2>
      </CurrentGenreContainer>
    </>
  );
};

export default Genres;
