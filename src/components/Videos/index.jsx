import style from './style.module.css'

export const Videos = () => {
    return (
        <div className='col-10 heightFitContent bg-white p-2 rounded shadow-sm'>
            <p className='fw-semibold mb-1'>vídeos <span className="textBlue">(1)</span></p>
            <div className='d-flex justify-content-center'>
                <iframe width="745" height="420" src="https://www.youtube.com/embed/XKocdSR0-9c?start=7546" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}