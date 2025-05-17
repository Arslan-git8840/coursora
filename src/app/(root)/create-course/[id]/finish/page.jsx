import FinishPage from '@/components/finish-page'
import { getCourseLayout } from '@/lib/drizzleActions';
import React from 'react'

async function Page({ params }) {
    const courseId = params.id;
    console.log(courseId);
    const course = await getCourseLayout(courseId);
    console.log(course);
    return (
        <div>
            <FinishPage course={course[0]} />
        </div>
    )
}

export default Page