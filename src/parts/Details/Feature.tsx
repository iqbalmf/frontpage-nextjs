import React from 'react';

interface Feature{
    icon: string,
    meta: string,
    value: string
}
interface Data {
    data: Feature
}
function Feature({data}: Data) {
    return (
        <div className="border border-gray-300 bg-white p-6 w-full md:w-1/3"
             style={{width: 290}}>
            <div className="flex">
                <div className="w-auto">
                    <img src={data.icon} alt="image"/>
                </div>
                <div className="ml-5">
                    <span className="text-gray-600 block uppercase">{data.meta}</span>
                    <span className="text-gray-900 text-3xl">
                        {data.value}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Feature;