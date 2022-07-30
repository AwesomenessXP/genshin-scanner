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
            }
            catch (error) {
                console.log(error);
            }
        });

        submitBtn().addEventListener('click', () => {
            const recentImage = sessionStorage.getItem('artifact');
            if (recentImage) {
                const img = new Image();
                const canvas = document.getElementById('img-preview');
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, 640, 360);
                img.src = recentImage;
                img.onload = () => {
                    // get the scale
                    var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
                    // get the top left position of the image
                    var x = (canvas.width / 2) - (img.width / 2) * scale;
                    var y = (canvas.height / 2) - (img.height / 2) * scale;
                    context.drawImage(img, x, y, img.width * scale, img.height * scale);
                }
            } // if
        });
    }// async()

    return {
        requestImg,
    }
}