import './App.css'
import { Header } from './components/Header'
import { AsideNav } from './components/AsideNav'
import { UserProvider } from './contexts/UserContext'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Videos } from './components/Videos';
import { Home } from './components/Home';
import { Photos } from './components/Photos';
import { TestimonialsPage } from './components/TestimonialsPage';
import { Scrap } from './components/Scrap';

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <main id='mainContent' className='pb-2'>
          <Router>
            <AsideNav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/recados' element={<Scrap />} />
              <Route path='/fotos' element={<Photos />} />
              <Route path='/videos' element={<Videos />} />
              <Route path='/testimonials' element={<TestimonialsPage />} />
            </Routes>
          </Router>
        </main>
      </UserProvider>
    </>
  )
}

export default App
