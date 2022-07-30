export const regexStats = () => {
    const regex = new RegExp("^CRIT Rate[+-]?([0-9]+\.?[0-9]*)\%$");
    const critDmg = new RegExp("^CRIT DMG[+-]?([0-9]+\.?[0-9]*)\%$");
    const em = new RegExp("^Elemental Mastery[+-]?([0-9]+\.?[0-9]*)\%$");
    const flatATK = new RegExp("^ATK[+-]?[0-9]*$");
    const atkPcnt = new RegExp("^ATK[+-]?([0-9]+\.?[0-9]*)\%$");
    return {
      regex,
      critDmg,
      em,
      flatATK,
      atkPcnt,
    }
}