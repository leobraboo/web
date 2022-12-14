import {useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import axios from 'axios'

import './styles/main.css';
import logoImg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count:{
    ads: number;
  }
}

function App() {
//usando o useState e o useEffect para atribuir valor para o botao e alterar esse valor 
  const [games , setGames] = useState<Game[]>([])


  useEffect(() => {
    axios('http://localHost:3333/games').then (response => {
      setGames(response.data)
    })
  } , [] )


  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-10 '>
      <img src={logoImg} alt="" />


      <h1 className='text-6xl text-white font-black m-10'>Seu <span className='bg-duo-gradient text-transparent bg-clip-text'> duo</span>  está aqui.</h1>


      <div className='grid grid-cols-6 gap-6 mt-4'>
        {games.map(game => {
          return(
            <GameBanner 
            key={game.id}
            bannerUrl= {game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads} />
          )
        })}

      </div>

      <Dialog.Root>
        <CreateAdBanner/>

        <CreateAdModal/>

      </Dialog.Root>


    </div>
    
  )
}

export default App
