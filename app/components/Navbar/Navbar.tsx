import Link from 'next/link'
import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
    return (
        <div className="navbar bg-white ">
            {/* mobile */}
            <div className="navbar-start lg:hidden"></div>

            {/* web */}
            <div className="navbar-start hidden lg:flex pl-10">
                <ul className="menu menu-horizontal px-1 text-slate-600 font-medium z-50 ">
                    <li className=''><Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'}>Beranda</Link></li>
                    <li className=''><Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'}>Layanan</Link></li>
                    <li className=''><Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'}>Tentang Perusahaan</Link></li>
                    <li className=''><Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'}>Kontak Kami</Link></li>
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex pr-16">
                <ul className="menu menu-horizontal text-slate-600 font-medium z-50">
                    <li className='relative'>
                        <button>id</button>
                        {/* <ul className="absolute top-12 right-2 menu w-56 bg-base-200 rounded-box shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <LanguageSwitcher />
                            </ul> */}
                    </li>
                </ul>
                <Link href={"/daftar"} className="btn btn-primary btn-md">Login</Link>
            </div>
        </div>
    )
}

export default Navbar