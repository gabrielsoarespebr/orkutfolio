import style from './style.module.css'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import porto1 from '../../assets/images/porto1.png'
import porto2 from '../../assets/images/porto2.png'
import dojo1 from '../../assets/images/dojo1.png'
import dojo2 from '../../assets/images/dojo2.png'
import maratonaSBC1 from '../../assets/images/maratonaSBC1.png'
import maratonaSBC2 from '../../assets/images/maratonaSBC2.jpg'

export const Photos = () => {
    return (
        <div className={`col-10 heightFitContent bg-white p-2 rounded shadow-sm ${style.photosContainer}`}>
            <p className='fw-semibold mb-1'>fotos <span className="textBlue">(6)</span></p>
            <div className='d-flex justify-content-center'>
                <MDBCarousel className={`w-75 ${style.carousel}`} showIndicators showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src={porto1}
                        alt='Porto Digital 1'
                    >
                        <h5>Residência do Porto Digital</h5>
                        <p>Fase Kick Off ocorrida em junho de 2022, no qual a proposta do IFPE ficou no TOP 10 das melhores ideias para efetivar os Objetivos de Desenvolvimento Sustentável da Agenda 2030 da ONU.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src={porto2}
                        alt='Porto Digital 2'
                    >
                        <h5>Residência do Porto Digital</h5>
                        <p>Fase Kick Off ocorrida em junho de 2022, no qual a proposta do IFPE ficou no TOP 10 das melhores ideias para efetivar os Objetivos de Desenvolvimento Sustentável da Agenda 2030 da ONU.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={dojo1}
                        alt='Coding Dojo 1'
                    >
                        <h5>Coding Dojo da Liferay</h5>
                        <p>Evento para resolução de desafios de programação de modo conjunto pela comunidade tech de Recife, em fevereiro de 2022.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src={dojo2}
                        alt='Coding Dojo 2'
                    >
                        <h5>Coding Dojo da Liferay</h5>
                        <p>Evento para resolução de desafios de programação de modo conjunto pela comunidade tech de Recife, em fevereiro de 2022.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src={maratonaSBC1}
                        alt='Maratona SBC 1'
                    >
                        <h5>Maratona SBC 2023 - Fase 1</h5>
                        <p>Etapa regional da competição de programação organizada pela Sociedade Brasileira de Computação, em setembro de 2023.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src={maratonaSBC2}
                        alt='Maratona SBC 2'
                    >
                        <h5>Maratona SBC 2023 - Fase 1</h5>
                        <p>Etapa regional da competição de programação organizada pela Sociedade Brasileira de Computação, em setembro de 2023.</p>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
        </div>
    )
}