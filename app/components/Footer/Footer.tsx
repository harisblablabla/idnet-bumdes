import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section id='footer' className='bg-gradient-to-r from-secondary to-primary flex flex-col'>
            <div className='flex flex-col lg:flex-row p-10'>
                <div id='leftside' className="lg:pl-10 w-full lg:w-1/4 order-last lg:order-first mt-2">
                    <p className='text-sm text-white leading-relaxed'>PT. Infrastruktur Digital Indonesia (IdeaNet)</p>
                    <p className='text-sm text-white leading-relaxed'>The Convergence Indonesia, 22th floor</p>
                    <p className='text-sm text-white leading-relaxed'>Rasuna Epicentrum District, Jl. HR. Rasuna Said, Jakarta 12940</p>
                    <p className='text-sm text-white leading-relaxed'>Tel. (021) 150188, WA. (+62) 811-1995-8899</p>
                    <p className='text-sm text-white leading-relaxed'>helpdesk@ideanet.net.id</p>
                </div>
                <div id='rightside' className="w-full md:w-full lg:w-3/4 justify-center mb-5 grid grid-cols-2 md:grid-cols-5 md:pl-10">

                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Beranda</h5>
                        <Link href='/' className='text-sm text-white leading-loose block'>Beranda</Link>
                    </div>

                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Layanan</h5>
                        <button disabled={true} className='text-sm text-gray-400 leading-loose block'>IdeaNet Smart Village</button>
                    </div>

                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Perusahaan</h5>
                        <Link href='https://www.ideanet.net.id/en/about' className='text-sm text-white leading-loose block'>Tentang Perusahaan</Link>
                    </div>


                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Ikuti Kita</h5>
                        <Link href='https://daftar.ideanet.net.id/helpdesk/ticket-form' className='text-sm text-white leading-loose block'>Kontak</Link>
                        <Link href='https://www.instagram.com/my.ideanet/' className='text-sm text-white leading-loose'><Image src={'/assets/logo_instagram.png'} alt={'logo instagram'} className='inline-block mr-2' width={20} height={20} />Instagram</Link>
                    </div>
                </div>
            </div>
            <h6 className='mx-auto w-4/5 text-left sm:text-center mb-10 text-white text-sm'>Copyright ©2024 All rights reserved. PT. Infrastruktur Digital Indonesia (IdeaNet)</h6>
        </section>
    )
}

export default Footer