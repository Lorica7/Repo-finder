import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';

import Home from './Pages/Home';
import About from './Pages/About';
import FourOFour from './Pages/404';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';

function App () {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
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
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
