import style from './style.module.css'
import orkutfolioLogo from '../../assets/images/orkutfolioLogo.png'

export const Header = () => {
    return (
        <header className={style.header}>
            <figure className={`h-100 col-2 m-0 ms-2 d-flex justify-content-center align-items-center ${style.logoBg}`}>
                <img className='h-75' src={orkutfolioLogo} alt="Orkutfolio Logo" />
            </figure>
        </header>
    )
}