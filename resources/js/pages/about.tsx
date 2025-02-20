import GuestLayout from "@/layouts/guest-layout";
import {Head} from "@inertiajs/react";

export default function About() {
    return <GuestLayout>
        <Head title="About Me" />
        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 lg:w-[1272px] mx-auto mt-6">
            <h1>Hello, from about page..</h1>
        </main>
    </GuestLayout>
}
