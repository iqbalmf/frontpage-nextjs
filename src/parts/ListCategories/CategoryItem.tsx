import React from 'react';
import Category from "@/model/category";

interface CategoryProps {
    item: Category
}

function CategoryItem({item}: CategoryProps) {
    return (
        <div className={"w-3/6 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 mb-8"}>
            <div className={'card h-60 w-full p-6 border rounded-lg shadow transition-all duration-300 hover:bg-indigo-200 flex flex-col justify-between'}>
                <img src={item.imageName} alt="category-image" className={"mx-auto w-12 h-12"}/>
                <div className={"mt-2"}>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                        {item.total} Courses
                    </p>
                </div>

            </div>

        </div>
    );
}

export default CategoryItem;