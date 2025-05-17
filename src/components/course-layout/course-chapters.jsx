"use client";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { callAi } from "@/lib/gemini";
import { useUser } from "@clerk/nextjs";
import { generateVideo } from "@/lib/generateVideo";
import { createChapterList, updateCourseLayout } from "@/lib/drizzleActions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { main } from "@/lib/geminiAi";
export default function CourseChapters({ course, generateButton }) {
    const { user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    function sanitizeJsonString(str) {
        return str
            .replace(/^```(?:json)?/, '')   // Remove starting ``` or ```json
            .replace(/```$/, '')            // Remove ending ```
            .trim()
            .replace(/\\(?!["\\/bfnrtu])/g, '\\\\'); // Escape invalid backslashes
    }

    const generateChapterContent = async () => {
        try {
            setLoading(true);

            for (const chapter of course.chapters) {
                //             const PROMPT = `
                // You are a JSON generator bot.

                // Explain the concept in detail for:
                // - Topic: ${course.topic}
                // - Chapter: ${chapter.topic}

                // Return a *single JSON object* with exactly these fields and please don't add any blankspace in the keys of object (" description" not allowed blank spaces important!!!!!!!). ):
                // {
                //   "title": "string",
                //   "description": "string (plain text, no formatting or markdown)",
                //   "CODEEXAMPLE": "string (valid HTML code as plain text, escape double quotes like \\\" and all new lines with \\n. If it's not programming, return N/A)"
                // }

                // Respond ONLY with this valid JSON object — no commentary or code block markdown..
                // `;
                const PROMPT = `
    You are an AI course generator.
    I will give you:
    - COURSENAME: ${course.topic}
    - CHAPTERTOPIC: ${chapter.topic}

    Return a JSON object with exactly two fields:
    {
      "title": string (the chapter topic),
      "description": string (a detailed long theory about the chapter topic)
      "CODEEXAMPLE": string (an HTML-formatted code example relevant to the chapter topic, or an empty string if none)
    }

    Return the JSON ONLY without any additional text.
  `;

                // const response = await callAi(PROMPT);
                // const res = response.text;

                console.log(PROMPT);
                const response = await main(PROMPT);
                const res = response.text;
                console.log(res);
                const raw = response.text;
                const cleaned = sanitizeJsonString(raw);
                const parsed = JSON.parse(cleaned);
                console.log(parsed);
                console.log("parseddddddd", parsed);


                // const formattedObject = res
                //     .replace(/^```[\s]*json\s*/i, '')
                //     .replace(/```$/, '')
                //     .trim();

                // let parsedObject;

                // try {
                //     parsedObject = JSON.parse(formattedObject);
                // } catch (parseError) {
                //     // Attempt to sanitize CODEEXAMPLE before parsing
                //     const safeFormatted = formattedObject.replace(
                //         /"CODEEXAMPLE":\s?"([\s\S]*?)"/,
                //         (_, code) => {
                //             const escaped = code
                //                 .replace(/\\/g, "\\\\")
                //                 .replace(/"/g, '\\"')
                //                 .replace(/\n/g, "\\n");
                //             return `"CODEEXAMPLE": "${escaped}"`;
                //         }
                //     );

                //     parsedObject = JSON.parse(safeFormatted);
                //     console.log(parsedObject);
                // }

                const youtubeVideoId = await generateVideo(`${course.topic}:${chapter.topic}`);

                const dbResponse = await createChapterList({
                    iid: course.id,
                    videoId: youtubeVideoId,
                    chapterContent: parsed, // parsedObject
                    userId: user.id,
                    category: course.category,
                    duration: chapter.duration,
                    topic: course.topic
                });

                await updateCourseLayout(course.id, {
                    courseId: dbResponse.courseId,
                    userId: user.id
                });
            }

            router.push(`/create-course/${course.id}/finish`);
        } catch (error) {
            console.error("Error generating chapter content:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Chapters</h2>
            {course.chapters.map((chapter, idx) => (
                <Card key={chapter.topic} className="sm:mb-4 mb-3">
                    <div className="p-5 flex items-start">
                        <div className="bg-[#0080FF] text-white rounded-full flex items-center justify-center h-10 w-10 flex-shrink-0 mr-4">
                            <span>{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-semibold flex items-center">
                                    {chapter.topic}
                                    <svg
                                        className="h-4 w-4 ml-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </h3>
                                {chapter.completed && (
                                    <div className="rounded-full bg-green-100 p-1">
                                        <svg
                                            className="h-5 w-5 text-green-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <p className="text-gray-600 mt-1">{chapter.description}</p>
                            <div className="mt-2 text-sm text-gray-500 flex items-center">
                                <svg
                                    className="h-4 w-4 mr-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {chapter.duration}min
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
            {generateButton === true && <div className="sm:mt-8 mt-4 flex justify-center">
                <Button
                    className="bg-[#0080FF] hover:bg-[#0080FF]/90 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2"
                    onClick={generateChapterContent}
                    disabled={loading}
                >
                    {loading && (
                        <Loader2 className="h-5 w-5 animate-spin" />
                    )}
                    {loading ? "Generating..." : "Generate Course Content"}
                </Button>
            </div>}
        </div>
    );
}
