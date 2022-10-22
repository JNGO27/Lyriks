import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import FocusLock from "react-focus-lock";
import { GiHamburgerMenu } from 'react-icons/gi';

import { Logo } from '..';
import { setSearchQuery } from '../../redux/features/currentSongArtistList';
import { StyledModal, Exit, SidebarWrapper, SidebarItemList, ItemIcon, ItemLabel, ItemContainer, Divider } from './styles.js';
import sidebarIcons from '../../assets/images/sidebarIcons/index'

const linksArray = [
  { label: 'Home', to: '/home' },
  { label: 'Explore', to: '/explore' },
  { label: 'Artists', to: '/globalCharts' },
  // { label: 'Albums', to: '/albums' },
];

const ModalSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const dispatch = useDispatch();

  const handleResetSearchOnClickAndExitModal = () => {
    dispatch(setSearchQuery(''));
    toggleModal();
  }

  return (
    <>
      <GiHamburgerMenu onClick={toggleModal}/>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={toggleModal}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-label"
      >
        <FocusLock onClick={handleResetSearchOnClickAndExitModal}>
          <SidebarWrapper>
          <Logo />
          <Divider />
          <SidebarItemList>
            {linksArray.map(({ label, to }) => (
              <Link key={label} href={to}>
                <ItemContainer onClick={handleResetSearchOnClickAndExitModal}>
                  <ItemIcon src={sidebarIcons[label]} />
                  <ItemLabel>{label}</ItemLabel>
                </ItemContainer>
              </Link>
            ))}
          </SidebarItemList>
        </SidebarWrapper>
        </FocusLock>
        <Exit onClick={toggleModal}>ⓧ</Exit>
      </StyledModal>
    </>
  );
}

export default ModalSidebar;