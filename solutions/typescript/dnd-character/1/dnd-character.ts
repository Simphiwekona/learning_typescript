export class DnDCharacter {

  public strength?: number;
  public dexterity?: number;
  public constitution?: number;
  public intelligence?: number;
  public wisdom?: number;
  public charisma?: number;
  public hitpoints?: number;
   
    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = DnDCharacter.generateAbilityScore();
    }
  
  public static generateAbilityScore(): number {
    const rolls = Array.from({ length: 4}, () => Math.floor(Math.random() * 6) + 1);
    rolls.sort((x, y) => x - y);
    return rolls.slice(1).reduce((sum, val) => sum + val, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
