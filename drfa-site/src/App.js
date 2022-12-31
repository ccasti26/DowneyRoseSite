import './App.css';

import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import DonatePage from './pages/DonatePage';
import DecoratePage from './pages/DecoratingPage';
import ContactUsPage from './pages/ContactUsPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Downey Rose Float Association</h1>
        <NavBar/>
        <div id='page-body'>
        <Routes>
          <Route  path='/'          element={<HomePage/>} />
          <Route  path='/about'     element={<AboutUsPage/>}  />
          <Route  path='/donate'    element={<DonatePage/>} />
          <Route  path='/decorate'  element={<DecoratePage/>} />
          <Route  path='/contact'   element={<ContactUsPage/>}  />
          <Route  path='/blog'      element={<BlogPage/>} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
