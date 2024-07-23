import { Link } from 'react-router-dom';
import logo from '/img/logo_kim_duwet.png';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function NavBar() {
    return (
        <Navbar shouldHideOnScroll isBlurred={false} className='bg-duwet-main-bg' >
            <NavbarBrand className='flex flex-row align-middle'>
                <img src={logo} alt="Logo" className="w-20 h-w-20 mr-4" />
                <p className="font-bold font-bebas-neue text-3xl text-inherit">PADUKUHUAN DUWET</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem isActive>
                    <Link to='/' >
                        Beranda
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='foreground' href="#" aria-current="page">
                        Profil
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Apalah
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
