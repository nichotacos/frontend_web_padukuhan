


export default function Location() {
    return (
        <>
            <div className="bg-lime-100 h-screen flex flex-col justify-center items-center gap-8">
                <div className="bg-duwet-primary flex flex-row justify-center py-4 w-3/4 rounded-2xl mb-8">
                    <h1 className="font-poppins text-4xl font-bold text-center text-white">Lokasi Padukuhan</h1>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7898.975999665725!2d110.76579709038559!3d-8.153487667507768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc6fa64fc7633%3A0xd0b1871ebf5d0981!2sDuwet%2C%20Jerukwudel%2C%20Kec.%20Girisubo%2C%20Kabupaten%20Gunung%20Kidul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1721629958014!5m2!1sid!2sid"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )
}