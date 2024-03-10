import { sortBlogs } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];

    return (
        <div className="w-full flex items-center justify-center mt-[35px]">
            <article className="group w-full flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] xl:w-[95vw] overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-black/90 rounded-3xl z-0" />
                <Image
                    src={blog.image.filePath.replace('../public', '')}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    fill
                    className="w-full h-full object-center group-hover:scale-105 object-cover rounded-3xl -z-10 transition-all duration-300 ease"
                    sizes="100vw"
                    priority={true}
                />

                <div className="w-full lg:w-4/6 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-white">
                    <Tag
                        link={`/categories/${slug(blog.tags[0])}`}
                        name={blog.tags[0]}
                        className="text-white !border-white"
                    />
                    <Link href={blog.url} className="mt-6">
                        <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
                            
                                {blog.title}
                    
                        </h1>
                    </Link>
                    <p className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
                        {blog.description}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default HomeCoverSection;
