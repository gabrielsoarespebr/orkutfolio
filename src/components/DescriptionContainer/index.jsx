import style from './style.module.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const DescriptionContainer = () => {
    const data = useContext(UserContext)
    return (
        <div className={`heightFitContent bg-white p-2 rounded shadow-sm ${style.descriptionContainer}`}>
            <h1 className='fs-4'>{data.username}</h1>
            <hr />
            <ul className='list-unstyled textGray d-flex gap-3 textfs80perc'>
                <li className='list-group-item'>
                    <p>
                        confiável
                    </p>
                    <div>
                        {
                            [1, 2, 3].map(e => <img key={e} src="https://img.icons8.com/3d-fluency/94/slightly-smiling-face-icon.png" alt="slightly-smiling-face-icon" />)
                        }
                    </div>
                </li>
                <li className='list-group-item'>
                    <p>
                        legal
                    </p>
                    <div>
                        {
                            [1, 2, 3].map(e => <img key={e} src="https://img.icons8.com/3d-fluency/94/dice.png" alt="dice" />)
                        }
                    </div>
                </li>
                <li className='list-group-item'>
                    <p>
                        sexy
                    </p>
                    <div>
                        {
                            [1, 2, 3].map(e => <img key={e} src="https://img.icons8.com/3d-fluency/94/like--v1.png" alt="like--v1" />)
                        }
                    </div>
                </li>
            </ul>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td className='textGray col-4 text-end pe-2'>quem sou eu:</td>
                        <td>{data.description}</td>
                    </tr>
                    <tr>
                        <td className='textGray col-4 text-end pe-2'>formação acadêmica:</td>
                        <td>{data.educationalBackground.map(course =>
                            <p>{course.organization} - {course.title} ({course.dateStartEnd.join(' - ')})</p>
                        )}</td>
                    </tr>
                    <tr>
                        <td className='textGray col-4 text-end pe-2'>experiência profissional:</td>
                        <td>{data.workExperience.map(job =>
                            <p>{job.organization} - {job.title} ({job.dateStartEnd[1] ? job.dateStartEnd.join(' - ') : job.dateStartEnd[0] + ' - atualmente'}) </p>
                        )}</td>
                    </tr>
                    <tr>
                        <td className='textGray col-4 text-end pe-2'>línguas:</td>
                        <td>{data.communication.languages.join(', ')}</td>
                    </tr>
                    <tr>
                        <td className='textGray col-4 text-end pe-2'>redes sociais:</td>
                        <td>
                            <a href={data.socialMedia.linkedin} target='_blank'>Linkedin</a>, <a href={data.socialMedia.github} target='_blank'>Github</a>
                        </td>
                    </tr>
                    <tr>
                        <td className='textGray col-4 text-end pe-2'>programação competitiva:</td>
                        <td>
                            <a href={data.competitiveProgramming.codeforces} target='_blank'>CodeForces</a>, <a href={data.competitiveProgramming.hackerrank} target='_blank'>HackerRank</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}