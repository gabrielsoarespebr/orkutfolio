import style from './style.module.css'
import buddyPokeDancing from '../../assets/gifs/buddyPokeDancing.gif'
import buddyPokeFlying from '../../assets/gifs/buddyPokeFlying.gif'
import buddyPokeHappy from '../../assets/gifs/buddyPokeHappy.gif'
import buddyPokeLoving from '../../assets/gifs/buddyPokeLoving.gif'
import buddyPokeShy from '../../assets/gifs/buddyPokeShy.gif'
import buddyPokeSports from '../../assets/gifs/buddyPokeSports.gif'
import buddyPokeStylish from '../../assets/gifs/buddyPokeStylish.gif'
import buddyPokeTired from '../../assets/gifs/buddyPokeTired.gif'
import buddyPokeWaving from '../../assets/gifs/buddyPokeWaving.gif'
import buddyPokeMusic from '../../assets/gifs/buddyPokeMusic.gif'
import { useState } from 'react'

export const BuddyPoke = () => {
    const [gif, setGif] = useState(buddyPokeWaving)

    const handleInputRadio = e => {
        setGif(e.target.id)
    }

    return (
        <div className='w-full heightFitContent bg-white p-2 rounded shadow-sm'>
            <p className='fw-semibold mb-1'>buddypoke</p>
            <div className='d-flex justify-content-center'>
                <img className={`w-50 ${style.buddypoke}`} src={gif} alt="Buddy Poke" />
                <div className={style.formWrapper}>
                    <p className='fw-semibold'>Como está o seu humor hoje?</p>
                    <form className={style.form}>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeHappy} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeHappy}>Feliz</label>
                        </div>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeLoving} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeLoving}>Apaixonado(a)</label>
                        </div>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeStylish} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeStylish}>Estiloso(a)</label>
                        </div>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeShy} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeShy}>Tímido(a)</label>
                        </div>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeDancing} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeDancing}>Dançante</label>
                        </div>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeMusic} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeMusic}>Artista</label>
                        </div>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeSports} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeSports}>Atleta</label>
                        </div>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeFlying} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeFlying}>Leve</label>
                        </div>
                        <div>
                            <input className='align-middle' type="radio" name="mood" id={buddyPokeTired} onChange={handleInputRadio} />
                            <label htmlFor={buddyPokeTired}>Cansado(a)</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}