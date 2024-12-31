export type Attributes = {
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export interface CategoryProps {
  categoryName: string;
  currentAttributes: Attributes;
}

export interface SkillProps {
  skillName: string;
}

export interface AttributeProps {
    attributeName: string;
    maxVal: number;
    val: number;
    callback: (attributeName: string, value: number) => void;
}