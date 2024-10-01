import React, {useState} from 'react';

interface Lesson {
    id: string;
    name: string;
    video: string;
}

interface Chapter {
    id: string;
    name: string;
    lesson: Lesson[];
}

interface AccordionProps {
    chapters: Chapter[];
}

function Index({chapters}: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const toggleAccordion = (index: number) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };
    return (
        <div>
            <div className="max-w-md border-b border-slate-200">
                {chapters.map((item, index) => (
                    <div key={item.id} className="border rounded-lg">

                        <button onClick={() => toggleAccordion(index)}
                                className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none">
                            <span className={"font-medium"}>{item.name}</span>
                            <span>{openIndexes.includes(index) ? '▲' : '▼'}</span>
                        </button>

                        <div className={`transition-all duration-500 ease-in-out max-h-96 overflow-scroll`}>
                            {openIndexes.includes(index) && (
                                <div className="px-4 pb-4">
                                    {item.lesson.map((subItem) => (
                                        <div key={subItem.id} className="flex items-center py-2">
                                            <span className="text-sm hover:bg-gray-200 hover:cursor-pointer">{subItem.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Index;