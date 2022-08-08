// returns regular expressions of each artifact stat type
export const regexStats = () => {
    const critRate = new RegExp("^CRIT Rate[+-]?([0-9]+\.?[0-9]*)\%$");
    const critDmg = new RegExp("^CRIT DMG[+-]?([0-9]+\.?[0-9]*)\%$");
    const em = new RegExp("^Elemental Mastery[+-]?[0-9]*$");
    const flatATK = new RegExp("^ATK[+-]?[0-9]*$");
    const atkPcnt = new RegExp("^ATK[+-]?([0-9]+\.?[0-9]*)\%$");
    return {
      critRate,
      critDmg,
      em,
      flatATK,
      atkPcnt,
    }
}