'use client';
import CourseHeader from '@/components/course-layout/course-header'
import { generateVideo } from '@/lib/generateVideo';
import { Copy } from 'lucide-react'
import React, { useState } from 'react'

function FinishPage({ course }) {
    const [isCopied, setIsCopied] = useState(false)

    const url = `http://localhost:3000/course/${course.id}`;
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
            <h1 className="text-3xl font-bold mb-4 text-center">Finish</h1>
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
