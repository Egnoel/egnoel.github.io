import Image from 'next/image'
import React from 'react'
import profile from "../assets/profile.jpg";
import { File, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

const SideNav = () => {
    const links = [
        {
            icon: <Mail />,
            text: 'E-mail',
            href:'mailto:egnoel@hotmail.com'
        },
        {
            icon: <File />,
            text: 'CV',
            href:''
        },
        {
            icon: <FaGithub />,
            text: 'Github',
            href:'https://github.com/egnoel'
        },
        {
            icon: <FaLinkedin />,
            text: 'Linkedin',
            href:'https://www.linkedin.com/in/egnoel-neto/'
        },
        {
            icon: <FaSquareXTwitter />,
            text: 'Twitter',
            href:'https://x.com/egnoelgenio'
        },
        {
            icon: <SiFrontendmentor />,
            text: 'FrontendMentor',
            href:'https://www.frontendmentor.io/profile/Egnoel/solutions'
        }
    ]
  return (
    <div className='flex flex-col w-40 gap-7'>
        <div className='flex flex-col gap-2'>
            <Image src={profile} alt='profile' width={80} height={50} className='object-cover rounded-full' />
            <span>Egnoel Neto</span>
        </div>
        <div className='flex flex-col gap-5'>
            {links.map((link, index) => (
                <a key={index} href={link.href} target='_blank' rel='noreferrer' className='flex flex-row items-center gap-2'>
                    {link.icon}
                    <span className='hover:underline'>{link.text}</span>
                </a>
            ))}
        </div>
    </div>
  )
}

export default SideNav