import { sortBlogs } from '@/utils';
import React from 'react';
import Image from 'next/image';
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';
import Link from 'next/link';
import { format } from 'date-fns';

const FeaturedPosts = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blogOne = sortedBlogs[1];
    const blogTwo = sortedBlogs[2];
    const blogThree = sortedBlogs[3];
    return (
        <div className="relative w-[90vw] md:w-[70vw] mt-16">
            <div className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-black dark:text-white mb-8">
                <h1>Featured Posts</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-12 gap-4 overflow-hidden">
                <div className="row-span-12 col-span-1 h-full w-[50%] overflow-hidden">
                    <div className="absolute h-full w-[50%] bg-gradient-to-b from-transparent from-0% to-black/90 rounded-xl z-0" />
                    <Image
                        src={blogOne.image.filePath.replace('../public', '')}
                        placeholder="blur"
                        blurDataURL={blogOne.image.blurhashDataUrl}
                        alt={blogOne.title}
                        width={blogOne.image.width}
                        height={blogOne.image.height}
                        className="object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300 -z-10"
                    />
                    <div className="absolute w-[50%] bottom-0 p-4 xs:p-6 sm:p-10 z-20">
                        <Tag
                            link={`/categories/${slug(blogOne.tags[0])}`}
                            name={blogOne.tags[0]}
                            className="px-6 text-xs  sm:text-sm py-1 sm:py-2 !border "
                        />
                        <Link href={blogOne.url} className="mt-6">
                            <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
                                    {blogOne.title}
                            </h2>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturedPosts;
