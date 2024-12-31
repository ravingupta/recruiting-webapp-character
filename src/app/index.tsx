import React, { useEffect } from 'react';

import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST, ATTRIBUTES_DEFAULT, SKILLS_DEFAULT } from './consts';
import { Attributes, AttributeValues } from './types';

import AttributeComponent from './components/attribute';
import CategoryComponent from './components/category';
import SkillComponent from './components/skill';


const App = () => {
  const [currentAttributes, setAttributes] = React.useState<{ [a: string]: AttributeValues }>(ATTRIBUTES_DEFAULT);
  const [currentSkills, setSkills] = React.useState<{ [a: string]: number }>(SKILLS_DEFAULT);

  const modifier = (val) => {
    return Math.floor((val - 10) / 2);
  };

  const updateAttribute = (attributeName: string, value: number) => {
    const modifierValue = modifier(value);
    let skillPoints = 10;
    if (modifierValue > 0) {
      skillPoints += (modifierValue * 4);
    }
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attributeName]: {
        ...prevAttributes[attributeName],
        value,
        modifier: modifier(value),
        skillPoints,
      },
    }));
  };

  const updateSkill = (skillName: string, value: number) => {
    // let skill = SKILL_LIST.find((skill) => skill.name === skillName);
    
    setSkills((prevSkills) => ({
      ...prevSkills,
      [skillName]: value,
    }));
  }

  const getUsedSkillValue = (attributeModifier: string) => {
    const allSkills = SKILL_LIST.filter((skill) => skill.attributeModifier === attributeModifier);
    let totalVal = 0;
    allSkills.forEach((skill) => {
      totalVal += currentSkills[skill.name];
    });
    
    return totalVal;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 px-4 shadow-md">
        <h1 className="text-2xl font-bold">React Coding Exercise - Ravin Gupta</h1>
      </header>

      <div className="px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-white p-6">
            <h2 className="text-xl font-bold mb-4">Attributes</h2>
            <div className="space-y-4">
              {ATTRIBUTE_LIST.map((attribute) => (
                <AttributeComponent 
                  key={attribute}
                  attributeName={attribute}
                  maxVal={20}
                  val={currentAttributes[attribute].value}
                  modifier={currentAttributes[attribute].modifier}
                  callback={updateAttribute}
                />
              ))}
            </div>
          </section>

          <section className="bg-white p-6">
            <h2 className="text-xl font-bold mb-4">Classes</h2>
            <div className="space-y-2">
              {Object.entries(CLASS_LIST).map(([className, attributes]: [string, Attributes]) => (
                <CategoryComponent
                  key={className}
                  categoryName={className}
                  currentAttributes={currentAttributes}
                />
              ))}
            </div>
          </section>

          <section className="bg-white p-6">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="space-y-2">
              {SKILL_LIST.map((skill: { name: string, attributeModifier: string }) => (
                <SkillComponent
                  key={skill.name}
                  skillName={skill.name}
                  attributeModifier={skill.attributeModifier}
                  val={currentSkills[skill.name]}
                  // This needs to be updated to reflect the max available value of the skill because of common attribute modifier value accross multiple skills
                  // availableVal={currentAttributes[skill.attributeModifier].skillPoints - currentSkills[skill.name]}
                  availableVal={currentAttributes[skill.attributeModifier].skillPoints - getUsedSkillValue(skill.attributeModifier)}
                  attributeModifierValues={currentAttributes[skill.attributeModifier]}
                  callback={updateSkill}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
