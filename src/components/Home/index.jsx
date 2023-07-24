import style from './style.module.css'
import { DescriptionContainer } from '../DescriptionContainer'
import { Projects } from '../Projects'
import { Skills } from '../Skills'
import { Certifications } from '../Certifications'
import { Testimonials } from '../Testimonials'
import { BuddyPoke } from '../BuddyPoke'

export const Home = () => {
    return (
        <div className={`col-10 d-flex gap-1 ${style.home}`}>
            <div className='col-8 d-flex flex-column gap-1'>
                <DescriptionContainer />
                <Testimonials />
                <BuddyPoke />
            </div>
            <div className='col-4 heightFitContent'>
                <Projects />
                <Skills />
                <Certifications />
            </div>
        </div>
    )
}