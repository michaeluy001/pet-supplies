
import { Header } from './Components/Header'
import { HeroBanner } from './Components/HeroBanner'
import { Features } from './Components/Features'
import { Mission } from './Components/Mission'
import { Slider } from './Components/Slider'
import { EmailCapture } from './Components/EmailCapture'
import { Footer } from './Components/Footer'


function App() {


  return (
    <><div className='overflow-x-hidden'>
        <Header />
        <div className='flex flex-col container'>
          <HeroBanner />
          <Features />
          <Slider />
          <Mission />

          <EmailCapture />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
