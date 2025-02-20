import {Link} from '@inertiajs/react';

// Components
import MobileHeader from "@/layouts/guest/mobile-header";
import AppLogo from "@/components/app-logo";
import NavBarItem from "@/components/navBarItem";
import ThemeToggle from "@/components/themeToggle";

// import icons
import {TbSmartHome, TbUserSquare, TbStack2, TbTools, TbBallpen, TbMessage, TbArrowElbowRight} from "react-icons/tb";
import { FaBars } from "react-icons/fa";


export default function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 lg:w-[1272px] mx-auto">
                <div className="">
                    <div
                        className="flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-black dark:shadow-dark w-auto">

                        <Link href="/"
                              className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white">
                            <AppLogo/>
                        </Link>


                        <ul className="hidden flex-1 flex-wrap items-center justify-center lg:flex">
                            <NavBarItem Icon={TbSmartHome} label='Home' href='/'/>
                            <NavBarItem Icon={TbUserSquare} label='About' href='/about'/>
                            <NavBarItem Icon={TbStack2} label='Services' href='/services'/>
                            <NavBarItem Icon={TbTools} label='Works' href='/works'/>
                            <NavBarItem Icon={TbBallpen} label='Blogs' href='/blogs'/>
                            <NavBarItem Icon={TbMessage} label='Contact' href='/contact'/>
                        </ul>

                        {/*Header buttons*/}
                        <div className="hidden items-center gap-4 lg:flex">
                            {/*Theme appearance toggler*/}
                            <ThemeToggle />

                            <Link href="/contact"
                               className="inline-flex items-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white">
                                <span>Let's Talk</span>
                                <TbArrowElbowRight />
                            </Link>
                        </div>

                        {/* Navigation toggler */}
                        <button type="button" className="text-dark transition dark:text-white/70 lg:hidden"
                                data-hs-overlay="#mobile-menu" aria-controls="mobile-menu"
                                aria-label="Toggle navigation">
                            <span className="sr-only">Toggle Navigation</span>
                            <FaBars />
                        </button>
                    </div>
                </div>
            </header>
            <MobileHeader/>
        </>
    )
}
