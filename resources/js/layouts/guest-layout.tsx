import {ReactNode} from "react";
import gradientBg from '@/images/gradient-2.png';
import Header from "@/layouts/guest/header";
import Footer from "@/layouts/guest/footer";

export default function GuestLayout({children}: { children: ReactNode }) {
    return (
        <div className={`flex flex-col min-h-screen bg-fixed bg-center bg-no-repeat bg-cover p-6`}
             style={{backgroundImage: `url(${gradientBg})`}}>
            <Header />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}
