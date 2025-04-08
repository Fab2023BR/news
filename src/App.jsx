import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import HeaderNewsSaved from "./components/headerNewsSaved";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import LoginModal from "./components/loginModal";
import RegisterModal from "./components/registerModal";
import SuccessModal from "./components/successModal";
import "./App.css";
import NewsList from "./components/newsList";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchNews = async (keyword) => {
    setHasSearched(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&q=${encodeURIComponent(
      keyword
    )}&apiKey=a288f46ed536409b88ff45b911547068`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "ok") {
        setArticles(data.articles);
      } else {
        console.error("Error fetching news:", data.message);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  return (
    <div className="page">
      <Router>
        <Routes>
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={true}>
                <HeaderNewsSaved />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header
                  setShowLoginModal={setShowLoginModal}
                  onSearch={handleSearchNews}
                />
                <NewsList noticias={articles} hasSearched={hasSearched} /> {}
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
          <SuccessModal
            setShowSuccessModal={setShowSuccessModal}
            setShowLoginModal={setShowLoginModal}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
