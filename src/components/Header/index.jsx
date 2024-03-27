import style from './style.module.css'
import orkutfolioLogo from '../../assets/images/orkutfolioLogo.png'

export const Header = () => {
    return (
        <header className={style.header}>
            <figure className={`h-100 m-0 d-flex justify-content-center align-items-center ${style.logoBg}`}>
                <img className='h-75' src={orkutfolioLogo} alt="Orkutfolio Logo" />
            </figure>
            <a className={style.resumeLink} href="https://www.canva.com/design/DAFxj7Qqcac/HNvBXYD63XDFy31F1hgWCw/edit?utm_content=DAFxj7Qqcac&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank'>Currículo</a>
        </header>
    )
}