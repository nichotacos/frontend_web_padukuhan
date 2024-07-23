import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white py-12 bg-duwet-primary flex flex-row justify-center">
            <div className='w-3/4 flex flex-row justify-between'>
                <div>
                    <p className='font-inter'>Padukuhan Duwet</p>
                    <p className='text-xs font-inter'>Kalurahan Jerukwudel, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta</p>
                </div>
                <div className='my-auto'>
                    <a href="https://www.instagram.com/kim_juruwartaduwet/"><FaInstagram className='text-2xl' /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
