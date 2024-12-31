import React, { useEffect } from 'react';
import { CategoryProps } from '../types';

import { CLASS_LIST } from '../consts';

const CategoryComponent = React.memo(({ categoryName, currentAttributes }: CategoryProps) => {
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    let tempActive = true;
    Object.keys(CLASS_LIST[categoryName]).forEach((attribute) => {
      if (CLASS_LIST[categoryName][attribute] > currentAttributes[attribute]) {
        tempActive = false;
      }
    });
    setActive(tempActive);
  }, [currentAttributes]);
  

  return (
  <div className="p-4 mb-2 bg-gray-100 flex justify-between items-center">
    <h4 className="text-lg font-semibold">
      {categoryName} 
    </h4>
    <span className={`ml-2 px-2 py-1 rounded text-sm ${active ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
      {active ? 'Active' : 'Inactive'}
    </span>
  </div>
)});

export default CategoryComponent;
