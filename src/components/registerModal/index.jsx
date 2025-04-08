import { IoClose } from "react-icons/io5";
import "./registerModal.css";

const RegisterModal = ({ setShowRegisterModal, setShowSuccessModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;

    if (!email || !password || !username) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    console.log("Formulário enviado:", email, password, username);

    setShowRegisterModal(false);

    setShowSuccessModal(true);
  };

  return (
    <div className="registerModal">
      <div className="registerModal__wrapper-form">
        <IoClose
          className="registerModal__close-button"
          onClick={() => setShowRegisterModal(false)}
        />
        <p className="registerModal__title">Inscrever-se</p>
        <form className="registerModal__form" onSubmit={handleSubmit}>
          <label className="registerModal__form-label">
            Email
            <input
              name="email"
              className="registerModal__form-input"
              placeholder="Insira e-mail"
            />
          </label>
          <label className="registerModal__form-label">
            Senha
            <input
              name="password"
              className="registerModal__form-input"
              placeholder="Insira a senha"
            />
          </label>
          <label className="registerModal__form-label">
            Nome de usuário
            <input
              name="username"
              className="registerModal__form-input"
              placeholder="Insira seu nome de usuário"
            />
          </label>
          <button className="registerModal__form-submit" type="submit">
            Inscrever-se
          </button>
          <p className="registerModal__button-redirect">
            ou{" "}
            <button
              type="button"
              onClick={() => {
                const email = document.querySelector(
                  'input[name="email"]'
                ).value;
                const password = document.querySelector(
                  'input[name="password"]'
                ).value;
                const username = document.querySelector(
                  'input[name="username"]'
                ).value;

                if (!email || !password || !username) {
                  alert("Por favor, preencha todos os campos antes de entrar!");
                  return;
                }

                setShowRegisterModal(false);
                setShowSuccessModal(true);
              }}
            >
              Entre
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
