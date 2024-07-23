import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {

    const Icons = [
        { icon: <FaFacebookF />, link: "" },
        { icon: <FaYoutube />, link: "" },
        { icon: <FaInstagram />, link: "" },
    ];

    const Navigation = [
        { name: 'Home', link: '/' },
        { name: 'Buy Now', link: '/' },
        { name: 'Profile', link: '/profile' }
    ];

    const Contacts = [
        { name: 'Address: Jl. Babarsari No.43, Kec. Depok, Kabupaten Sleman, DI Yogyakarta 55281' },
        { name: 'Email: atmaBakery@gmail.com' },
        { name: 'Telephone (Contact Number): (0274) 487711' }
    ];

    return (
        // bg-[#f7f4e1] text-dark-brown pt-7 #bae8d4
        <footer className="text-white pt-7 bg-duwet-primary">
            {/* <div className="flex flex-row gap-2 py-4 ps-7">
                <img src="./src/assets/img/atmaBakery.jpg" className="h-12 sm:h-16 lg:h-20 w-auto" />
                <span className="font-gatefold text-lg sm:text-xl lg:text-2xl my-auto">Atma Bakery</span>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4">

                <ul className="col-span-1">
                    <div className="flex flex-row gap-2 py-4 ps-7">
                        <img src="/img/logo_kim_duwet.png" className="h-20 sm:h-16 lg:h-32 w-auto" />
                    </div>
                </ul>

                {/* Navigasi */}
                <ul className="col-span-1">
                    <h1 className="mb-1 font-gatefold text-2xl">Navigation</h1>
                    {Navigation.map((menu) => (
                        <li key={menu.name}>
                            <a className="text-dark-brown hover:text-[#F0A646] font-gatefold
                            duration-300 text-md cursor-pointer leading-6" href={menu.link}>
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Kata-kata Indah */}
                <ul className="col-span-1 pr-11">
                    <h1 className="mb-1 font-gatefold text-2xl">Have a question?</h1>
                    <li>
                        <p className="text-dark-brown hover:text-[#F0A646] duration-300 font-gatefold
                        text-sm cursor-pointer leading-6">
                            We're consistently available to offer assistance whenever you need it.
                        </p>
                        <p className="text-dark-brown hover:text-[#F0A646] duration-300 font-gatefold
                        text-sm cursor-pointer leading-6">
                            Our Consumer Care Team operates from Monday to Friday, between 9am and 5pm EST
                        </p>
                    </li>
                </ul>

                {/* Contacts */}
                <ul className="col-span-1">
                    <h1 className="mb-1 font-gatefold text-2xl">Contact Us</h1>
                    {Contacts.map((menu) => (
                        <li key={menu.name}>
                            <p className="text-dark-brown hover:text-[#F0A646] font-gatefold
                            duration-300 text-sm cursor-pointer leading-6">
                                {menu.name}
                            </p>
                        </li>
                    ))}
                </ul>


            </div>

            {/* ini icon2 */}
            <div className="flex justify-between items-center text-center pt-5 text-[#f7f4e1] text-sm pb-8">
                <span className="ps-7 text-dark-brown font-gatefold">© Copyright AB 2024</span>
                <div className="pr-5">
                    {window.location.hash === '' && (
                        Icons.map((socialIcon, index) => (
                            <a
                                key={index}
                                href={socialIcon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 cursor-pointer inline-flex items-center rounded-full bg-dark-brown mx-1.5 text-xl 
                                hover:text-[#F0A646] duration-300"
                            >
                                {socialIcon.icon}
                            </a>
                        ))
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
