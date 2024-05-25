import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

function ImageModal({ closeModal, modalIsOpen, photo }) {
  console.dir(photo);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      
    >
      <img className={css.imageModal} src={photo} alt="large" />
      
    </Modal>
  );
}

export default ImageModal;
