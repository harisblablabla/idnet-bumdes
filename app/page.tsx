import Navbar from "./components/Navbar/Navbar"

export default function Home() {

  return (
    <main className="min-h-screen flex-col justify-center">
      <Navbar />
      <div className="sm:container sm:mb-20 sm:mx-auto">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className='font-semibold text-4xl mb-5 text-gray-900'>Desa lebih mudah dikelola, warga lebih sejahtera</h1>
            <p className="mb-5 text-neutral-700">Optimalkan pengelolaan desa Anda dengan solusi digital dari IdeaNet Smart Village. Kami menyediakan berbagai alat dan layanan untuk memudahkan manajemen desa. sehingga warga dapat menikmati layanan yang lebih baik dan kehidupan yang lebih sejahtera.</p>
          </div>
          <div className="flex-row">
            <h3>ahmad bai</h3>
          </div>
        </div>
      </div>
      <h3>huadhuahdu</h3>
    </main>
  )
}
