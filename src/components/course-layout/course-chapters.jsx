"use client";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { callAi } from "@/lib/gemini";
import { useUser } from "@clerk/nextjs";
import { generateVideo } from "@/lib/generateVideo";
import { createChapterList, updateCourseLayout } from "@/lib/drizzleActions";

export default function CourseChapters({ course, generateButton }) {
    const { user } = useUser();

    const generateChapterContent = async () => {
        const chapters = course.chapters;
        chapters.forEach(async (chapter, idx) => {
            const PROMPT = `
You are a JSON generator bot.

Explain the concept in detail for:
- Topic: ${course.topic}
- Chapter: ${chapter.topic}

Return a *single JSON object* with exactly these fields:
{
  "title": "string",
  "description": "string (plain text, no formatting or markdown)",
  "CODEEXAMPLE": "string (valid HTML code as plain text, escape double quotes)"
}

Respond ONLY with this valid JSON object — no commentary or code block markdown.
`;

            // console.log('PROMPT', PROMPT);
            if (PROMPT) {
                try {
                    // generate chapter content 
                    const response = await callAi(PROMPT);
                    // console.log(response.text);
                    const res = response.text;
                    const formattedObject = res.replace(/^```[\s]*json\s*/, '')
                        .replace(/```$/, '')
                        .trim();
                    console.log("formattedObject", formattedObject);
                    const parsedObject = JSON.parse(formattedObject);
                    console.log(parsedObject);

                    // generate videoId
                    const youtubeVideoId = await generateVideo(course.topic + ':' + chapter.topic)
                    console.log(youtubeVideoId);

                    // save into database
                    const dbResponse = await createChapterList({
                        iid: course.id,
                        videoId: youtubeVideoId,
                        chapterContent: parsedObject,
                        userId: user.id,
                        category: course.category,
                        duration: chapter.duration,
                        topic: course.topic
                    })

                    console.log("dbResponse for inserting chapterList", dbResponse);
                    // updateCourseLayout in db
                    const data = {
                        courseId: dbResponse.courseId,
                        userId: user.id
                    }
                    await updateCourseLayout(course.id, data);
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Chapters</h2>
            {course.chapters.map((chapter, idx) => (
                <Card key={chapter.topic} className="mb-4">
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
            {generateButton === true && <div className="mt-8 flex justify-center">
                <Button
                    className="bg-[#0080FF] hover:bg-[#0080FF]/90 text-white px-6 py-3 rounded-md font-medium"
                    onClick={generateChapterContent}
                >
                    Generate Course Content
                </Button>
            </div>}
            {/* <div className="mt-8 flex justify-center">
                <Button
                    className="bg-[#0080FF] hover:bg-[#0080FF]/90 text-white px-6 py-3 rounded-md font-medium"
                    onClick={generateChapterContent}
                >
                    Generate Course Content
                </Button>
            </div> */}
        </div>
    );
}
