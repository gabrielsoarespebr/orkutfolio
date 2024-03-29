import style from './style.module.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import profilePhoto from '../../assets/images/profilePhoto.png'
import scrap from '../../assets/gifs/scrap.gif'

export const Scrap = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os campos.");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            linkedin: linkedin
        }

        emailjs.send('service_fdwglsc', 'template_lslk75m', templateParams, '1i9P6H-iDRK8ct1HX')
            .then((response) => {
                console.log(response.text, response.status);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
            });

            alert("Mensagem enviada.");
    };

    return (

        <div className={`col-10 heightFitContent bg-white p-2 rounded shadow-sm ${style.scrap}`}>
            <p className='fw-semibold mb-1'>recados <span className="textBlue">(1)</span></p>

            <form className={style.form} onSubmit={sendEmail}>
                <div>
                    <input
                        className="input"
                        type="text"
                        placeholder="nome (obrigatório)"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        className="input"
                        type="email"
                        placeholder="e-mail (obrigatório)"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <input
                        className="input"
                        type="text"
                        placeholder="linkedin (opcional)"
                        onChange={(e) => setLinkedin(e.target.value)}
                        value={linkedin}
                    />
                </div>

                <textarea
                    className="textarea w-100"
                    placeholder="mensagem (obrigatório)"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    style={{ resize: 'none' }}
                />

                <input className="button" type="submit" value="Enviar" />
            </form>

            <ul className={`list-unstyled ${style.scraps}`}>
                <li className='list-group-item p-2 d-flex justify-content-around gap-2'>
                    <img className={style.authorPhoto} src={profilePhoto} alt="Message author" />
                    <div className='col-9'>
                        <p className='textBlue fw-semibold'>Gabriel Soares</p>
                        <img className={style.myScrap} src={scrap} alt="Scrap" />
                    </div>
                </li>
            </ul>

        </div>
    );
}