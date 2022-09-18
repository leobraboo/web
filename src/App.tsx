// foi feita a instalaçao do phosphor-react e a importaçao do icone abaixo
import {useState} from 'react'

import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';
import logoImg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';


function App() {

  const [hasUserClickButton , setHasUserClickButton] = useState(false)


  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-10 '>
      <img src={logoImg} alt="" />


      <h1 className='text-6xl text-white font-black m-10'>Seu <span className='bg-duo-gradient text-transparent bg-clip-text'> duo</span>  está aqui.</h1>


      

      <div className='grid grid-cols-6 gap-6 mt-4'>
        <GameBanner bannerUrl= "/image1.png" title='League Of Legends' adsCount={2} />
        <GameBanner bannerUrl= "/image2.png" title='League Of Legends' adsCount={3} />
        <GameBanner bannerUrl= "/image3.png" title='League Of Legends' adsCount={5} />
        <GameBanner bannerUrl= "/image5.png" title='League Of Legends' adsCount={6} />
        <GameBanner bannerUrl= "/image6.png" title='League Of Legends' adsCount={1} />
        <GameBanner bannerUrl= "/image7.png" title='League Of Legends' adsCount={4} />

      </div>

      <CreateAdBanner/>

    </div>
    
  )
}

export default App
