import { defaultErrorMsg } from "./errorMsg";

export const renderCanvas = () => {
  const recentImage = sessionStorage.getItem('artifact');
  if (recentImage) {
    const img = new Image();
    const canvas = document.getElementById('img-preview');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 640, 360); // 'refresh' canvas by deleting any images in there
    img.src = recentImage;
    img.onload = () => {
      // get the scale
      var scale = Math.min(canvas.width / img.width, canvas.height / img.height); // find the factor used to get the height/width
      // get the top left position of the image
      var x = (canvas.width / 2) - (img.width / 2) * scale; // get the distance of width in pixels
      var y = (canvas.height / 2) - (img.height / 2) * scale; // get the distance of height in pixels
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  } // if
  else {
    defaultErrorMsg();
  }// else
}