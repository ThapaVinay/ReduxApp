import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="ReduxApp/" element={<Shop />} />
          <Route exact path="ReduxApp/about" element={<About />} />
        </Routes>
      </Router>

      <Footer />

    </>
  );
}

export default App;
