import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import DonatePage from './pages/DonatePage';
import DecoratePage from './pages/DecoratingPage';
import ContactUsPage from './pages/ContactUsPage';
import BlogPage from './pages/BlogPage';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route  path='/'          element={<HomePage/>} />
          <Route  path='/about'     element={<AboutUsPage/>}  />
          <Route  path='/donate'    element={<DonatePage/>} />
          <Route  path='/decorate'  element={<DecoratePage/>} />
          <Route  path='/contact'   element={<ContactUsPage/>}  />
          <Route  path='/blog'      element={<BlogPage/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
