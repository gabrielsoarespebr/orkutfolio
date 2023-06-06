import './App.css'
import { Header } from './components/Header'
import { AsideNav } from './components/AsideNav'
import { UserProvider } from './contexts/UserContext'
import { DescriptionContainer } from './components/DescriptionContainer'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <main className='m-2 me-3 d-flex gap-1 pb-2'>
          <AsideNav />
          <div className='col-10 d-flex gap-1'>
            <div className='col-8 d-flex flex-column gap-1'>
              <DescriptionContainer />
              <Testimonials />
            </div>
            <div className='col-4 heightFitContent'>
              <Projects />
              <Skills />
              <Certifications />
            </div>
          </div>
        </main>
      </UserProvider>
    </>
  )
}

export default App
