import React from 'react';
import Link from "next/link";

interface ImageCourse {
    image: string
}

function CoursePhoto({image}: ImageCourse) {
    return (
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <div className="item h-52 bg-indigo-950 relative">
                <figure className="item-image h-full">
                    <img
                        src={image}
                        alt="image-course"
                        className="object-cover h-full w-full"
                        style={{ aspectRatio: '16 / 9' }}
                    />
                </figure>
            </div>
        </div>
    );
}

export default CoursePhoto;