import React from 'react';
import Course from "@/model/courses";

interface ItemCourse {
    item: Course
}

function CourseItem({item}: ItemCourse) {
    return (
        <div className={'w-full md:w-1/4 px-4 mb-6'}>
            <div className={"item h-50 relative"}>
                <figure className="item-image h-full">
                    <img
                        src={item?.thumbnail ?? ""}
                        alt={item?.name ?? "some information"}
                        className={"object-cover w-full h-full"}
                        style={{ aspectRatio: '16 / 9' }}
                    />
                </figure>
                <div className="item-meta mt-2">
                    <h4 className="text-lg text-gray-900">
                        {item?.name ?? "Course name"}
                    </h4>
                    <h5 className="text-sm text-gray-600">
                        {item?.level ?? "Course level"}
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;