// ./src/components/Comments.js

'use client';

import { Bounded } from './Bounded';
import { toast } from 'sonner';
import { Heading } from './Heading';
import { useState } from 'react';

export function Comments({ id, comments }) {
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await fetch(`/api/comments/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post_id: id,
                nickname,
                email,
                comment,
            }),
        }).then((data) => {
            if (data.error) {
                console.log(data.error);
                toast('❌ Something went wrong!');
            } else {
                setLoading(false);
                setComment('');
                setEmail('');
                setNickname('');
                toast('✅ Added successfully!');
            }
        });
    };

    return (
        <Bounded>
            {comments.length > 0 && (
                <>
                    <Heading as="h2" size="3xl" className="mt-12 mb-6">
                        What people are saying
                    </Heading>
                    {comments.map((comment, index) => (
                        <div className="p-6 border mt-4 rounded-xl hover:scale-105 transition duration-150" key={index}>
                            <header className="text-sm text-white/50">
                                {`Posted by ${comment.nickname} on ${new Date(
                                    comment.created_at
                                ).toLocaleTimeString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}`}
                            </header>
                            <p className="mt-4">{comment.payload}</p>
                        </div>
                    ))}
                </>
            )}
            <div className='mt-12'>
                <Heading as="h2" size="3xl">
                    Share your thoughts
                </Heading>
                <form onSubmit={onSubmit}>
                    <div>
                        <label
                            htmlFor="comment"
                            className="mb-2 mt-6 text-lg block"
                        >
                            Comment
                        </label>
                        <textarea
                            id="comment"
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Your comment"
                            className="w-full bg-transparent border dark:border-white/50  border-black/50 p-4 rounded-xl"
                            value={comment}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 mt-6 text-lg block"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Your email"
                            className="w-full bg-transparent border dark:border-white/50  border-black/50 p-4 rounded-xl"
                            value={email}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="nickname"
                            className="mb-2 mt-6 text-lg block"
                        >
                            Nickname
                        </label>
                        <input
                            id="nickname"
                            onChange={(e) => setNickname(e.target.value)}
                            type="text"
                            placeholder="Your nickname"
                            className="w-full bg-transparent border dark:border-white/50  border-black/50 p-4 rounded-xl"
                            value={nickname}
                        />
                    </div>
                    <button
                        className="p-3 dark:border-white dark:text-white border border-1 border-black mt-8 rounded-xl font-semibold hover:scale-105"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Send comment'}
                    </button>
                </form>
            </div>
        </Bounded>
    );
}
