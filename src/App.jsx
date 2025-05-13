
import { Header } from './Components/Header'
import { HeroBanner } from './Components/HeroBanner'
import { Features } from './Components/Features'
import { Mission } from './Components/Mission'
import { Gallery } from './Components/Gallery'

function App() {


  return (
    <><div className='overflow-x-hidden'>
        <Header />
        <div className='flex flex-col container'>
          <HeroBanner />
          <Features />
          <Mission />
          <Gallery />
        </div>
      </div>
    </>
  )
}

export default App
