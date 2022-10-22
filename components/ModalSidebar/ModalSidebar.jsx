const ModalSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggleModal}>Open modal</button>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={toggleModal}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-label"
      >
        <FocusLock>
          <p id="modal-label">I am an accessible modal!</p>
          <button onClick={toggleModal}>Close me</button>
        </FocusLock>
      </StyledModal>
    </>
  );
}

export default ModalSidebar;