import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import ArticlePage from './pages/ArticlesPage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<ArticlesListPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
}

export default App;
