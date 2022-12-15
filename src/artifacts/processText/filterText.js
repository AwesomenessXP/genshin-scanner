import { regexStats } from './regexStats.js';

// Validate the text that was parsed
/**
 * args: (string from array of parsed text), (obj w/ artifact data) 
 * returns: true if valid, else false
 */
export function validateDmgStats(stat, dmgStats) {
  const artifacts = new Map().set("Gladiator's Destiny", "Emblem"); // TODO: WILL USE LATER!!
  if (regexStats().em.test(stat)) { // if flat stat
    dmgStats.subStats.elemMastery = stat.replace('Elemental Mastery+', "");
    return true;
  }// if
  else if (regexStats().flatATK.test(stat)) { // if flat stat
    dmgStats.subStats.atk = stat.replace('ATK+', '');
    return true;
  }// else if
  // if stat is a percentage:
  else if (regexStats().critRate.test(stat) ||
          regexStats().critDmg.test(stat) ||
          regexStats().atkPcnt.test(stat)) {
    extractNumber(stat, dmgStats);
    return true;
  }// if
  return false;
} // validatedmgStats()

// removes 'CRIT RATE' or 'CRIT DMG' or 'ATK' from the string
/**
 * args: (string from parsed text array), (obj w/artifact data)
 * removes strings around the numbers, then saves the numbers in dmgStats object
 */
const extractNumber = (stat, dmgStats) => {
  if (regexStats().critRate.test(stat)) {
    dmgStats.subStats.critRate = stat.replace('CRIT Rate+', "")
      .replace('%', '');
  }

  if (regexStats().critDmg.test(stat)) {
    dmgStats.subStats.critDmg = stat.replace('CRIT DMG+', "")
    .replace('%', '');
  }

  if (regexStats().atkPcnt.test(stat)) {
    dmgStats.subStats.atkPercent = stat.replace('ATK+', "")
    .replace('%', '');
  }
} // extractNum()