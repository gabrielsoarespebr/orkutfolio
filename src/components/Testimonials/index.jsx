import style from './style.module.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const Testimonials = () => {
    const data = useContext(UserContext)
    return (
        <div className={`heightFitContent bg-white p-2 rounded shadow-sm ${style.testimonials}`}>
            <p className='fw-semibold mb-1'>depoimentos <span className="textBlue">({data.testimonials.length})</span></p>
            <ul className='list-unstyled'>
                {data.testimonials.map((e, key) =>
                    <li className='list-group-item p-2 d-flex justify-content-around gap-2' key={key}>
                        <img src={e.author.photo} alt="Testimonial author" />
                        <div className='col-9'>
                            <a href={e.author.url} className='textBlue fw-semibold text-decoration-none'>{e.author.name}</a>
                            <p>
                                {e.text}
                            </p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}