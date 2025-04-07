import { IoClose } from "react-icons/io5";
import "./successModal.css";

const SuccessModal = ({ setShowSuccessModal, setShowLoginModal }) => {
  return (
    <div className="successModal">
      <div className="successModal__wrapper">
        <IoClose
          className="successModal__close-button"
          onClick={() => setShowSuccessModal(false)}
        />
        <div>
          <p className="successModal__title">Cadastro concluído com sucesso!</p>
          <button
            className="successModal__button"
            onClick={() => {
              setShowSuccessModal(false);
              setShowLoginModal(true);
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
export default SuccessModal;
