import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Activities from './Pages/Activities/Activities';
import Events from './Pages/Events/Events';
import Hub from './Pages/Hub/Hub';
import BlogPost from './components/BlogPost/BlogPost';
import Capacity from '../src/Pages/Capacity/Capacity';
import Youth from '../src/Pages/Youth/Youth';
import Media from '../src/Pages/Media/Media';
import Omas from './Pages/Omas/Omas';


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
        <Route path="/Capacity" element={<Capacity/>} />
        <Route path="/Youth" element={<Youth/>} />
        <Route path="/Media" element={<Media/>} />
        <Route path="/Omas" element={<Omas/>} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
