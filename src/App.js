import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import HeaderNewsSaved from "./components/headerNewsSaved";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import LoginModal from "./components/loginModal";
import RegisterModal from "./components/registerModal";
import SuccessModal from "./components/successModal";
import "./App.css";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div className="page">
      <Router>
        {" "}
        <Routes>
          {" "}
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={true}>
                {" "}
                <HeaderNewsSaved />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header setShowLoginModal={setShowLoginModal} />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        {showLoginModal && (
          <LoginModal
            setShowLoginModal={setShowLoginModal}
            setShowRegisterModal={setShowRegisterModal}
          />
        )}
        {showRegisterModal && (
          <RegisterModal
            setShowRegisterModal={setShowRegisterModal}
            setShowLoginModal={setShowLoginModal}
            setShowSuccessModal={setShowSuccessModal}
          />
        )}
        {showSuccessModal && (
          <SuccessModal setShowLoginModal={setShowLoginModal} />
        )}
      </Router>
    </div>
  );
}

export default App;
