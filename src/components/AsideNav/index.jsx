import style from './style.module.css'
import profilePhoto from '../../assets/images/profilePhoto.png'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const AsideNav = () => {
    const data = useContext(UserContext)
    return (
        <aside className={`col-2 heightFitContent bg-white p-2 rounded shadow-sm ${style.aside}`}>
            <img src={profilePhoto} alt="Profile photo" />
            <div className='mt-1'>
                <p className='textBlue fw-semibold'>{data.username}</p>
                <p className='textGray'>{data.currentPlace}</p>
            </div>
            <hr />
            <a href="https://www.linkedin.com/in/gabrielsoarespebr/" target='_blank'>
                <img src="https://img.icons8.com/fluency/48/add-user-male.png" alt="add-user-male" />
                <p>
                    Adicionar aos amigos
                </p>
            </a>
            <hr />
            <nav className={style.navbar}>
                <ul className='list-group list-unstyled'>
                    <li className='list-group-item p-0 d-flex align-items-center'>
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/guest-male.png" alt="guest-male" />
                        <p>
                            Perfil
                        </p>
                    </li>
                    <li className='list-group-item p-0 d-flex align-items-center'>
                        <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail" />
                        <p>
                            Recados
                        </p>
                    </li>
                    <li className='list-group-item p-0 d-flex align-items-center'>
                        <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/camera.png" alt="camera" />
                        <p>
                            Fotos
                        </p>
                    </li>
                    <li className='list-group-item p-0 d-flex align-items-center'>
                        <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/documentary.png" alt="documentary" />
                        <p>
                            Vídeos
                        </p>
                    </li>
                    <li className='list-group-item p-0 d-flex align-items-center'>
                        <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/christmas-star.png" alt="christmas-star" />
                        <p>
                            Depoimentos
                        </p>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}