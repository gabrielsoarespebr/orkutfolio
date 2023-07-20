import { DescriptionContainer } from '../DescriptionContainer'
import { Projects } from '../Projects'
import { Skills } from '../Skills'
import { Certifications } from '../Certifications'
import { Testimonials } from '../Testimonials'

export const Home = () => {
    return (
        <div className='col-10 d-flex gap-1'>
            <div className='col-8 d-flex flex-column gap-1'>
                <DescriptionContainer />
                <Testimonials />
            </div>
            <div className='col-4 heightFitContent'>
                <Projects />
                <Skills />
                <Certifications />
            </div>
        </div>
    )
}