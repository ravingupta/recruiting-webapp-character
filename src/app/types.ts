export type Attributes = {
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export interface AttributeProps {
    attributeName: string;
    maxVal: number;
    val: number;
    modifier: number;
    callback: (attributeName: string, value: number) => void;
}

export interface AttributeValues {
    value: number;
    modifier: number;
    skillPoints: number;
}

export interface CategoryProps {
  categoryName: string;
  currentAttributes: {
    [a: string]: AttributeValues
  };
}

export interface SkillProps {
  skillName: string;
  attributeModifier: string;
  availableVal: number;
  val: number;
  attributeModifierValues: AttributeValues;
  callback: (skillName: string, value: number) => void;
}