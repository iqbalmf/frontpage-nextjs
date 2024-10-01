import React from 'react';
interface Rating {
    rating: number
}
function Star({rating}: Rating) {
    return (
        <div>
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={index < rating ? 'gold' : 'gray'}
                        className="w-4 h-4"
                    >
                        <path
                            d="M12 2.25l3.09 6.26 6.91 1-5 4.87L18 21.75 12 18.19 6 21.75l1-6.87-5-4.87 6.91-1L12 2.25z"/>
                    </svg>
                ))}
            </div>
        </div>
    );
}

export default Star;