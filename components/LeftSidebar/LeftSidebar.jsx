import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { Logo } from '..';
import { setSearchQuery } from '../../redux/features/currentSongArtistList';
import { SidebarWrapper, SidebarItemList, ItemIcon, ItemLabel, ItemContainer, Divider } from './styles.js';
import sidebarIcons from '../../assets/images/sidebarIcons/index';

const linksArray = [
  { label: 'Home', to: '/home' },
  { label: 'Explore', to: '/explore' },
  { label: 'Artists', to: '/globalCharts' },
  // { label: 'Albums', to: '/albums' },
];

const LeftSidebar = () => {
  const dispatch = useDispatch();

  const handleResetSearchOnClick = () => {
    dispatch(setSearchQuery(''));
  }

  return (
    <SidebarWrapper>
      <Logo />
      <Divider />
      <SidebarItemList>
        {linksArray.map(({ label, to }) => (
          <Link key={label} href={to}>
            <ItemContainer onClick={handleResetSearchOnClick}>
              <ItemIcon src={sidebarIcons[label]} />
              <ItemLabel>{label}</ItemLabel>
            </ItemContainer>
          </Link>
        ))}
      </SidebarItemList>
    </SidebarWrapper>
  );
};

export default LeftSidebar;
