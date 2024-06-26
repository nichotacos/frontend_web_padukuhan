import logo from '../assets/gkk.png';

export default function NavBar() {
    return (
        <nav className="bg-transparent py-8 fixed w-full">
            <div className="mx-auto flex justify-between items-center">
                <div className='flex gap-4 ml-24'>
                    <img src={logo} alt="logo" className="w-16 h-16 my-auto" />
                    <h1 className="text-white font-medium text-5xl my-auto font-bebas-neue tracking-normal">PADUKUHAN DUWET</h1>
                </div>
                <ul className="flex space-x-6 mr-24">
                    <li className='transition ease-in-out p-2 rounded hover:bg-duwet-primary hover:scale-110 duration-300'>
                        <a href="#" className="text-white text-lg font-inter">Beranda</a>
                    </li>
                    <li className='transition ease-in-out p-2 rounded hover:bg-duwet-primary hover:scale-110 duration-300'>
                        <a href="#" className="text-white text-lg font-inter">About</a>
                    </li>
                    <li className='transition ease-in-out p-2 rounded hover:bg-duwet-primary hover:scale-110 duration-300'>
                        <a href="#" className="text-white text-lg font-inter">Contact</a>
                    </li>
                    <li className='transition ease-in-out p-2 rounded hover:bg-duwet-primary hover:scale-110 duration-300'>
                        <a href="#" className="text-white text-lg font-inter">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
