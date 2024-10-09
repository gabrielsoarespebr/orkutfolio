import style from './style.module.css'
import orkutfolioLogo from '../../assets/images/orkutfolioLogo.png'

export const Header = () => {
    return (
        <header className={style.header}>
            <figure className={`h-100 m-0 d-flex justify-content-center align-items-center ${style.logoBg}`}>
                <img className='h-75' src={orkutfolioLogo} alt="Orkutfolio Logo" />
            </figure>
            <a className={style.resumeLink} href="https://docs.google.com/document/d/1MfI3mMJ-WUjpBZitpwEDCHpN_nNUmILUaery8JAs9Nc/edit?usp=sharing" target='_blank'>Currículo</a>
        </header>
    )
}