import React, { useState } from 'react';

import { AttributeProps } from '../types';

const AttributeComponent = React.memo(({attributeName, val, maxVal, callback}: AttributeProps) => {
  function updateValue(funcType: 'add' | 'sub') {
    if (funcType === 'add') {
        if (val === maxVal) {
            return;
        }
        callback(attributeName, val + 1);
    } else {
        if (val === 0) {
            return;
        }
        callback(attributeName, val - 1);
    }
    return;
  }

  return (
    <div className="p-4 mb-2 bg-gray-100 flex justify-between items-center">
      <h4 className="text-lg font-semibold">
        {attributeName} - {val}
      </h4>
      <div>
          <button className='btn px-2 py-1 bg-blue-500 text-white' onClick={() => updateValue('add')}>+</button>
          <button className='btn px-2 py-1 bg-red-500 text-white ml-2' onClick={() => updateValue('sub')}>-</button>
        </div>
    </div>
  )
});

export default AttributeComponent;
