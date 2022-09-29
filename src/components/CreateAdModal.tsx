// foi feita a instalaçao do phosphor-react e a importaçao do icone abaixo

import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import { Input } from '../components/Form/input'
import * as Dialog from '@radix-ui/react-dialog'


export function CreateAdModal() {
    return (
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


                  <div className='flex gap-6'>
                    <div className='flex flex-col gap-1  '>
                      <label htmlFor="weekDays">Quando costuma Jogar??</label>
                      <div className='grid grid-cols-4 gap-2'>
                        <button 
                          title='Domingo'
                          className='w-8 h-8 rounded bg-zinc-900 '
                        >
                          D
                          </button>
                        <button 
                          title='Segunda'
                          className='w-8 h-8 rounded bg-zinc-900 '
                        >
                          S
                          </button>
                        <button 
                          title='Terça'  
                          className='w-8 h-8 rounded bg-zinc-900 '
                        >
                          T
                          </button>
                        <button 
                          title='Quarta' 
                          className='w-8 h-8 rounded bg-zinc-900 '
                        >
                          Q
                          </button>
                        <button 
                          title='Quinta' 
                          className='w-8 h-8 rounded bg-zinc-900 '
                        >
                          Q
                          </button>
                        <button 
                          title='Sexta' 

                          className='w-8 h-8 rounded bg-zinc-900 '
                         >
                          S</button>
                        <button 
                          title='Sábado' 
                          className='w-8 h-8 rounded bg-zinc-900 '
                        >
                          S
                          </button>
                      </div>

                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor="hourStart">Qual é o Horário do dia?</label>
                      <div className='grid grid-cols-2 gap-2' >
                        <Input id='hourStart' type="time" placeholder='De' />
                        <Input id='hourEnd' type="time" placeholder='Até' />
                      </div>
                    </div>
                  </div>

                  <div className=' mt-1 flex gap-2 text-sm '>
                    <input type="checkbox"  />
                    Costumo  me conectar ao chat de voz
                  </div>

                  <footer className='mt-4 flex justify-end gap-3'>
                    <Dialog.Close
                    type='button'
                    className='bg-zinc-500 px-5 h-10 rounded-md font-semibold hover:bg-zinc-600'>
                      Cancelar
                    </Dialog.Close>
                    <button
                      className='bg-violet-500 px-5 w-50 h-10 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                      type='submit' >
                      <GameController size={24} />
                       Encontrar duo </button>
                  </footer>
                </form>
                
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
        
    );
}