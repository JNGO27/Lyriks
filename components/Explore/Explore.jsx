import { MainContentWrapper } from './styles';
import { Search, SongArtistList, Loader, Error } from '..';
import { useGetWorldChartsByGenreOrSearchQuery } from '../../redux/services/shazamCoreApi';

const Explore = () => {
  const { data, isFetching, error } = useGetWorldChartsByGenreOrSearchQuery({ genreCode: 'ROCK' });
  
  if (isFetching) return <Loader />;

  if (error) return <Error />;  
  
  return (
    <MainContentWrapper>
      <Search />
      <SongArtistList data={data} />
    </MainContentWrapper>
  );
};

export default Explore;
