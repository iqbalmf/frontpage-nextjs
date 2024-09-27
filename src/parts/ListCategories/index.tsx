import React from 'react';
import CategoryItem from "@/parts/ListCategories/CategoryItem";

interface CategoriesItem {
    imageName: string,
    name: string,
    total: number,
}

function Index() {
    const categories: CategoriesItem[] = [
        {
            imageName: "/public/images/icon-business-development.svg",
            name: "Business Development",
            total: 12345,
        },
        {
            imageName: "/public/images/icon-content-writer.svg",
            name: "Content Writer",
            total: 678,
        },
        {
            imageName: "/public/images/icon-product-advertisement.svg",
            name: "Product Advertisement",
            total: 456,
        },
        {
            imageName: "/public/images/icon-customer-relationship.svg",
            name: "Customer Relationship",
            total: 1324,
        },
        {
            imageName: "/public/images/icon-game-development.svg",
            name: "Game Development",
            total: 435,
        },
        {
            imageName: "/public/images/icon-travel-guidance.svg",
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
                        categories.map((item, index) => {
                            return <CategoryItem key={index} item={item.name}></CategoryItem>
                        }))
                    : (
                        <div className={"w-full text-center py-12"}>No Item Found
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Index;