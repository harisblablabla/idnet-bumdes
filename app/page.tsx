import Image from "next/image"
import Navbar from "./components/Navbar/Navbar"
import Link from "next/link"

export default function Home() {

  return (
    <main className="min-h-screen flex-col justify-center">
      <Navbar />
      <div className="sm:container sm:mb-20 sm:mx-auto">
        <section id="headers" className="">
          <div className="flex justify-center w-4/5 mx-auto flex-wrap mt-10">
            <div className="flex flex-col w-1/2 mt-10">
              <h1 className='font-semibold text-3xl mb-5 text-gray-900'>
                Desa lebih mudah dikelola, warga lebih sejahtera
              </h1>
              <p className="mb-5 text-neutral-700">
                Optimalkan pengelolaan desa Anda dengan solusi digital dari IdeaNet Smart Village. Kami menyediakan berbagai alat dan layanan untuk memudahkan manajemen desa sehingga warga dapat menikmati layanan yang lebih baik dan kehidupan yang lebih sejahtera.
              </p>
              <Link href={"/daftar"} className="btn btn-outline btn-secondary btn-md mb-20 btn-wide">Coba Layanan</Link>
              <div className="badge badge-primary w-28 h-4 bg-primary border-none mb-5"></div>
              <h6 className="text-neutral-700 font-bold">Mitra IdeaNet Smart Village</h6>
              <div className="flex flex-row">
              <Image src={'/assets/logotitle1.png'} alt={'logo title 1'} width={100} height={100} className='object-cover mb-5' />
              <Image src={'/assets/logotitle2.png'} alt={'logo title 2'} width={100} height={100} className='object-cover mb-5' />
              <Image src={'/assets/logotitle3.png'} alt={'logo title 3'} width={100} height={100} className='object-cover mb-5' />
              </div>
            </div>
            <div className="flex w-1/2 items-center">
              <Image src={'/assets/ricefield.png'} alt={'cover'} width={1000} height={1000} className='object-cover mx-auto mb-5' />
            </div>
          </div>
        </section>
      </div>

      <h3>huadhuahdu</h3>
    </main>
  )
}
