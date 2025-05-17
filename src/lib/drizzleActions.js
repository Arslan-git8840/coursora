'use server';
import { db } from "@/db/drizzle";
import { chapterList, courseLayout } from "@/db/schema";
import { eq } from "drizzle-orm";
// import { geminiResponseSchema } from "@/lib/validation";

const saveCourseLayout = async ({ GeminiResponse, data }) => {

    // const sampleGeminiResponse = JSON.parse(GeminiResponse);
    // console.log(sampleGeminiResponse);

    try {
        // const parsed = geminiResponseSchema.parse(GeminiResponse);

        const response = await db.insert(courseLayout).values({
            category: data.category,
            topic: data.topic,
            topicDescription: GeminiResponse.topicDescription || "",
            difficulty: data.difficulty,
            duration: data.duration,
            hasVideo: data.hasVideo,
            noOfChapters: data.noOfChapters,
            chapters: GeminiResponse.chapters || [],
            id: data.id,
        }).returning({ id: courseLayout.id });
        const id = response[0].id;
        console.log("Course ID:", id);
        console.log("✅ Course inserted successfully.");
        return {
            success: true,
            message: "Course inserted successfully.",
            courseId: id
        }
    } catch (err) {
        console.error("❌ Failed to insert courseLayout:", err);
    }
}

const getCourseLayout = async (id) => {
    try {
        const response = await db.select().from(courseLayout).where(eq(courseLayout.id, id));
        return response;
    } catch (err) {
        console.error("No courseLayout found", err);
    }
}

// const createChapterList = async ({ iid,
//     category,
//     duration,
//     chapterContent,
//     topic,
//     userId,
//     videoId }) => {
//     try {
//         const response = await db.insert(chapterList).values({
//             courseId: iid,
//             category,
//             duration,
//             chapterContent,
//             topic,
//             userId,
//             videoId
//         }).returning({ courseId: chapterList.courseId });
// ;
//         console.log("✅ ChapterList inserted successfully.");
//         const id = response[0].courseId;
//         return {
//             success: true,
//             message: "Course ChapterList successfully.",
//             courseId: id,
//         }
//     } catch (err) {
//         console.error("❌ Failed to insert ChapterList:", err);
//     }
// }

const createChapterList = async ({ iid, category, duration, chapterContent, topic, userId, videoId }) => {
    try {
        const response = await db.insert(chapterList).values({
            courseId: iid,
            category,
            duration,
            chapterContent,
            topic,
            userId,
            videoId
        }).returning({ courseId: chapterList.courseId });

        console.log("✅ ChapterList inserted successfully.");
        const id = response[0].courseId;

        return {
            success: true,
            message: "Course ChapterList successfully.",
            courseId: id,
        }
    } catch (err) {
        console.error("❌ Failed to insert ChapterList:", err);
    }
}


const getChapterList = async (id) => {
    try {
        const response = await db.select().from(chapterList).where(eq(chapterList.courseId, id));
        return response;
    } catch (err) {
        console.error("No chapterList found", err);
    }
}

const getAllCourses = async (userId) => {
    try {
        const response = await db.select().from(courseLayout).where(eq(courseLayout.userId, userId));
        return response;
    } catch (err) {
        console.error("No courseLayout found", err);
    }
}

const updateCourseLayout = async (id, data) => {
    try {
        await db.update(courseLayout).set(data).where(eq(courseLayout.id, id));
        console.log("✅ CourseLayout updated successfully.");
        return {
            success: true,
            message: "CourseLayout updated successfully.",
        }
    } catch (err) {
        console.error("❌ Failed to update courseLayout:", err);
    }
}

export { saveCourseLayout, getCourseLayout, createChapterList, getChapterList, getAllCourses, updateCourseLayout };
