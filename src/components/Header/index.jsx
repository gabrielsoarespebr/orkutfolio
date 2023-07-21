import style from './style.module.css'
import orkutfolioLogo from '../../assets/images/orkutfolioLogo.png'

export const Header = () => {
    return (
        <header className={style.header}>
            <figure className={`h-100 col-2 m-0 d-flex justify-content-center align-items-center ${style.logoBg}`}>
                <img className='h-75' src={orkutfolioLogo} alt="Orkutfolio Logo" />
            </figure>
            <a className={style.resumeLink} href="https://www.canva.com/design/DAFZSPNeEJU/FIA75alCKNoKiPFylWl97Q/edit?utm_content=DAFZSPNeEJU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank'>Currículo</a>
        </header>
    )
}