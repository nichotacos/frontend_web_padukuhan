import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white py-8 lg:py-12 bg-duwet-primary flex flex-row justify-center">
            <div className='w-3/4 flex flex-col lg:flex-row text-center lg:text-start items-center lg:justify-between'>
                <div>
                    <p className='font-inter'>Padukuhan Duwet</p>
                    <p className='text-xs font-inter'>Kalurahan Jerukwudel, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta</p>
                </div>
                <div className='my-auto text-center pt-4 lg:py-0'>
                    <a href="https://www.instagram.com/kim_juruwartaduwet/" target="_blank" rel="noopener noreferrer"><FaInstagram className='text-2xl' /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
