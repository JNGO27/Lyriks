import { useSelector } from 'react-redux';

import { MainContentWrapper, SmallerDeviceWrapper } from './styles';
import { Search, TopArtists, TopCharts, Genres, SongArtistList, Loader, Error } from '..';
import { useGetWorldChartsByGenreOrSearchQuery } from '../../redux/services/shazamCoreApi';

const Home = () => {
  const { genreCode, searchQuery } = useSelector((state) => state.currentSongArtistList);
  const { data, isFetching, error } = useGetWorldChartsByGenreOrSearchQuery({ genreCode: genreCode || 'POP', searchQuery, });

  if (isFetching) return <Loader />;

  if (error) return <Error />;

  return (
    <MainContentWrapper isSearch={!!searchQuery}>
      <Search />
      <TopArtists />
      <SmallerDeviceWrapper isSearch={!!searchQuery}>
        <TopCharts />
      </SmallerDeviceWrapper>
      <Genres />
      <SongArtistList data={data} isSearch={!!searchQuery} />
    </MainContentWrapper>
  );
};

export default Home;
