import { regexStats } from './regexStats.js';

// Validate the text that was parsed
export function validateDmgStats(stat, dmgStats) {
  const artifacts = new Map().set("Gladiator's Destiny", "Emblem"); // TODO: WILL USE LATER!!
  if (regexStats().em.test(stat)) {
    dmgStats.subStats.elemMastery = stat.replace('Elemental Mastery+', '');
    return true;
  }// if
  else if (regexStats().flatATK.test(stat)) {
    dmgStats.subStats.atk = stat.replace('ATK+', '');
    return true;
  }// else if
  else if (regexStats().regex.test(stat) ||
         regexStats().critDmg.test(stat) ||
        regexStats().atkPcnt.test(stat)) {
    extractNumber(stat, dmgStats);
    return true;
  }// if
  return false;
} // validatedmgStats()

// removes 'CRIT RATE' or 'CRIT DMG' or 'ATK' from the string
const extractNumber = (stat, dmgStats) => {
  (regexStats().regex.test(stat)) ?
    dmgStats.subStats.critRate = stat.replace('CRIT Rate+', "")
      .replace('%', ''): null;
  (regexStats().critDmg.test(stat)) ?
    dmgStats.subStats.critDmg = stat.replace('CRIT DMG+', "")
      .replace('%', ''): null;
  (regexStats().atkPcnt.test(stat)) ?
    dmgStats.subStats.atkPercent = stat.replace('ATK+', "")
      .replace('%', ''): null;
} // extractNum()