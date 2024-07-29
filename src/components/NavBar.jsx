import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import logo from '/img/logo_kim_duwet.png';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: "Beranda", path: "/" },
        { name: "Profil", path: "/profil" },
        { name: "Konten", path: "/konten" },
        { name: "Galeri", path: "/galeri" },
    ];

    const handleClick = () => {
        navigate('/');
    }

    return (
        <Navbar shouldHideOnScroll isBlurred={false} className='bg-duwet-main-bg' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className='sm:hidden'
                />

                <NavbarBrand className='flex flex-row align-middle' onClick={handleClick}>
                    <img src={logo} alt="Logo" className="w-20 h-w-20 mr-4" />
                    <p className="font-bold font-bebas-neue text-3xl text-inherit">PADUKUHAN DUWET</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name} isActive={location.pathname === item.path}
                        className='hover:bg-duwet-primary hover:text-white hover:scale-110 duration-300 p-1 rounded-md'
                    >
                        <Link to={item.path}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`} isActive={location.pathname === item.path}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            to={item.path}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    );
}
