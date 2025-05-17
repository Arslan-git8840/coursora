import CourseView from '@/components/course-view/courseView';
import { getChapterList } from '@/lib/drizzleActions'
import React from 'react'

export default async function Page({ params }) {
  const courseId = params.id;

  const res = await getChapterList(courseId);
  console.log(res);
  return (
    <div>  
      <CourseView chapterList={res} />
    </div>
  );
}
