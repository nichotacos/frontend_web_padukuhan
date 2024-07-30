import HeroPage from './HeroPage';
import AboutDuwet from './AboutDuwet';
import Sambutan from './Sambutan';
import ContentPage from './ContentPage';
import Location from './Location';
import Footer from '../components/Footer';
import VisitedPlaces from './VisitedPlaces';
import OrganisationStructure from './OrganisationStructure';
import VideoProfile from './VideoProfile';
import QRCode from './QRCode';

export default function Homepage() {
    return (
        <>
            <div style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/gk_landscape.jpg)",
                backgroundSize: "cover",
                height: "100vh",
            }}>
                <div className='h-full flex flex-col justify-center text-center md:ml-32 md:text-start lg:ml-48 lg:text-start'>
                    <HeroPage />
                </div>
                <AboutDuwet />
                <Sambutan />
                <ContentPage />
                <VisitedPlaces />
                <Location />
                <OrganisationStructure />
                <VideoProfile />
                <QRCode />
                <Footer />
            </div>
        </>
    )
}