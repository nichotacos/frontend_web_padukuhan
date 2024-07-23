import HeroPage from './HeroPage';
import AboutDuwet from './AboutDuwet';
import Sambutan from './Sambutan';
import ContentPage from './ContentPage';
import Location from './Location';
import Footer from '../components/Footer';
import VisitedPlaces from './VisitedPlaces';
import OrganisationStructure from './OrganisationStructure';

export default function Homepage() {
    return (
        <>
            <div style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/gk_landscape.jpg)",
                backgroundSize: "cover",
                height: "100vh",
            }}>
                <div className='h-full flex flex-col justify-center ml-12 md:ml-32 lg:ml-48'>
                    <HeroPage />
                </div>
                <AboutDuwet />
                <Sambutan />
                <ContentPage />
                <VisitedPlaces />
                <Location />
                <OrganisationStructure />
                <Footer />
            </div>
        </>
    )
}