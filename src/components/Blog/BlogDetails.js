import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { slug } from 'github-slugger';
import Tag from '../Elements/Tag';

const BlogDetails = ({ blog, slug: blogSlug }) => {
    return (
        <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
            <time className="m-3">
                {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
            </time>
            <div className="m-3">{blog.readingTime.text}</div>
            <Tag
                link={`/categories/${slug(blog.tags[0])}`}
                name={blog.tags[0]}
                className="dark:text-white dark:border-white text-black border-black"
            />
        </div>
    );
};

export default BlogDetails;
