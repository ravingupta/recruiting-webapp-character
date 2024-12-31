import React from 'react';
import { SkillProps } from '../types';

const SkillComponent = React.memo(({ skillName }: SkillProps) => (
  <div className="p-4 mb-2 bg-gray-100">
    <h4 className="text-lg font-semibold">{skillName}</h4>
  </div>
));
  
export default SkillComponent;
