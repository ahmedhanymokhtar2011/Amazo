import React from 'react'
import footerLogo from '../../assets/images/img/Logo.png'
import Banner from '../../assets/images/img/footer-pattern.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "About",
        link: "/#about",
    },
    {
        id: 3,
        title: "Contact",
        link: "/#contact",
    },
    {
        id: 4,
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div
            style={BannerImg}
            className='text-white mb-20'>
            <div className='container'>
                <div
                    data-aos="zoom-in"
                    className='grid grid-cols-1 md:grid-cols-3 pb-44 pt-5 '>
                    {/*company details */}
                    <div className='py-8 px-4 text-center md:text-left'>

                        <img src={footerLogo} alt=""
                            className='max-w-[160px] mx-auto md:mx-0' />


                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Necessitatibus labore nemo vitae atque sint voluptatem.</p>
                    </div>
                    {/*footer links */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        {/*important links */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1
                                    className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'
                                >
                                    Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => (
                                            <li
                                                key={data.id}
                                            >
                                                <Link to={data.link}

                                                    className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                                >
                                                    <span>{data.title}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1
                                    className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'
                                >
                                    Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => (
                                            <li
                                                key={data.id}
                                            >
                                                <Link to={data.link}
                                                    className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                            >
                                                    <span>{data.title}</span>
                                                </Link>

                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/*social links */}
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                {/*instgram */}
                                <a href="#">
                                    <FaInstagram className='text-3xl' />
                                </a>
                                {/*facebook */}
                                <a href="#">
                                    <FaFacebookF className='text-3xl' />
                                </a>
                                {/*linkedin */}
                                <a href="#">
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-center gap-3'>
                                    <CiLocationArrow1 />
                                    <p>Egypt, Cairo government</p>
                                </div>
                                <div className='flex items-center gap-3 mt-3'>
                                    <FaMobileAlt />
                                    <p>+123 456 7899</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
