import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCardLayout = ({ blog }) => {
    return (
        <div className="group flex flex-col items-center text-black dark:text-white">
            <Link href={blog.url} className="h-full rounded-xl overflow-hidden">
                <Image
                    src={blog.image.filePath.replace('../public', '')}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
                    sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                />
            </Link>

            <div className="flex flex-col w-full mt-4">
                <span className="uppercase text-blue-900 dark:text-purple-600 font-bold text-xs sm:text-sm">
                    {blog.tags[0]}
                </span>
                <Link href={blog.url} className="inline-block my-1">
                    <h2 className="font-semibold capitalize  text-base sm:text-lg">
                        <span className="bg-gradient-to-r from-black/50 to-black/50  dark:from-white/50 dark:to-white/50 bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 p-1">
                            {blog.title}
                        </span>
                    </h2>
                </Link>

                <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
                    {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
                </span>
            </div>
        </div>
    );
};

export default BlogCardLayout;
