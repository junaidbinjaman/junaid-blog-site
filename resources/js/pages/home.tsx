import {Head, Link} from '@inertiajs/react';
import {useState} from "react";

// Components
import GuestLayout from "@/layouts/guest-layout";
import Intro from "@/components/intro";
import WorkExperiment from "@/components/work-experiment";
import Expertise from "@/components/expertise";
import ProjectBox, {type ProjectBoxProps} from "@/components/project-box";
import ServiceBox from "@/components/serviceBox";

// Icons
import {FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaArrowRightLong} from "react-icons/fa6";
import {IoIosDesktop} from "react-icons/io";
import {CiMobile1} from "react-icons/ci";
import {IoNewspaperOutline} from "react-icons/io5";
import {BsPlugin} from "react-icons/bs";

// Images
import junaidProfilePic from '../images/junaidbinjaman-profile-pic.jpg';
import ecommerceCare from '../images/ecommerce_care_logo.webp';
import rcnLogo from '../images/rcn-logo.jpg';
import goodLifeLogo from '../images/good-life-logo.jpg';
import drDaleWellNess from '../images/dr-dale-wellness-logo.jpg';
import northAmericanDiagnostic from '../images/north-american-diagnostic.jpg';
import allNextVerLogo from '../images/all-next-ver-logo.jpg';
import reactLogo from '../images/react-experties-logo.jpg';
import wordpressLogo from '../images/wordpress-experties-logo.jpg';
import laravelLogo from '../images/laravel-experties-logo.jpg';
import figmaLogo from '../images/figma.svg';
import phpLogo from '../images/php-experties-logo.jpg';
import javascriptLogo from '../images/javascript-experties-logo.jpg';
import project1 from '../images/project-1.png';
import project2 from '../images/project-2.png';

export default function Home() {
    const [projects, setProjects] = useState<ProjectBoxProps[]>([
        {label: "Product Design", link: "https://allnextver.allnextver.store/", thumbnail: project1},
        {label: "Product Design", link: "https://allnextver.allnextver.store/", thumbnail: project2},
    ])

    return (

        <GuestLayout>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net"/>
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet"/>
            </Head>
            <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 lg:w-[1272px] mx-auto mt-6">
                {/* Intro */}
                <Intro
                    profile_pic_url={junaidProfilePic}
                    name="Junaid Bin Jaman"
                    description={
                        <>
                            <p>
                                Seven years of experience engineering dynamic front-ends with <strong>React/React
                                Native</strong> powerful back-ends with <strong>Laravel</strong>.
                            </p>
                            <br/>
                            <p>
                                Expert in extending WordPress functionality through custom <strong>plugin
                                development.</strong>
                            </p>
                        </>
                    }
                    phoneNumber="+8801705294083"
                    email="junaid@allnextver.com"
                    socialMedia={[
                        {
                            icon: <FaLinkedinIn size={24}/>,
                            profileUrl: 'https://www.linkedin.com/in/junaidbinjaman/'
                        },
                        {icon: <FaGithub size={24}/>, profileUrl: 'https://github.com/junaidbinjaman'},
                        {
                            icon: <FaInstagram size={24}/>,
                            profileUrl: 'https://www.instagram.com/junaidbinjaman/'
                        },
                        {
                            icon: <FaFacebookF size={24}/>,
                            profileUrl: 'https://www.facebook.com/junaidbinjaman/'
                        },
                    ]}
                />

                <div className="grid grid-cols-1 gap-4 lg:gap-6">
                    {/* Work Experience */}
                    <WorkExperiment
                        section_title="Work Experience"
                        experienceData={[
                            {
                                years: "2018 - 2020",
                                company: "eCommerce.care",
                                role: "Junior Wordpress Developer",
                                logo: ecommerceCare
                            },
                            {
                                years: "2020 - 2022",
                                company: "NAD",
                                role: "Frontend Developer",
                                logo: northAmericanDiagnostic
                            },
                            {
                                years: "2021 - 2022",
                                company: "Good Life Medicine",
                                role: "Frontend Developer",
                                logo: goodLifeLogo
                            },
                            {
                                years: "2022 - 2024",
                                company: "Reality Capture NetWork",
                                role: "Fullstack Developer",
                                logo: rcnLogo
                            },
                            {
                                years: "2024 - 2025",
                                company: "Dr Dale Wellness",
                                role: "Fullstack WP Dev",
                                logo: drDaleWellNess
                            },
                            {
                                years: "2024 - Pres",
                                company: "All Next Ver",
                                role: "Web & Mobile App Dev",
                                logo: allNextVerLogo
                            }
                        ]}
                    />

                    {/* Expertise */}
                    <Expertise
                        section_title="My Expert Area"
                        expertiseData={[
                            {title: "React Native", logo: reactLogo},
                            {title: "WordPress", logo: wordpressLogo},
                            {title: "Laravel", logo: laravelLogo},
                            {title: "Figma", logo: figmaLogo},
                            {title: "PHP", logo: phpLogo},
                            {title: "JavaScript", logo: javascriptLogo},
                        ]}
                    />
                </div>

                {/* Projects */}
                <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
                        <Link href="/works"
                              className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                            <span>All Projects</span>
                            <FaArrowRightLong/>
                        </Link>
                    </div>

                    <div className="mt-6 space-y-6">
                        {
                            projects.map(project => (
                                <ProjectBox
                                    thumbnail={project.thumbnail}
                                    label={project.label}
                                    link={project.link}
                                />
                            ))
                        }
                    </div>
                </div>

                {/* Services */}
                <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-2xl font-semibold dark:text-light">Services I Offered</h3>
                        <a href="/services"
                           className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                            <span>See All Services</span>
                            <FaArrowRightLong/>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                        <ServiceBox icon={<IoIosDesktop color='#4670ff' size={74}/>} label="Web App"/>
                        <ServiceBox icon={<CiMobile1 color='#4670ff' size={74}/>} label="Mobile App"/>
                        <ServiceBox icon={<BsPlugin color='#4670ff' size={74}/>} label="Custom WP Plugin"/>
                        <ServiceBox icon={<IoNewspaperOutline color='#4670ff' size={74}/>} label="Simple Web Page"/>
                    </div>
                </div>

                {/* Contact */}
                <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
                    {/*@ts-ignore*/}
                    <marquee behavior="scroll" direction="left"
                             className="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
                        Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
                        Crafting Digital Experiences 🎨
                        {/*@ts-ignore*/}
                    </marquee>

                    <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
                        Let's👋 <br/>
                        Work Together
                    </h2>

                    <Link href="/contact"
                          className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                        <span>Let's Talk</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor"
                             stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="h-5 w-5">
                            <path d="M17.5 11.667v-5h-5"/>
                            <path d="m17.5 6.667-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </Link>
                </div>
            </main>
        </GuestLayout>
    );
}
