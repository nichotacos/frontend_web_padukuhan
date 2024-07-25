import { useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router';
import gsap from 'gsap';
import Footer from './components/Footer';

// Ensure correct import
// import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

export default function App() {
  // const lenisRef = useRef();

  // useEffect(() => {
  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time * 1000);
  //   }

  //   gsap.ticker.add(update);

  //   return () => {
  //     gsap.ticker.remove(update);
  //   };
  // }, []); // Ensure the dependency array is correct

  return (
    <>
      {/* Ensure ReactLenis is correctly used */}
      {/* <ReactLenis root> */}
      <NavBar />
      <Outlet />
      <Footer />
      {/* </ReactLenis> */}
    </>
  );
}
