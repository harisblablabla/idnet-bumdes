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
                <Link href={"/daftar"} className="btn btn-primary btn-md">Login</Link>
            </div>
        </div>
    )
}

export default Navbar