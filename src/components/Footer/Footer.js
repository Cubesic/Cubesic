'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { GithubIcon, LinkedinIcon, MediumIcon, TwitterIcon } from '../Icons';
import Link from 'next/link';
import siteMetadata from '@/utils/siteMetaData';
import Image from 'next/image';

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div
            className="rounded-2xl mt-16 sm:mt-24 m-2 sm:m-10 bg-indigo-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100
"
        >
            <footer className="mt-16 flex flex-col items-center justify-center text-black dark:text-white ">
                <h3 className="font-medium dark:font-bold text-center capitalize text-4xl lg:text-7xl px-4">
                    Follow Us
                </h3>

                <div className="flex items-center justify-center mt-8">
                    <a
                        href={siteMetadata.linkedin}
                        className="inline-block w-12 h-12 mr-4"
                        aria-label="Reach out to me via LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinIcon className="hover:scale-125 transition-all ease duration-100" />
                    </a>
                    <a
                        href={siteMetadata.twitter}
                        className="inline-block w-12 h-12 mr-4"
                        aria-label="Reach out to me via Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon className="hover:scale-125 transition-all ease duration-100" />
                    </a>
                    <a
                        href={siteMetadata.github}
                        className="inline-block w-12 h-12 mr-4 fill-light"
                        aria-label="Check my profile on Github"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon className="fill-black dark:fill-white  hover:scale-125 transition-all ease duration-100" />
                    </a>
                    <a
                        href={siteMetadata.medium}
                        className="inline-block w-12 h-12"
                        aria-label="Check my profile on Medium"
                        target="_blank"
                    >
                        <Image
                            src="/medium.png"
                            alt="Medium"
                            width={48}
                            height={48}
                            className="hover:scale-125 transition-all ease duration-100"
                        />
                    </a>
                </div>

                <div className="w-full mt-12 relative font-medium border-t border-solid border-white py-6 px-8 flex flex-col md:flex-row items-center justify-between">
                    <span className="text-center">
                        &copy;2023 Cubesic. All rights reserved.
                    </span>
                    <Link
                        href="/sitemap.xml"
                        className="text-center underline my-4 md:my-0"
                    >
                        sitemap.xml
                    </Link>
                    <div className="text-center">
                        Made with &hearts; by{' '}
                        <a
                            href="https://www.linkedin.com/in/harshalgunjal/"
                            className="underline"
                            target="_blank"
                        >
                            Harshal
                        </a>
                        <span> and </span>
                        <a
                            href="https://www.linkedin.com/in/vivek-gangaiah-66200a280/"
                            className="underline"
                            target="_blank"
                        >
                            Vivek
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
