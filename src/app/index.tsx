import React from 'react';

import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';
import { Attributes } from './types';

import AttributeComponent from './components/attribute';
import CategoryComponent from './components/category';
import SkillComponent from './components/skill';


const App = () => {
  const [currentAttributes, setAttributes] = React.useState<Attributes>({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  });

  const updateAttrinute = (attributeName: string, value: number) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attributeName]: value,
    }));
  };

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
                  val={currentAttributes[attribute]}
                  callback={updateAttrinute}
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
              {SKILL_LIST.map((skill: { name: string }) => (
                <SkillComponent
                  key={skill.name}
                  skillName={skill.name}
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
