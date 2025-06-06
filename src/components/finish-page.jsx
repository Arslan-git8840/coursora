'use client';
import CourseHeader from '@/components/course-layout/course-header'
import { generateVideo } from '@/lib/generateVideo';
import { Copy, ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

function FinishPage({ course }) {
    const [isCopied, setIsCopied] = useState(false)

    const url = `https://coursora.vercel.app/course/${course.id}`;
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    // const handle = async () => {
    //     const res = await generateVideo("what is nextjs caching  :Introduction to Next.js Caching ")
    //     console.log(res);
    // }

    return (
        <div className="max-w-6xl w-full h-screen mx-auto px-4 py-8 flex flex-col items-center justify-center">
            {/* Back to Home Button */}
            <div className="w-full mb-6 self-start">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <ArrowLeftIcon size={18} />
                    Back to Home
                </Link>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center">Course Finished 🎉</h1>
            <CourseHeader course={course} />
            <section className="mt-2 w-full">
                <h4 className="text-lg font-medium mb-2">Course URL:</h4>
                <div className='border p-4 rounded-lg shadow-md flex justify-between items-center'>
                    <p className="text-sm text-gray-700">{url}</p>
                    <button
                        onClick={copyToClipboard}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Copy URL"
                    >
                        <Copy size={20} />
                    </button>
                </div>
                {isCopied && (
                    <p className="mt-2 text-green-500 text-sm">Copied to clipboard!</p>
                )}
            </section>
            {/* <button onClick={handle}>okkkk</button> */}
        </div>
    )
}

export default FinishPage
