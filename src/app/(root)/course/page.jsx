import AllCourses from '@/components/all-courses/allCourses'
import { getAllCourses } from '@/lib/drizzleActions';
import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
async function Page() {
  const user = await currentUser();
  console.log(user.id);
  const allCourses = await getAllCourses(user.id);
  console.log(allCourses);
  return (
    <div>
      <AllCourses courses={allCourses}/>
    </div>
  )
}

export default Page