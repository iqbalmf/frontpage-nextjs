import React from 'react';

interface CategoryItem {
    item: string;
}

function CategoryItem({item}: CategoryItem) {
    return (
        <div>
            {item}
        </div>
    );
}

export default CategoryItem;