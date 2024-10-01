import React from 'react';
import Star from "@/parts/Review/Star";

interface User {
    id: number,
    name: string,
    email: string,
    role: string,
    profession: string,
    avatar: string,
}

interface Review {
    id: string,
    rating: number,
    note: string,
    user: User,
}

interface Props {
    review: Review[];
}

function Index({review}: Props) {
    return (
        <div>
            <div className="items-center">
                {
                    review.map((item) => (
                        <div key={item.id} className={"py-4"}>
                            <div className="flex flex-col items-start">
                                <Star rating={item.rating}/>
                            </div>
                            <p className={"py-2 text-gray-500"}>{item.note ?? ""}</p>
                            <div className={"flex flex-row items-center"}>
                                <img
                                    src={item.user.avatar}
                                    alt={"image-user"}
                                    className="rounded-full object-cover"
                                    style={{width: 60, height: 60}}
                                />
                                <div className="ml-4">
                                    <h2 className="text-lg text-gray-900">
                                        {item.user.name ?? "Mentor's name"}
                                    </h2>
                                    <h3 className="text-sm text-gray-400">
                                        {item.user.profession}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Index;