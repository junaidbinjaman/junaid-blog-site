import junaidProfilePic from "@/images/junaidbinjaman-profile-pic.jpg";
import {FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa6";
import Intro from "@/components/intro";
import * as React from "react";

export default function IntroSection() {
    return (
        <div className="lg:sticky lg:top-22">
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
        </div>
    )
}
