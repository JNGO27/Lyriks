import { MainContentWrapper, Heading } from './styles';
import { Search, SongArtistList, Loader, Error } from '../';
import { useGetWorldChartsQuery } from '../../redux/services/shazamCoreApi';

const TopArtistsSidebar = () => {
  const { data, isFetching, error } = useGetWorldChartsQuery();

  if (isFetching) return <Loader />;

  if (error) return <Error />;

  return (
    <MainContentWrapper>
     <Search />
     <Heading>Global Artists:</Heading>
     <SongArtistList data={data} />
    </MainContentWrapper>
  );
};

export default TopArtistsSidebar;