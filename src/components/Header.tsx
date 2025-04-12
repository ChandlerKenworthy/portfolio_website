'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlex = IBM_Plex_Mono({
    weight: '400',
    subsets: ['latin'],
});

export default function Header() {
    const pathname = usePathname();
    return (
        <header className='w-full'>
            <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
                <div className={`text-2xl font-bold ${ibmPlex.className}`}>
                    <Link href="/">Chandler Kenworthy</Link>
                </div>
                <ul className="flex items-center space-x-6">
                    <li>
                        <Link className={pathname === '/about' ? 'text-blue-600 font-semibold' : 'text-white'} href="/about">About</Link>
                    </li>
                    <li>
                        <Link className={pathname === '/projects' ? 'text-blue-600 font-semibold' : 'text-white'} href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className={pathname === '/contact' ? 'text-blue-600 font-semibold' : 'text-white'} href="/contact">Contact</Link>
                    </li>
                    <li className="border-solid border-white rounded-lg border-1 px-4 py-2 hover:bg-gray-700">
                        <Link className={pathname === '/resume' ? 'text-blue-600 font-semibold' : 'text-white'} href="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}