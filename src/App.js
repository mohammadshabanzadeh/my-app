import Home from './pages/home/Home';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import AboutUs from './pages/aboutUs/aboutUs';
import ArticlePage from './pages/articlePage/articlePage';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<AboutUs />} />
  <Route path="/article" element={<ArticlePage />} />
</Routes>


     
    </div>
  );
}

export default App;
