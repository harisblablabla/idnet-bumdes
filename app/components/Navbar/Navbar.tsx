import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

function Navbar() {
    return (
        <div className="navbar bg-white ">
            {/* mobile */}
            <div className="navbar-start lg:hidden">
            <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] mt-3 p-5 shadow-[0_0_10px_3px_rgba(229,229,229)] bg-base-200 w-72 rounded-box text-neutral-700">
                        <li className=''><Link href={'/'}>Beranda</Link></li>
                        <li className=''><Link href={'#productSection'}>Layanan</Link></li>
                        <li className=''><Link href={'https://www.ideanet.net.id/en/about'}>Tentang Perusahaan</Link></li>
                        <li className=''><Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'}>Kontak Kami</Link></li>

                        <div className="divider w-full mb-2.5"></div>
                            <Link href={"https://daftar.ideanet.net.id/fab-retail-form"} className="text-primary font-semibold text-center">Daftar</Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-end lg:hidden">
                <Logo width={100} height={70} />
            </div>

            {/* web */}
            <div className="navbar-start hidden lg:flex pl-10">
                <Logo width={150} height={125}/>
                <ul className="menu menu-horizontal px-1 text-slate-600 font-medium z-50 ">
                    <li className=''><Link href={'/'}>Beranda</Link></li>
                    <li className=''><Link href={'#productSection'}>Layanan</Link></li>
                    <li className=''><Link href={'https://www.ideanet.net.id/en/about'}>Tentang Perusahaan</Link></li>
                    <li className=''><Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'}>Kontak Kami</Link></li>
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex pr-16">
                <Link href={"https://daftar.ideanet.net.id/fab-retail-form"} className="btn btn-primary btn-md">Daftar</Link>
            </div>
        </div>
    )
}

export default Navbar