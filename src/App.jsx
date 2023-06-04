import './App.css'
import { Header } from './components/Header'
import { AsideNav } from './components/AsideNav'
import { UserProvider } from './contexts/UserContext'
import { DescriptionContainer } from './components/DescriptionContainer'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <main className='my-2 d-flex justify-content-around'>
          <AsideNav />
          <DescriptionContainer />
          <div className='col-3 heightFitContent'>
            <Projects />
            <Skills />
            <Certifications />
          </div>
        </main>
      </UserProvider>
    </>
  )
}

export default App
