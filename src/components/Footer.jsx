import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white py-8 lg:py-12 bg-duwet-primary flex flex-row justify-center">
            <div className='w-3/4 flex flex-col lg:flex-row text-center lg:text-start items-center lg:justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='font-inter text-lg font-semibold'>Padukuhan Duwet</p>
                    <p className='text-xs font-inter'>Kalurahan Jerukwudel, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta</p>
                    <p className='text-xs font-inter'>Copyright &copy; 2024 Kelompok 42 KKN 85 UAJY, All Rights Reserved</p>
                </div>
                <div className='my-auto text-center pt-4 lg:py-0'>
                    <a href="https://www.instagram.com/kim_juruwartaduwet/" target="_blank" rel="noopener noreferrer"><FaInstagram className='text-2xl' /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
