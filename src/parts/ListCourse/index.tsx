import React from 'react';
import Link from 'next/link'
import CourseItem from "@/parts/ListCourse/CourseItem";
import Course from "@/model/courses";

interface CourseProps {
    dataCourse?: Course[];
}

function Index({dataCourse}: CourseProps) {
    return (
        <>
            <div className={"flex justify-between items-center"}>
                <div className={"w-auto"}>
                    <h2 className="text-lg text-gray-600">
                        New Classes
                    </h2>
                    <h3 className="text-xl text-gray-900">
                        Summer <span className="text-teal-400">Productive</span>
                    </h3>
                </div>
                <div className="w-auto">
                    <Link href={"/courses"} className={"text-gray-600 hover:underline text-sm"}>View All Courses</Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-start items-start -mx-6 mt-6">
                {dataCourse?.length ? dataCourse?.map((course) => (
                    <CourseItem item={course} key={course.id}></CourseItem>
                )) : <div className="w-full text-center py-12">No Course Found</div>}
            </div>
        </>
    );
}

export default Index;