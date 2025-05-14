
import { Header } from './Components/Header'
import { HeroBanner } from './Components/HeroBanner'
import { Features } from './Components/Features'
import { Mission } from './Components/Mission'
import { Slider } from './Components/Slider'

function App() {


  return (
    <><div className='overflow-x-hidden'>
        <Header />
        <div className='flex flex-col container'>
          <HeroBanner />
          <Features />
          <Mission />
          <Slider />
        </div>
      </div>
    </>
  )
}

export default App
