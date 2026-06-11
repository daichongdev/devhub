import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Category } from './pages/Category';
import { About } from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>© 2026 DevHub 技术社区. 开放的技术分享平台</p>
            <div className="footer-links">
              <a href="https://github.com/daichongdev/devhub" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span>•</span>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <span>•</span>
              <a href="mailto:contact@devhub.com">联系我们</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
