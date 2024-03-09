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
        <div className="relative w-[90vw] md:w-[95vw] mt-20">
            <div className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-black dark:text-white mb-12">
                <h1>Featured Posts</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 overflow-hidden">
                <div className="group row-span-2 col-span-1 h-full w-full overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 right-0 row-span-2 col-span-1 w-[50%] h-full overflow-hidden bg-gradient-to-b from-transparent from-0% to-black/90 rounded-xl z-10" />
                    <Image
                        src={blogOne.image.filePath.replace('../public', '')}
                        placeholder="blur"
                        blurDataURL={blogOne.image.blurhashDataUrl}
                        alt={blogOne.title}
                        width={blogOne.image.width}
                        height={blogOne.image.height}
                        className="row-span-2 col-span-1 h-full w-full object-center object-cover rounded-xl group-hover:scale-105 hover:rounded-xl transition-all ease duration-300 -z-10"
                    />
                    <div className="absolute w-[50%] bottom-0 p-4 xs:p-6 sm:p-10 z-20">
                        <Tag
                            link={`/categories/${slug(blogOne.tags[0])}`}
                            name={blogOne.tags[0]}
                            className="px-6 text-xs text-white !border-white sm:text-sm py-1 sm:py-2"
                        />
                        <Link href={blogOne.url} className="mt-6">
                            <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-white mt-2 sm:mt-4">
                                {blogOne.title}
                            </h2>
                        </Link>
                    </div>
                </div>
                <div className="group row-span-1 col-span-1 h-full w-full overflow-hidden">
                    <div className="grid grid-cols-3 h-full w-full overflow-hidden">
                        <div className="col-span-1 h-full w-full overflow-hidden">
                            <Image
                                src={blogTwo.image.filePath.replace(
                                    '../public',
                                    ''
                                )}
                                placeholder="blur"
                                blurDataURL={blogTwo.image.blurhashDataUrl}
                                alt={blogTwo.title}
                                width={blogTwo.image.width}
                                height={blogTwo.image.height}
                                className="h-full w-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300 -z-10"
                            />
                        </div>
                        <div className="col-span-2 h-full w-full overflow-hidden">
                            <div className="w-full bottom-0 p-4 xs:p-6 sm:p-10 z-20">
                                <Tag
                                    link={`/categories/${slug(
                                        blogTwo.tags[0]
                                    )}`}
                                    name={blogTwo.tags[0]}
                                    className="uppercase text-foreground dark:text-foreground font-semibold text-xs sm:text-sm mt-3"
                                />
                                <Link href={blogTwo.url} className="mt-8">
                                    <h2 className="font-semibold capitalize  text-base sm:text-lg mt-3">
                                        {blogTwo.title}
                                    </h2>
                                </Link>
                                <span className="capitalize text-gray/30 dark:text-gray-300 font-semibold text-sm  sm:text-base mt-3">
                                    {format(
                                        new Date(blogTwo.publishedAt),
                                        'MMMM dd, yyyy'
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group row-span-1 col-span-1 h-full w-full overflow-hidden">
                    <div className="grid grid-cols-3 h-full w-full overflow-hidden">
                        <div className="col-span-1 h-full w-full overflow-hidden">
                            <Image
                                src={blogThree.image.filePath.replace(
                                    '../public',
                                    ''
                                )}
                                placeholder="blur"
                                blurDataURL={blogThree.image.blurhashDataUrl}
                                alt={blogThree.title}
                                width={blogThree.image.width}
                                height={blogThree.image.height}
                                className="h-full w-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300 -z-10"
                            />
                        </div>
                        <div className="col-span-2 h-full w-full overflow-hidden">
                            <div className="w-full bottom-0 p-4 xs:p-6 sm:p-10 z-20">
                                <Tag
                                    link={`/categories/${slug(
                                        blogThree.tags[0]
                                    )}`}
                                    name={blogThree.tags[0]}
                                    className="uppercase text-foreground dark:text-foreground font-semibold text-xs sm:text-sm mt-3"
                                />
                                <Link href={blogThree.url} className="mt-8">
                                    <h2 className="font-semibold capitalize text-base sm:text-lg mt-3">
                                        {blogThree.title}
                                    </h2>
                                </Link>
                                <span className="capitalize text-gray/30 dark:text-gray-300 font-semibold text-sm sm:text-base mt-3">
                                    {format(
                                        new Date(blogThree.publishedAt),
                                        'MMMM dd, yyyy'
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPosts;
