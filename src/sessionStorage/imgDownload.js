import { renderCanvas } from '../DOM/renderCanvas.js';
import { customErrorMsg } from '../DOM/errorMsg.js';

export const userImage = () => {
	const screenshot = () => document.getElementById('screenshot');
	const submitBtn = () => document.getElementById('submit');
	// --------------------- PUBLIC ATTRIBUTES ----------------------------------
	const requestImg = async () => {
	// TEST OUT IMAGE THEN URL
		screenshot().addEventListener('change', function () {
			try {
				const reader = new FileReader(); // converts image to data URL
				reader.addEventListener('load', () => {
					sessionStorage.setItem('artifact', reader.result);
				});
				reader.readAsDataURL(this.files[0]); // result will be in binary
			} // try
			catch (error) {
				error = "ERROR: no image found!";
				customErrorMsg(error);
			} // catch
		});

		submitBtn().addEventListener('click', function () {
			renderCanvas();
	});
		
}// userImage()

	return {
		requestImg,
	}
}