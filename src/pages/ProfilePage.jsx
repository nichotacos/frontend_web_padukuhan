import Footer from "../components/Footer";

export default function ProfilePage() {
    return (
        <>
            <div className="bg-duwet-main-bg flex flex-col justify-center items-center">
                <div className="w-3/4">
                    {/* About Section */}
                    <section id="about" className="py-12">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-start mb-8 font-intee">Tentang Padukuhan</h2>
                            <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                Padukuhan Duwet merupakan salah satu padukuhan yang terletak di Kalurahan Jerukwudel, Kapanewon Jerukwudel, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta.
                                Padukuhan Duwet ini sendiri terdiri dari atas 3 RT dan 1 RW. Padukuhan Duwet, yang terletak di Kalurahan Jerukwudel, Gunungkidul, adalah sebuah kawasan yang dikenal
                                dengan keindahan alamnya yang masih alami dan asri. Dikelilingi oleh perbukitan kapur khas Gunungkidul, padukuhan ini menawarkan pemandangan yang menakjubkan serta
                                udara yang sejuk dan segar. Masyarakat Duwet yang ramah dan gotong royong menciptakan suasana yang harmonis dan penuh kebersamaan. Selain itu, pertanian dan
                                peternakan menjadi mata pencaharian utama penduduknya, dengan hasil-hasil bumi seperti padi, jagung, dan ketela pohon yang melimpah. Padukuhan Duwet juga memiliki
                                potensi wisata yang menjanjikan, dengan beberapa titik destinasi alam yang menarik untuk dikunjungi.
                            </p>
                        </div>
                    </section>

                    {/* History Section */}
                    <section id="history" className="py-12">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-start mb-8 font-intee">Sejarah Padukuhan</h2>
                            <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                Padukuhan Duwet merupakan salah satu padukuhan yang terletak di Kalurahan Jerukwudel, Kapanewon Jerukwudel, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta.
                                Padukuhan Duwet ini sendiri terdiri dari atas 3 RT dan 1 RW. Padukuhan Duwet, yang terletak di Kalurahan Jerukwudel, Gunungkidul, adalah sebuah kawasan yang dikenal
                                dengan keindahan alamnya yang masih alami dan asri. Dikelilingi oleh perbukitan kapur khas Gunungkidul, padukuhan ini menawarkan pemandangan yang menakjubkan serta
                                udara yang sejuk dan segar. Masyarakat Duwet yang ramah dan gotong royong menciptakan suasana yang harmonis dan penuh kebersamaan. Selain itu, pertanian dan
                                peternakan menjadi mata pencaharian utama penduduknya, dengan hasil-hasil bumi seperti padi, jagung, dan ketela pohon yang melimpah. Padukuhan Duwet juga memiliki
                                potensi wisata yang menjanjikan, dengan beberapa titik destinasi alam yang menarik untuk dikunjungi.
                            </p>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section id="gallery" className="py-12">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <img src="/img/gallery1.jpg" alt="Gallery 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/img/gallery2.jpg" alt="Gallery 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/img/gallery3.jpg" alt="Gallery 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/img/gallery4.jpg" alt="Gallery 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/img/gallery5.jpg" alt="Gallery 5" className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/img/gallery6.jpg" alt="Gallery 6" className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/img/gallery7.jpg" alt="Gallery 7" className="w-full h-48 object-cover rounded-lg shadow-md" />
                                <img src="/img/gallery8.jpg" alt="Gallery 8" className="w-full h-48 object-cover rounded-lg shadow-md" />
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    {/* <section id="contact" className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                        <div className="text-center">
                            <p className="text-lg text-gray-700">For more information, please contact us at:</p>
                            <p className="text-lg text-gray-700">Email: <a href="mailto:info@desa-maju.com" className="text-blue-500 hover:underline">info@desa-maju.com</a></p>
                            <p className="text-lg text-gray-700">Phone: <a href="tel:+620123456789" className="text-blue-500 hover:underline">+62 012 345 6789</a></p>
                        </div>
                    </div>
                </section> */}

                </div>
            </div>
            <Footer />
        </>

    );
}
