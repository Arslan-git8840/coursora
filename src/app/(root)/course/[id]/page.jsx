import CourseLayout from '@/components/course-layout/course-layout'
import { getCourseLayout } from '@/lib/drizzleActions';
import React from 'react'

async function Page({ params }) {
  const course = await getCourseLayout(params.id);
  console.log(course);
  return (
    <div>
      <CourseLayout data={course[0]} start={true} generate={false}/>
    </div>
  )
}

export default Page