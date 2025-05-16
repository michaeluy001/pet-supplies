
import { Header } from './Components/Header'

import { Features } from './Components/Features'
import { Mission } from './Components/Mission'
import { Slider } from './Components/Slider'
import { EmailCapture } from './Components/EmailCapture'
import { Footer } from './Components/Footer'
import { Products } from './Components/Products'
import { HeroBanner } from './Components/Hero'

function App() {
  return (
    <><div className='overflow-x-hidden relative'>
        <Header />
        <div className='flex flex-col'>
          <HeroBanner />
          <Features />
          <Products />
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
