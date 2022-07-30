import { validateDmgStats } from './filterText.js';
import { customErrorMsg } from '../../DOM/errorMsg.js';

// populate the HTML file
export const populateHTML = async (scannedTextObj, dmgStats) => {
	try {
		const scannedText = scannedTextObj.ParsedResults[0].ParsedText;
		const artifacts = await scannedText.split("\n");
		const section = document.querySelector("body");
		for (let item = 0; item < artifacts.length; item++) {
				renderElements(artifacts, section, item, dmgStats);
		} // for
		document.body.append(document.createElement("hr"));
	} catch (error) {
		error = "ERROR: unable to render data!";
		customErrorMsg(error);
	}
} // populateHTML()

// render a new <p> element
const renderElements = async (artifacts, section, item, dmgStats) => {
	const newPara = document.createElement("p");
	const regex = new RegExp("^ATK$");
	if (artifacts[item].match(regex)) {
		dmgStats.mainStats.ATK = artifacts[item + 1];
		newPara.textContent = `Main stat: ${artifacts[item]}: ${artifacts[item + 1]}`;
	} // if
	else {
		(validateDmgStats(artifacts[item], dmgStats)) ?
			(newPara.textContent = `${artifacts[item]}`) // if
			: console.log(`This stat is not factored in calculating damage`); // else
	} // else
	section.appendChild(newPara);
} // renderElements()