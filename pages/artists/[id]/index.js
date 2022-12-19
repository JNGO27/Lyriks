import { ArtistInformation, Loader, Error } from '../../../components';
import { useGetArtistDetailsQuery } from '../../../redux/services/shazamCoreApi';

const ArtistPage = ({ artistCode }) => {
  const { data, isFetching, error } = useGetArtistDetailsQuery({ artistCode });
  if (isFetching) return <Loader />;

  if (error) return <Error />;
  
  return <ArtistInformation artistData={data.data[0]} songs={data.data[0].views["top-songs"]} />;
}

export default ArtistPage;

export const getServerSideProps = async (context) => {
  const artistCode = context?.params?.id;

  return {
    props: { artistCode },
  };
};