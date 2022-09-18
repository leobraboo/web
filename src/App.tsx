// foi feita a instalaçao do phosphor-react e a importaçao do icone abaixo
import {useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import {Input} from './components/Form/input'
import './styles/main.css';
import logoImg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';


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
    fetch('http://localHost:3333/games')
    .then (response => response.json())
    .then (data => {
      setGames(data)
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

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'>
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-10 left-1/2 -translate-x-1/2 rounded-lg w-[520px] shadow-black/40 '>
              <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
                <form className='mt-8 flex flex-col gap-2  '>
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor="game" className='font-semibold'>Qual é o Game</label>
                    <Input id='game' placeholder='Selecione o Game que deseja jogar!!'  />
                  </div>

                  <div className='flex flex-col gap-2 '>
                    <label htmlFor="name">Seu nome ( ou nickname)</label>
                    <Input id='name' placeholder='Seu nome dentro no Game?' />
                  </div>

                  <div className=' grid grid-cols-2 gap-4 '>
                    <div className=' flex flex-col gap-2 '>
                      <label htmlFor="yearsPlaying">Joga há quantos anos ?</label>
                      <Input id='yearsPlaying' placeholder='Joga há quantos anos ?' />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="discord">Qual é o seu Discord?</label>
                      <Input id='discord' type='text' placeholder='Usuario do Discord' />
                  </div>
                  </div>


                  <div>
                    <div className='flex flex-col gap-2  '>
                      <label htmlFor="weekDays">Quando costuma Jogar??</label>
                    </div>
                    <div className='flex flex-col gap-2  '>
                      <label htmlFor="hourStart">Qual é o Horário do dia?</label>
                      </div>
                        <Input id='hourStart' type="time" placeholder='De' />
                        <Input id='hourEnd' type="time" placeholder='Até' />
                      <div>
                    </div>
                  </div>

                  <div className=' '>
                    <input type="checkbox"  />
                    Costumo  me conectar ao chat de voz
                  </div>

                  <footer>
                    <button>Cancelar</button>
                    <button type='submit' >
                      <GameController/>
                       Encontrar duo </button>
                  </footer>
                </form>
                
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>

      </Dialog.Root>


    </div>
    
  )
}

export default App
