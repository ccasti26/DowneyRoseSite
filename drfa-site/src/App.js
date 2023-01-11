import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import History from './pages/HistoryPage';
import DonatePage from './pages/DonatePage';
import DecoratePage from './pages/DecoratePage';
import ContactUsPage from './pages/ContactUsPage';
import BlogListPage from './pages/BlogListPage';
import Footer from './Footer';
import Header from './Header';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route  path='/'                element={<HomePage/>} />
          <Route  path='/about'           element={<AboutUsPage/>}  />
          <Route  path='/history'         element={<History />} />
          <Route  path='/donate'          element={<DonatePage/>} />
          <Route  path='/decorate'        element={<DecoratePage/>} />
          <Route  path='/contact'         element={<ContactUsPage/>}  />
          <Route  path='/blog'            element={<BlogListPage/>} />
          <Route  path='/blog/:blogID'    element={<BlogPage/>} />

          {/* TODO: Add 404 Page */}

        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
