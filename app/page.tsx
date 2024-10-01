import Image from "next/image"
import Navbar from "./components/Navbar/Navbar"
import Link from "next/link"

export default function Home() {

  const sections = [
    {title: "Manajemen Desa Terintegrasi", description: "Kelola berbagai aspek administrasi desa dalam satu platform terpadu. Mulai dari data kependudukan, pengelolaan keuangan, hingga layanan publik, semuanya dapat diakses dengan mudah dan efisien."},
    {title: "Pelayanan Publik yang Lebih Baik", description: "Tingkatkan kualitas pelayanan publik dengan sistem yang responsif dan user-friendly. Warga dapat mengajukan permohonan dan mendapatkan layanan dengan lebih cepat dan transparan."},
    {title: "Kemudahan Akses Informasi", description: "Berikan akses informasi yang mudah bagi warga desa. Informasi terkait program desa, pengumuman penting, dan layanan dapat diakses kapan saja melalui platform kami." },
    {title: "Peningkatan Partisipasi Warga", description:"Tingkatkan kualitas pelayanan publik dengan sistem yang responsif dan user-friendly. Warga dapat mengajukan permohonan dan mendapatkan layanan dengan lebih cepat dan transparan."},
    {title: "Dukungan Teknis dan Pelatihan", description: "Dapatkan dukungan teknis dan pelatihan yang berkelanjutan dari tim kami. Kami siap membantu Anda dalam mengoperasikan sistem dan memaksimalkan manfaatnya."},
    {title: "Keamanan Data yang Terjamin", description: "Lindungi data penting desa dan warga dengan teknologi keamanan terbaru. Sistem kami memastikan bahwa data Anda aman dari akses yang tidak sah dan potensi kebocoran."}
  ]

  return (
    <main className="min-h-screen flex-col justify-center">
      <Navbar />
            {/* mobile */}
            <div id='mobile' className="relative flex justify-center md:hidden">
        <Image src="/assets/ricefield-mobile.jpg" alt={'home cover'} width={1000} height={750} className='w-full ms-auto h-screen object-cover' />
        <div className="absolute mx-auto top-1/4 bg-white p-10 w-4/5 rounded-2xl">
          <h4 className='font-semibold text-3xl mb-5 text-gray-900'>Desa lebih mudah dikelola, warga lebih sejahtera</h4>
          <p className='mb-5 text-neutral-700'>Optimalkan pengelolaan desa Anda dengan solusi digital dari IdeaNet Smart Village. Kami menyediakan berbagai alat dan layanan untuk memudahkan manajemen desa sehingga warga dapat menikmati
          layanan yang lebih baik dan kehidupan yang lebih sejahtera.</p>
          <Link href={'/daftar'} className="btn btn-primary w-full">Coba Layanan</Link>
        </div>
      </div>

            {/* web */}
      <div className="sm:container sm:mb-10 sm:mx-auto">
        <section id="headers" className="hidden md:flex">
          <div className="flex justify-center w-4/5 mx-auto flex-wrap mt-10">
            <div className="flex flex-col w-1/2 mt-10">
              <h1 className='font-semibold text-3xl mb-5 text-gray-900'>
                Desa lebih mudah dikelola, warga lebih sejahtera
              </h1>
              <p className="mb-5 text-neutral-700">
                Optimalkan pengelolaan desa Anda dengan solusi digital dari IdeaNet Smart Village. Kami menyediakan berbagai alat dan layanan untuk memudahkan manajemen desa sehingga warga dapat menikmati
                 layanan yang lebih baik dan kehidupan yang lebih sejahtera.
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

      <section id="why choose" >
        <div className="sm:container sm:mx-auto">
          <div className="flex justify-center">
            <h1 className="text-neutral-700 font-bold text-2xl lg:w-1/2 text-center my-10">Alasan memilih IdeaNet Smart Village untuk desa anda</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center mb-20">
            {sections.map((section, index) => (
            <div key={index} className="flex flex-col w-4/5 md:w-1/2 lg:w-1/3 p-4">
              <div className="flex items-start">
                <Image src="/assets/icon_checklist.png" alt="icon" width={50} height={50} className="mr-4" />
                <div>
                  <h2 className="text-lg text-neutral-700 font-semibold mb-2.5">{section.title}</h2>
                  <p className="text-sm text-neutral-700">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section id="product">
          <h3>jdauijdiajd</h3>
      </section>

  </main>
  )
}
