import React from 'react';
import { SkillProps } from '../types';

const SkillComponent = React.memo(({ skillName, val, availableVal, attributeModifier, attributeModifierValues, callback }: SkillProps) => {
  function updateValue(funcType: 'add' | 'sub') {
    if (funcType === 'add') {
        if (availableVal <= 0) {
          alert('You do not have enough skill points to allocate');
          return;
        }
        callback(skillName, val + 1);
    } else {
        if (val === 0) {
          alert('You cannot go less than 0 skill points');
          return;
        }
        callback(skillName, val - 1);
    }
    return;
  }

  return (
    <div className="p-4 mb-2 bg-gray-100 flex justify-between items-center">
      <h4 className="text-lg font-semibold">
        {skillName} - {val + attributeModifierValues.modifier}
        <br />
        <span className='text-sm text-gray-500'>Attribute Modifier: { attributeModifier }</span>
        <br />
        <span className='text-sm text-gray-500'>Spent: { val }, Available: {availableVal}, Attribute: {attributeModifierValues.modifier}</span>
      </h4>
      <div>
        <button className='btn px-2 py-1 bg-blue-500 text-white' onClick={() => updateValue('add')}>+</button>
        <button className='btn px-2 py-1 bg-red-500 text-white ml-2' onClick={() => updateValue('sub')}>-</button>
      </div>
    </div>
  )
});
  
export default SkillComponent;
