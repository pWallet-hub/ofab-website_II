import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Activities from './Pages/Activities/Activities';
import Events from './Pages/Events/Events';
import Hub from './Pages/Hub/Hub';
import BlogPost from './components/BlogPost/BlogPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<About/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/outreachEvents" element={<Events/>} />
        <Route path="/information-hub" element={<Hub/>} />
        <Route path="/blog-post/:id" element={<BlogPost/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
