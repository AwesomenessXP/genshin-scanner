// returns regular expressions of each artifact stat type
export const regexStats = () => {
  const critRate = /^CRIT Rate[+-]?([0-9]+\.?[0-9]*)\%$/;
  const critDmg = /^CRIT DMG[+-]?([0-9]+\.?[0-9]*)\%$/;
  const em = /^Elemental Mastery[+-]?[0-9]*$/;
  const flatATK = /^ATK[+-]?[0-9]*$/;
  const atkPcnt = new RegExp("^ATK[+-]?([0-9]+\.?[0-9]*)\%$");
  return {
    flatATK,
    atkPcnt,
    critDmg,
    critRate,
    em,
  }
}