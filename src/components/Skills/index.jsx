import style from './style.module.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const Skills = () => {
    const data = useContext(UserContext)
    return (
        <div className={`bg-white p-2 rounded shadow-sm mt-2 ${style.skills}`}>
            <p className='fw-semibold mb-1'>tecnologias <span className="textBlue">({data.skills.length})</span></p>
            <div className='d-flex justify-content-between flex-wrap gap-1'>
                {data.skills.map((e, key) =>
                    <a className='text-decoration-none' key={key} href={e.website} target='_blank'>
                        <figure className='h-100 m-0 d-flex flex-column justify-content-around align-items-center'>
                            <img className='p-1' src={e.logo} alt="Logo" />
                            <figcaption className='textBlue fw-semibold text-center'>{e.title}</figcaption>
                        </figure>
                    </a>
                )}
            </div>
        </div>
    )
}