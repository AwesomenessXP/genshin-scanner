// returns regular expressions of each artifact stat type
export const regexStats = {
  regexFlatATK: /^ATK[+-]?[0-9]*$/,
  regexAtkPcnt: /^ATK[+-]?([0-9]+\.?[0-9]*)\%$/,
  regexCritDmg: /^CRIT DMG[+-]?([0-9]+\.?[0-9]*)\%$/,
  regexCritRate: /^CRIT Rate[+-]?([0-9]+\.?[0-9]*)\%$/,
  regexEm: /^Elemental Mastery[+-]?[0 - 9]*$/,
}