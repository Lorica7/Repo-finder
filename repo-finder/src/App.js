import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import FourOFour from './Pages/404';

function App () {
  return (
    <Router>

      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />;
            <Route path="/fourofour" element={<FourOFour />} />;
            <Route path="/*" element={<FourOFour />} />;

          </Routes>
        </main>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
