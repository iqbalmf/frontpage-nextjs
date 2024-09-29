import React from 'react';
import CategoryItem from "@/parts/ListCategories/CategoryItem";
import Category from "@/model/category";


function Index() {
    const categories: Category[] = [
        {
            id: 1,
            imageName: "/images/icon-business-development.svg",
            name: "Business Development",
            total: 12345,
        },
        {
            id: 2,
            imageName: "/images/icon-content-writer.svg",
            name: "Content Writer",
            total: 678,
        },
        {
            id: 3,
            imageName: "/images/icon-product-advertisement.svg",
            name: "Product Advertisement",
            total: 456,
        },
        {
            id: 4,
            imageName: "/images/icon-customer-relationship.svg",
            name: "Customer Relationship",
            total: 1324,
        },
        {
            id: 5,
            imageName: "/images/icon-game-development.svg",
            name: "Game Development",
            total: 435,
        },
        {
            id: 6,
            imageName: "/images/icon-travel-guidance.svg",
            name: "Travel Guidance",
            total: 354,
        }

    ]
    return (
        <div className={" justify-between items-center"}>
            <div className="w-auto">
                <h2 className="text-lg text-gray-600">Category</h2>
                <h3 className="text-xl text-gray-900">
                    Explore & <span className={'text-teal-400'}>Learn</span>
                </h3>
            </div>
            <div className={"flex flex-wrap justify-start items-center -mx-6 mt-6"}>
                {categories.length > 0 ? (
                        categories.map((item) => {
                            return <CategoryItem key={item.id} item={item}></CategoryItem>
                        }))
                    : (
                        <div className={"w-full text-center py-12"}>No Categories Found
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Index;