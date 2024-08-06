import Footer from "../components/Footer";
import "./LocationStyle.css";

export default function ProfilePage() {
    return (
        <>
            <div className="bg-duwet-main-bg flex flex-col justify-center items-center">
                <div className="w-3/4">
                    {/* About Section */}
                    <section id="about" className="py-8">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-start mb-8 font-inter">Tentang <span className="text-duwet-primary">Padukuhan</span></h2>
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
                    <section id="history" className="py-8">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-start mb-8 font-inter">Sejarah <span className="text-duwet-primary">Padukuhan</span></h2>

                            <p className="text-duwet-dark-text text-lg loading-relaxed text-justify">Sejarah Padukuhan Duwet di Kalurahan Jerukwudel, Gunungkidul, mencerminkan perjalanan panjang sebuah komunitas pedesaan yang penuh dengan nilai-nilai budaya dan tradisi. Awalnya, padukuhan ini didirikan oleh sekelompok kecil petani yang membuka lahan pertanian di daerah berbukit kapur yang menantang. Seiring berjalannya waktu, jumlah penduduk semakin bertambah, dan masyarakat mulai membangun infrastruktur dasar seperti jalan setapak, sumur, dan tempat ibadah.</p>
                            <br />
                            <p className="text-duwet-dark-text text-lg loading-relaxed text-justify">Pada masa penjajahan, warga Padukuhan Duwet turut berperan dalam perjuangan melawan penjajah dengan cara yang unik, seperti menyembunyikan pejuang dan menyediakan logistik. Tradisi gotong royong dan semangat kebersamaan yang kuat menjadi ciri khas dari padukuhan ini, diwariskan dari generasi ke generasi.</p>
                            <br />
                            <p className="text-duwet-dark-text text-lg loading-relaxed text-justify">Setelah kemerdekaan, padukuhan ini terus berkembang dengan adanya program pemerintah yang mendukung pembangunan desa. Pembangunan sekolah, jalan yang lebih baik, dan fasilitas umum lainnya turut meningkatkan kualitas hidup masyarakat. Meskipun sudah mengalami modernisasi, Padukuhan Duwet tetap mempertahankan kearifan lokal dan budaya tradisional yang menjadi identitas mereka hingga kini.</p>

                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="video-profile" className="py-12">
                        <div className="container mx-auto px-4 flex flex-col">
                            <h2 className="text-3xl font-bold text-start mb-8">Video Profil <span className="text-duwet-primary">Padukuhan</span></h2>
                            <div className="map-responsive w-3/4 pb-26-25 self-center">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/wIdwS3n3460?si=KNBBzbvDxeDY5Pdy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </>

    );
}
