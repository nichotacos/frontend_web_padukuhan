import NavBar from './components/NavBar'
import AboutDuwet from './pages/AboutDuwet'
import HeroPage from './pages/HeroPage'
import Sambutan from './pages/Sambutan'

export default function App() {

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/gk_landscape.jpg)",
      backgroundSize: "cover",
      height: "100vh",
    }}>
      <NavBar />
      <div className='h-full flex flex-col justify-center ml-48'>
        <HeroPage />
      </div>
      <AboutDuwet />
      <Sambutan />
    </div>
  )
}

