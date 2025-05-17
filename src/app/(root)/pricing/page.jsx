'use client';
import Pricing from '@/components/pricing-page';
import { main } from '@/lib/geminiAi';
import React from 'react';

function Page() {

    //     const handleChapterContent = async () => {
    //         const prompt = `
    //     You are an AI course generator.
    //     I will give you:
    //     - COURSENAME: About Medievel age
    //     - CHAPTERTOPIC: Geography and history.

    //     Return a JSON object with exactly two fields:
    //     {
    //       "title": string (the chapter topic),
    //       "description": string (a detailed long theory about the chapter topic)
    //       "codeExample": string (an HTML-formatted code example relevant to the chapter topic, or an empty string if none)
    //     }

    //     Return the JSON ONLY without any additional text.
    //   `;
    //         const res = await main(prompt);

    //         try {
    //             const jsonStart = res.text.indexOf('{');
    //             const jsonEnd = res.text.lastIndexOf('}');
    //             if (jsonStart === -1 || jsonEnd === -1) {
    //                 throw new Error('JSON not found in AI response');
    //             }

    //             const jsonString = res.text.substring(jsonStart, jsonEnd + 1);
    //             const parsed = JSON.parse(jsonString);

    //             // Helper to clean description text from markdown-like chars
    //             function cleanDescription(text) {
    //                 return text
    //                     .replace(/[*\-•]/g, '')   // Remove asterisks, hyphens, bullet points
    //                     .replace(/\n\s*\n/g, '\n') // Replace multiple blank lines with a single newline
    //                     .trim();
    //             }

    //             const cleaned = {};
    //             for (const [key, value] of Object.entries(parsed)) {
    //                 const trimmedKey = key.trim();
    //                 if (typeof value === 'string') {
    //                     cleaned[trimmedKey] = trimmedKey === 'description' ? cleanDescription(value.trim()) : value.trim();
    //                 } else {
    //                     cleaned[trimmedKey] = value;
    //                 }
    //             }

    //             console.log(cleaned);
    //         } catch (error) {
    //             console.error('Failed to parse JSON:', error, 'Response:', res.text);
    //         }
    //     };


    //     const handleCourseLayout = async () => {
    //         const prompt = `
    //     You are an expert AI course generator. Based on the following inputs:

    //     Category: History
    //     Topic: History of great wall of china
    //     Course Description: I want to know about the history of great wall of china.
    //     Difficulty Level: Beginner
    //     Total Course Duration: 180 minutes
    //     Includes Video Lessons: Yes
    //     Number of Chapters: 3

    //     Return a course layout strictly in this format:

    //     {
    //       topicDescription: "string",
    //       chapters: [
    //         {
    //           topic: "string",
    //           description: "string",
    //           duration: number
    //         }
    //       ]
    //     }

    //     Important instructions:
    //     - Do not use backticks.
    //     - Do not use the word “json”.
    //     - Do not include markdown formatting.
    //     - Return only the pure JSON object above — nothing else.
    //     - Do not use quotes around object keys.
    //         `;

    //         const res = await main(prompt);

    //         console.log(res.text);
    //     };

    return (
        <div>
            <Pricing />
            {/* <button onClick={handleChapterContent}>Generate Chapter Explanation</button>
            <button onClick={handleCourseLayout} style={{ marginLeft: 10 }}>
                Generate Course Layout
            </button> */}
        </div>
    );
}

export default Page;
