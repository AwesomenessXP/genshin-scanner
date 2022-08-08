import { validateDmgStats } from './filterText.js';
import { customErrorMsg } from '../../DOM/errorMsg.js';

/**
 * args: (parsed text obj), (obj w/artifact data)
 * populates the HTML, catch error if no text
 */
export const populateHTML = async (scannedTextObj, dmgStats) => {
	try {
		const scannedText = scannedTextObj.ParsedResults[0].ParsedText;
		const artifacts = await scannedText.split("\n");
		const section = document.querySelector("body");
		for (let item = 0; item < artifacts.length; item++) {
			renderElements(artifacts, section, item, dmgStats); // pass in parsed text, body of HTML, element (ex: ATK+14), and dmgStats object
		} // for
		document.body.append(document.createElement("hr"));
	} catch (error) {
		error = "ERROR: unable to render data!";
		customErrorMsg(error);
	}
} // populateHTML()

// render a new <p> element
/**
 * args: (array of parsed text), (body query selector), (string from array), (obj)
 * appends new elements to the screen
 */
const renderElements = async (artifacts, section, item, dmgStats) => {
	const newPara = document.createElement("p");
	const regex = new RegExp("^ATK$"); // expand on this later, include other main stats
	if (artifacts[item].match(regex)) { // if this is a main stat
		dmgStats.mainStats.ATK = artifacts[item + 1];
		newPara.textContent = `Main stat: ${artifacts[item]}: ${artifacts[item + 1]}`;
	} // if
	else { // if this is a substat
		(validateDmgStats(artifacts[item], dmgStats)) ?
			(newPara.textContent = `${artifacts[item]}`) // if valid, display content
			: console.log(`This stat is not factored in calculating damage`); // else, log invalid result
	} // else
	section.appendChild(newPara);
} // renderElements()