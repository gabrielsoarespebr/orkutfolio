import style from './style.module.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const Certifications = () => {
    const data = useContext(UserContext);

    const [keyword, setKeyword] = useState("");
    const [certificationSelection, setCertificationSelection] = useState(data.certifications);
    const [certificationMaxAmount, setCertificationMaxAmount] = useState(5);
    const [certificationShown, setCertificationShown] = useState([]);

    const handleSearch = e => {
        setKeyword(e.target.value.toLowerCase());
    };

    useEffect(() => {
        const certificationByKeyword = data.certifications.filter(e => e.title.toLowerCase().includes(keyword));
        setCertificationSelection(certificationByKeyword);
    }, [keyword]);

    useEffect(() => {
        setCertificationShown(certificationSelection.slice(0, certificationMaxAmount));
    }, [certificationMaxAmount, certificationSelection]);

    return (
        <div className={`bg-white p-2 rounded shadow-sm my-2 ${style.certifications}`}>
            <p className='fw-semibold mb-1'>certificados <span className="textBlue">({certificationSelection.length})</span></p>
            <input className='col-12' type="text" placeholder='pesquisa do orkut' onChange={handleSearch} />
            <hr />
            <ul className='list-group list-group-flush'>
                {certificationShown.map((e, key) =>
                    <li className='list-group-item p-0' key={key}>
                        <p className='textBlue fw-semibold'>
                            {e.title}
                        </p>
                        <p className='textGray small'>
                            {e.organization}
                        </p>
                    </li>
                )}
            </ul>
            {certificationMaxAmount < certificationSelection.length && <div>
                <hr />
                <button className='textBlue fw-semibold' onClick={() => setCertificationMaxAmount(amount => amount + 5)}>ver mais</button>
            </div>}
        </div>
    )
}